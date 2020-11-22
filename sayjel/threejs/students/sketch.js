console.log('sketch.js')




var scene
var renderer
var camera
var light
var object
var theta = 0.5





init() // var setup
animate() // var draw

function init(){

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)



    var aspect = window.innerWidth / window.innerHeight //like width, height



    camera = new THREE.PerspectiveCamera(1, aspect, 1, 1000)
    camera.position.set(100, 100, 100)
    camera.lookAt(scene.position)



    var light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(-200, 200, 200)
    scene.add(light)



    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight)



    let container = document.getElementById('scene')
    container.appendChild(renderer.domElement)



    // //add box
    var geom = new THREE.BoxBufferGeometry(1, 1, 1)
    // var material = new THREE.MeshLambertMaterial({​​
    //     color: 0xff0000
    // }​​)
    object = new THREE.Mesh(geom)
    scene.add(object)


}




function animate(){
    requestAnimationFrame(animate)
    render()


}

function render(){


    theta += 0.01



    object.rotation.x += 0.01;
    object.rotation.y += 0.01;



    object.scale.x = Math.sin(theta) + 0.5
    renderer.render(scene, camera)
	
}
// function animate() {​​






// }​​



// function render() {​​



//     theta += 0.01



//     object.rotation.x += 0.01;
//     object.rotation.y += 0.01;



//     object.scale.x = Math.sin(theta) + 0.5
//     renderer.render(scene, camera)




// }