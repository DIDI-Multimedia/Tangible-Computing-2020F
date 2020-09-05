  
/**
Digital Blue Foam (2017 - 2019 )
Procedural City in 300 lines of code 
Updated May 16, 2019
Revised as Demonstration for DIDI Tangible Computing Class 2019 by DJCLDS
 **/

// IIFE (Immediately Invoked function expression, this is important for encapsulation)

$(function() {

  var colorList = ['#029DAF','#F07C19','#FFC219', '#E42251', '#E5D599', '#118AB2'] // color scheme 
  var updateFcts  = []  // set up scene
  var clouds = []
  var renderer,camera,light,controls,scene, lastTimeMsecf
  var intensity = 1;
  var distance = 0;
  var decay = 0;

  initScene()
  loop()

  function initScene(){

    initRenderer()
    initCamera()  
    initControls()
    initPlane()
    initLight()
    initSun()
    addNeighbourhood(({totalBuildings:4000,min:5,max:500}))
    addClouds({min:500,numClds:500})
  
  }

  function initRenderer(argument) {
    scene = new THREE.Scene() // initialize scene
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }) // passing settings as an object
    renderer.setSize( window.innerWidth*0.5, window.innerHeight*0.77)
    renderer.shadowMap.enabled = true; // add shows 
    var body = document.getElementById('procity');
    body.appendChild( renderer.domElement );
  
  }

  function initCamera(){

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 3000)
    camera.position.y = 80 // sett camera position

  }

  function initLight(argument) {

    scene.fog = new THREE.FogExp2( 0x029DAF, 0.0013 ); // fog is c1
    var ambientLight = new THREE.AmbientLight(0xdc8874, 1.1);
    ambientLight.castShadow = true;   
    scene.add(ambientLight );
    
  }

  function initControls(){

    controls  = new THREE.FirstPersonControls( camera );
    controls.movementSpeed  = 0;
    controls.lookSpeed  = 0.02;
    controls.lookVertical = true;
    lastTimeMsec= null

  }

  function initPlane() {

      let planeGeometry = (new THREE.PlaneGeometry( 1000, 1000 )).rotateX( - Math.PI / 2 );
      let planeMaterial = new THREE.ShadowMaterial();
      planeMaterial.opacity = 0.5;
      let plane = new THREE.Mesh( planeGeometry, planeMaterial);
      plane.receiveShadow = true;
      scene.add(plane)

  }

  function initSun(){

    //sets the sun 
    var light = new THREE.DirectionalLight( 0xffffff, 0.5);
    light.position.set( 100, 1000, 500 );
    light.castShadow = true;
    light.radius = 5000
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    var d = 1000;
    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;
    light.shadow.camera.far = 3500;
    light.shadow.bias = - 0.0001;

    scene.add( light );

  }


  function loop(){

    requestAnimationFrame(loop);
    renderer.render(scene, camera);

  }

  requestAnimationFrame(function animate(nowMsec){
    
    lastTimeMsec  = lastTimeMsec || nowMsec-1000/60 //
    var delta = Math.min(200, nowMsec - lastTimeMsec)
    controls.update( delta/1000 );

    requestAnimationFrame( animate )

  })

  function addNeighbourhood(params) {

    if (params.totalBuildings < 1) return 

    var random =Math.floor(Math.random() * (params.max - params.min)) + params.min; 
    scene.add(new ProceduralCity(random,colorList)) // what is this 
    params.totalBuildings -= random

    addNeighbourhood({totalBuildings:params.totalBuildings,min:params.min,max:params.max})
    
  }

  function ProceduralCity(numBldgs, colorList){

    var geometry = new THREE.CubeGeometry( 1, 1, 1 );
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    var buildingMesh= new THREE.Mesh( geometry );
    var light = new THREE.Color( 0xffffff )
    var shadow  = new THREE.Color( 0x303050 )
    var cityGeometry= new THREE.Geometry();

    for ( var i = 0; i < numBldgs; i ++ ){

      buildingMesh.position.set(Math.floor( Math.random() * 200 - 100 ) * 10,0,Math.floor( Math.random() * 200 - 100 ) * 10)
      buildingMesh.scale.x  = Math.random() * Math.random() * Math.random() * Math.random() * 50 + 10;
      buildingMesh.scale.y  = (Math.random() * Math.random() * Math.random() * buildingMesh.scale.x) * 8 + 8;
      buildingMesh.scale.z  = buildingMesh.scale.x

      // establish the base color for the buildingMesh
      var value = 1 - Math.random() * Math.random();
      var baseColor = new THREE.Color().setRGB( value + Math.random() * 0.1, value, value + Math.random() * 0.1 );

      // set topColor/bottom vertexColors as adjustement of baseColor
      var topColor  = baseColor.clone().multiply( light );
      var bottomColor = baseColor.clone().multiply( shadow );

      // set .vertexColors for each face
      var geometry  = buildingMesh.geometry;

      for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {

        if ( j === 2 ) {
          // set face.vertexColors on root face
          geometry.faces[ j ].vertexColors = [ baseColor, baseColor, baseColor, baseColor ];

        } else {
          // set face.vertexColors on sides faces
          geometry.faces[ j ].vertexColors = [ topColor, bottomColor, bottomColor, topColor ];
        }
      }
      // merge it with cityGeometry - very important for performance
      THREE.GeometryUtils.merge( cityGeometry, buildingMesh );
    }

    // generate the texture
    var color = colorList[Math.floor(Math.random() * colorList.length)];
    var texture   = new THREE.Texture( generateTextureCanvas(buildingMesh.scale.y,color) );
    texture.anisotropy  = renderer.getMaxAnisotropy();
    texture.needsUpdate = true;

    // build the mesh
    var material  = new THREE.MeshPhongMaterial({

      map : texture,
      vertexColors :THREE.VertexColors,
      side: THREE.doubleSide,
      opacity: 0.98
    
    });


    var mesh = new THREE.Mesh(cityGeometry, material );
    mesh.castShadow = true
    mesh.receiveShadow = true

    return mesh

    function generateTextureCanvas(steps,style){

      var t = Math.random()
      var canvas  = document.createElement( 'canvas');
      canvas.width = 6;
      canvas.height    = 8*120; // what do all of these values mean can we fix this one...
      var context = canvas.getContext( '2d' )
      context.fillStyle    =  style
      context.fillRect( 0, 0, 6, canvas.height);

      for( var y = 20; y < canvas.height; y += 20 ){
      
        for( var x = 0; x < canvas.width; x += 2 ){
      
          var value   = Math.floor( Math.random() * 62 );
          context.fillStyle = 'rgb(' + [value, value, value].join( ',' )  + ')';
          context.fillRect( x, y, 2, 1 );
      
        }
      
      }
      
      var canvas2 = document.createElement( 'canvas' )
      canvas2.width  = 512
      canvas2.height = 1024
      var context = canvas2.getContext( '2d' )
      context.imageSmoothingEnabled        = false;
      context.webkitImageSmoothingEnabled  = false;
      context.mozImageSmoothingEnabled = false;
      context.drawImage( canvas, 0, 0, canvas2.width, canvas2.height );
      
      return canvas2;

    }

  }

  function addClouds(params){

    var maxDist = 2000
    
    for (var i = 1; i < params.numClds; i++ ){

      x,y,z,dist = 0

      while(dist < params.min){
      
        var x = Math.random()*maxDist - maxDist/2
        var y = Math.random()*maxDist/3 + 200
        var z = Math.random()*maxDist - maxDist/2
        dist = Math.sqrt(x*x+y*y+z*z)
      
      }
      
      scene.add(Cloud(x,y,z,[0.9, '#FFFFFF']))
    
    }

  }

  function Cloud(x,y,z,color){

    var mesh = new THREE.Object3D();    // this shape will be duplicated to create the cloud
    var geom = new THREE.CubeGeometry(50,50,50);    // var geom = new THREE.SphereGeometry(50,8,8)
    var mat = new THREE.MeshPhongMaterial({ color: color[1], transparent: true, opacity:0.35 });
    var nBlocs = 15 + Math.floor(Math.random()*3) // duplicate the geometry a random number of times

    for (var i = 0; i< nBlocs ; i++ ){

      // create the mesh by cloning the geometry
      var m = new THREE.Mesh(geom, mat);
      const s = .001 + Math.random()*.55; // scale
      // set the position and the rotation of each cube randomly
      m.position.set(i*10*Math.random(),-Math.random()*10,Math.random()*50)
      m.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2)
      m.scale.set(s,s,s);
      mesh.add(m);

    }

    mesh.position.set(x,y,z)    
    scene.add(mesh) // add all of the clouds as one mesh

    return mesh

  }

  function onWindowResize() {

    var width = window.innerWidth*0.5;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize( width, height );

  }

  window.addEventListener( 'resize', onWindowResize, false );  

})
