
init()
animate()
start()


/*var geometry = new THREE.BoxGeometry( 1, 1, 1 )
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
var cube = new THREE.Mesh( geometry, material )
scene.add( cube )
console.log( scene )*/





function init() {

	elem = 'container'
	container  = document.getElementById( elem )

	scene = new THREE.Scene()
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 )
	camera.position.x = 200
	camera.position.y = 200
	camera.position.z = 200
	this.camera.target = new THREE.Vector3( 0, 0, 0 )


	renderer = new THREE.WebGLRenderer({ alpha:true, antialias: true })
	renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild( renderer.domElement )
    controls = new THREE.OrbitControls(camera, renderer.domElement )

}


function animate() {

	controls.update()
	renderer.render( scene, camera )
	requestAnimationFrame( animate )
}




function start() {

	console.log('sample:: ', sampleSoln)

	const {blocks} = sampleSoln

	for(block of blocks) {

		const {block_shape, block_f2f, block_rotation, block_translation, block_scale} = block

		const center_pt = utils.avg_Pt( block_shape, 0 )


		const blockMesh = utils3D.getExtrudedMesh({
			shapePts: block_shape, 
            depth: block_scale.y * block_f2f, 
            centerPt: center_pt,
            rotVec: block_rotation,
            scaleVec: block_scale,
            posVec: block_translation
		})

		scene.add(blockMesh)

	}
}