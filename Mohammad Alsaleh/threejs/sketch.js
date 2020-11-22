console.log('sketch.js')


var scence
var object 
var camera
var light
var renderer

init()		// var setup
animate()	// var draw

function init(){


	scene = new THREE.Scene()
	scene.backgroound = new THREE.Color(0xffffff)

	var aspect = window.innerWidth / window.innerHeight //like height and width 

	camera = new THREE.PerspectiveCamera(1, aspect, 1, 1000)

	camera.position.set(100,100,100)
	camera.lookAt(scene.position)

	var light = new THREE.DirectionalLight(0xffffff, 1)
	light.position.set(25,25,25)
	scene.add(light)

	renderer = new THREE.WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)

	let container = document.getElementById('scene')
	container.appendChild(renderer.domElement)

	var geom = new THREE.BoxBufferGeometry(1,1,1)
	var material = new THREE.MeshLambertMaterial({
		color:0xffffff
	})
	object = new THREE.Mesh(geom)
	scene.add(object)
	// scene.add( line );
	// const edges = new THREE.EdgesGeometry( geom );
	// var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {
	//  color: 0xffffff } ) );

	
}

function animate(){

		requestAnimationFrame(animate)
		render();
		

}
function render(){

	object.rotation.x += 0.01;
	object.rotation.y += 0.01;
	// lines.rotation.x += 0.01;
	// lines.rotation.y += 0.01;

	renderer.render(scene, camera)
}