var container;
var camera, scene, raycaster, renderer;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 500, theta = 0;
var frustumSize = 1000;
init();
animate();

var cubes 

function init() {

	container = document.createElement( 'div' );

	document.body.appendChild( container ); // place three.js in body of file
	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000 );
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	initEvents()
	addLights()

	cubes = addRndCubeArr()
	console.log(cubes)
}

function addLights(){
	
	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 ).normalize();
	var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	scene.add( light );

	scene.add( light );

}
function initEvents(){

	document.getElementById("resetBtn").onclick = reset 
	document.addEventListener( 'mousemove', onDocumentMouseDown, false );

}

function onDocumentMouseDown( event ){

	event.preventDefault(); // function that presents default event from taking place 
    mouse.x = ( event.clientX / window.innerWidth ) ;
    mouse.y = ( event.clientY / window.innerHeight ) ;

    for (var z = 0; z < cubes.length; z++) { 

    	let row = cubes[z]
    	
    	for (var y = 0; y < row.length; y ++ ){

    		let col = cubes[y]
    		
    		for(var x = 0; x < col.length; x ++ ){

    			let obj = cubes[x][y][z]
    			obj.scale.set(20*mouse.x,5*(mouse.x+mouse.y),20*mouse.y)

    		}

    	}
    }

}




function addRndCubeArr(){

	// let dimX = 5 + Math.random()*10
	// let dimY = 5 + Math.random()*10
	// let dimZ = 5 + Math.random()*10


	let dimX = 3
	let dimY = 3 
	let dimZ = 3 

	let space = 25
	let scale = 10

	var geo = new THREE.BoxBufferGeometry( 1,1,1)

	let cubes = []


	for (var x = 0; x < dimX; x ++){

		let row = []

		for (var y = 0; y < dimY; y++){

			let col = []

			for (var z = 0; z < dimZ; z++){

				let material = new THREE.MeshLambertMaterial()
				let r = Math.floor(x/dimX*255)
				let g = Math.floor(y/dimX*255)
				let b = Math.floor(z/dimX*255)
				let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
				// console.log(rgb)
				var object = new THREE.Mesh( geo, material)
				object.material.color.set(rgb)	
				object.position.set(x*space,y*space,z*space)
				object.scale.set(scale,scale,scale)
				scene.add( object )

				col.push(object)

			}

			row.push(col)

		}

		cubes.push(row)

	}

	return cubes

}




function animate() {

	requestAnimationFrame( animate );
	render();

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



function reset(){

	console.log('reset scene')

	while(scene.children.length > 0){ 

    	scene.remove(scene.children[0]); 
	
	}

	addLights()

	cubes = addRndCubeArr()

}