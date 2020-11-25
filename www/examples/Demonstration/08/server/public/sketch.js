console.log("hello world");

// by djcldy 2019

// Updated 11-2020 for Tangible Computing Class 
// AR APP Dubai Design Week - MixedRealities Workshop 2019

var scene, camera, renderer, clock, deltaTime, totalTime;
var arToolkitSource, arToolkitContext;
var markerRoot1, markerRoot2;
var cube1, cube2
var theta = 0;

var objList = [];

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

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(640, 480);
    // renderer.shadowMapEnabled = true;
    // renderer.shadowMapSoft = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(640, 480);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0px";
    renderer.domElement.style.left = "0px";
    document.body.appendChild(renderer.domElement);

    arToolkitSource = new THREEx.ArToolkitSource({ sourceType: "webcam" });
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


    cube1 = getCube();
    cube2 = getCube();

    hiroMarker.add(cube1); // add cube to the hiroMarker
    hiroMarker.add(cube2); // add cube to the hiroMarker

    addLights(scene, hiroMarker)

    scene.add(hiroMarker); // add Marker to the scene

}

function getCube() {

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    var cube = new THREE.Mesh(geometry, material)

    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.set(0, 0, 0); // change the position
    cube.scale.set(0.2, 0.2, 0.2);

    return cube;

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
    moveCube()
    update();
    render();
}

function moveCube() {


    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.05;
    cube2.rotation.y += 0.1;
    // cube.scale.x = Math.sin(theta)+1
    cube1.position.x = Math.cos(theta / 10) * 2
    cube2.position.z = Math.cos(theta / 10) * 2
    cube1.position.x = Math.cos(theta / 3) * 2
    cube2.position.z = Math.cos(theta / 4) * 2

}

// function scaleElements(cubes) {
//     let vol = 1;
//     let spectrum = 1;

//     // rotate cubes
//     for (var x = 0; x < cubes.length; x += 5) {
//         let row = cubes[x];

//         for (var y = 0; y < row.length; y += 5) {
//             let col = row[y];

//             for (var z = 0; z < col.length; z += 5) {
//                 // // let offset = sin(vol) // ? this work?
//                 let cube = cubes[x][y][z];
//                 // cube.rotation.x += 0.004*x*vol*200
//                 // cube.rotation.y += 0.008*y*vol*200
//                 // cube.rotation.z += 0.012*z*vol*200

//                 // cube.scale.z = vol*50
//                 cube.scale.set(vol * 5, vol * 5, vol * 5);
//                 // let levitate = 0
//                 // cube.position.y += levitate

//                 // if (levitate >= 2){
//                 //   levitate = levitate-=(vol*0.25)
//                 // } else if (levitate <= 0) {
//                 //   levitate = levitate +=(vol*0.25)
//                 // }

//                 // cube.position.y = cube.position.y + (vol*2*-1)
//             }
//         }
//     }
// }

// function rotateElements(cubes) {
//     let vol = 1;
//     let spectrum = 1;

//     // rotate cubes
//     for (var x = 0; x < cubes.length; x++) {
//         let row = cubes[x];

//         for (var y = 0; y < row.length; y++) {
//             let col = row[y];

//             for (var z = 0; z < col.length; z++) {
//                 // let offset = sin(vol) // ? this work?
//                 let cube = cubes[x][y][z];
//                 cube.rotation.x += 0.004 * x * vol * 100;
//                 cube.rotation.y += 0.008 * y * vol * 200;
//                 cube.rotation.z += 0.012 * z * vol * 300;

//                 // cube.scale.z = vol*50
//                 // cube.scale.set(vol*5,vol*5,vol*5)
//                 // let levitate = 0
//                 // cube.position.y += levitate

//                 // if (levitate >= 2){
//                 //   levitate = levitate-=(vol*0.25)
//                 // } else if (levitate <= 0) {
//                 //   levitate = levitate +=(vol*0.25)
//                 // }

//                 // cube.position.y = cube.position.y + (vol*2*-1)
//             }
//         }
//     }
// }