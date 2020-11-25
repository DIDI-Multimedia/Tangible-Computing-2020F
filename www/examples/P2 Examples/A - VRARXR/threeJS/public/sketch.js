console.log('threeJS example')

var container;
var camera, scene, renderer;
var radius = 500,
    theta = 0;
var frustumSize = 1000;
var cube, cube2
var frustumSize = 1000;

// instantiate a loader
const loader = new THREE.OBJLoader();


init(); // like setup in threeJS 
animate(); // like draw function for threeJS 

    // load a resource
    loader.load(
        // resource URL
        'mammoth.obj',
        // called when resource is loaded
        function(object) {

            scene.add(object);

        }
    );
// obj loader 




function init() {

    container = document.getElementById('scene');
    var aspect = window.innerWidth / window.innerHeight;

    // FOV, ASPECT RATIO, MIN, MAX 

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);


    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(3, 1, 1)
    scene.add(light);


    camera = new THREE.PerspectiveCamera(1, aspect, 1, 1000);
    camera.position.set(radius, radius, radius)
    camera.lookAt(scene.position) // takes three vectotr 


    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var geo = new THREE.BoxBufferGeometry(1, 1, 1)
    cube = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff
    }));
    scene.add(cube)

    cube2 = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff
    }));
    scene.add(cube2)




}


function animate() {

    requestAnimationFrame(animate);
    render();

}

function render() {

    theta += 0.1;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.scale.x = Math.sin(theta)+1
    cube.position.x = Math.cos(theta / 10) * 3
    cube2.position.z = Math.cos(theta / 10) * 3

    // camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
    // camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    // camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
    // camera.lookAt( scene.position );
    // camera.updateMatrixWorld();

    renderer.render(scene, camera);

}