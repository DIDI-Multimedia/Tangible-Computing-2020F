

var container;
var camera, scene, raycaster, renderer;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 500, theta = 0;
var frustumSize = 1000;
init();
animate();

function init() {

	container = document.createElement( 'div' );

	document.body.appendChild( container ); // place three.js in body of file
	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000 );
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );
	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );

	// raycaster = new THREE.Raycaster();
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	var geo = new THREE.BoxBufferGeometry( 1,1,1)
	fractalCubes(geo,4,300,0,0,0)


}

function fractalCubes(geo,step,scale,x,y,z){

	var object = new THREE.Mesh( geo, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );	
	object.position.set(x,y,z)
	object.rotation.set(Math.random()*2*3.14,Math.random()*2*3.14,Math.random()*2*3.14)
	object.scale.set(scale,scale,scale)
	scene.add( object )

	scale *= 0.5
	step -- 


	if (step > 0){

		fractalCubes(geo,step,scale,x+scale,y+scale,z+scale)
		fractalCubes(geo,step,scale,x-scale,y+scale,z+scale)
		fractalCubes(geo,step,scale,x-scale,y-scale,z+scale)
		fractalCubes(geo,step,scale,x-scale,y-scale,z-scale)	
		fractalCubes(geo,step,scale,x+scale,y+scale,z-scale)
		fractalCubes(geo,step,scale,x-scale,y+scale,z-scale)
		fractalCubes(geo,step,scale,x+scale,y-scale,z+scale)
		fractalCubes(geo,step,scale,x+scale,y-scale,z-scale)

	} 

}


function animate() {

	requestAnimationFrame( animate );
	render();
	// stats.update();

}

function render() {

	theta += 0.1;
	camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
	camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
	camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
	camera.lookAt( scene.position );
	camera.updateMatrixWorld();

	renderer.render( scene, camera );

}
