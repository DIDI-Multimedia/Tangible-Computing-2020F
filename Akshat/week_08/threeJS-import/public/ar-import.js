console.log("hello world");

// by djcldy 2019
// AR APP Dubai Design Week - MixedRealities Workshop 2019

var scene, camera, renderer, clock, deltaTime, totalTime;
var arToolkitSource, arToolkitContext;
var markerRoot1, markerRoot2;
var cube
var objList = [];
var vidWidth = 640
var vidHeight = 480
    // scene markers
const hiro = "https://djcldy.github.io/DDW-AR/data/hiro.patt";
const kanji = "https://djcldy.github.io/DDW-AR/data/kanji.patt";

// kanji marker: ""https://djcldy.github.io/DDW-AR/data/kanji.patt""
let sceneMarkers = [hiro, kanji];

initialize();
animate();

function initialize() {

    scene = new THREE.Scene(); // create scene
    camera = new THREE.Camera(); // create camera
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(640, 480);
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(vidWidth, vidHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0px";
    renderer.domElement.style.left = "0px";
    document.body.appendChild(renderer.domElement);

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: "webcam"
    });
    arToolkitSource.init(); // initialize AR Toolkit
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: "https://djcldy.github.io/DDW-AR/data/camera_para.dat",
        detectionMode: "mono"
    });

    // copy projection matrix to camera when initialization complete
    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    // setup markers

    // for (var i = 0; i < sceneMarkers.length; i++) {

    let hiroMarker = new THREE.Group();

    let markerControls = new THREEx.ArMarkerControls(
        arToolkitContext,
        hiroMarker, {
            type: "pattern",
            patternUrl: hiro
        }
    );



    let path = 'obj/foetus/'
    let filename = 'obj1.obj'
    
    //var muhcube = new THREE.object()
    
    addMarkerObject(path,filename,hiroMarker)
    addLights(scene, hiroMarker)
    
    scene.add(hiroMarker); // add Marker to the scene
    
}


function addMarkerObject(path, filename, marker) {
    //materials
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    })


    const objLoader = new THREE.OBJLoader();
    objLoader.setPath(path);
    objLoader.load(filename, function(object) {

        const object1 = object.children[0];

        // object.scale.multiplyScalar(15); // changes scale 
        // object.position.y = -500; //  change position

        object.material = material;
        marker.add(object1);

        console.log('object loaded')

    
      
    });

}




function addFloorPlane(scene, markerGroup) {

    var planeGeometry = new THREE.PlaneGeometry(5, 5);
    var planeMaterial = new THREE.ShadowMaterial();
    planeMaterial.transparent = true;
    planeMaterial.opacity = 0.3;
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // make the plane recieve shadow from the
    plane.receiveShadow = true;
    plane.side = THREE.DoubleSide;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = -0.2;

    markerGroup.add(plane);

}

function addLights(scene, markerGroup) {

    var DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
    DirectionalLight.position.set(1, 2, 2);
    DirectionalLight.castShadow = true;
    DirectionalLight.intensity = 1;
    DirectionalLight.shadowthreeCameraNear = 1;
    markerGroup.add(DirectionalLight);
    scene.add(DirectionalLight);
    var HemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.1);
    HemisphereLight.castShadow = true;
    markerGroup.add(HemisphereLight);
    scene.add(HemisphereLight);
    var ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    markerGroup.add(ambientLight);
    scene.add(ambientLight);
}

function update() {
    if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
    }
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    update();
    render();
}