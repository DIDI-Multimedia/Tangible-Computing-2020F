console.log('sketch.js')

var container;
var camera, scene, renderer;
var pointLight;

let reflectionCube
let refractionCube

init()
animate()




/*

    reflectionCube = setCubeMap()

    scene = new THREE.Scene();
    scene.background = reflectionCube

    */

function setCubeMap() {
    //cubemap
    var path = 'textures/cube/clouds/';
    var format = '.png';

    var urls = ['textures/cube/clouds/2.png', 'textures/cube/clouds/4.png', 'textures/cube/clouds/top.png', 'textures/cube/clouds/white.png',
        'textures/cube/clouds/1.png', 'textures/cube/clouds/3.png'
    ];

    return new THREE.CubeTextureLoader().load(urls);

}

function setCamera() {

    // camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000)
    // camera.position.x = 200
    // camera.position.y = 200
    // camera.position.z = 200
    // camera.target = new THREE.Vector3(0, 0, 0)


    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 2000;

}


function init() {

    container = document.createElement('div');
    document.body.appendChild(container);


    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.VSMShadowMap; // default THREE.PCFShadowMap  THREE.VSMShadowMap PCFSoftShadowMap
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap  THREE.VSMShadowMap PCFSoftShadowMap

    container.appendChild(renderer.domElement);

    reflectionCube = setCubeMap()

    scene = new THREE.Scene();
    scene.background = reflectionCube


    setCamera()

    //controls
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 1.5;

    //

    //materials
    var cubeMaterial3 = new THREE.MeshLambertMaterial({
        color: 0xff6600,
        envMap: reflectionCube,
        combine: THREE.MixOperation,
        reflectivity: 0.3
    });
    var cubeMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xffee00,
        envMap: refractionCube,
        refractionRatio: 0.95
    });
    var cubeMaterial1 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        envMap: reflectionCube
    });




    //models
    const objLoader = new THREE.OBJLoader();

    objLoader.setPath('obj/walt/');
    objLoader.load('WaltHead.obj', function(object) {

        const head = object.children[0];

        head.scale.multiplyScalar(15);
        head.position.y = -500;
        head.material = cubeMaterial1;

        const head2 = head.clone();
        head2.position.x = -900;
        head2.material = cubeMaterial2;

        const head3 = head.clone();
        head3.position.x = 900;
        head3.material = cubeMaterial3;

        scene.add(head, head2, head3);

    });

    // set lights for scene 
    setLights()

    // make an invisible plane for shadows 
    initPlane()

    window.addEventListener('resize', onWindowResize, false);

}

function setControls() {


}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function initPlane() {

    var planeGeometry = new THREE.PlaneGeometry(500, 500);
    planeGeometry.rotateX(-Math.PI / 2);

    var planeMaterial = new THREE.ShadowMaterial();
    planeMaterial.opacity = 0.3;

    let plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.position.y = -0.5;
    plane.receiveShadow = true;

    scene.add(plane)

}

function setLights(argument) {

    var ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    var sun = setSunlight()
    scene.add(sun);

}

function setSunlight() {

    //sets the sun 
    var c1 = 0xffffff
    var lightArray = []

    // light
    var light = new THREE.DirectionalLight(c1, 0.6);
    light.position.set(100, 1000, 500);
    light.castShadow = true;
    light.radius = 1000
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    // light.shadow.mapSize.width = 5000;
    // light.shadow.mapSize.height = 5000;
    lightArray.push(light);

    var d = 100;
    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    light.shadow.camera.far = 3500;
    light.shadow.bias = -0.0001;

    return light

}