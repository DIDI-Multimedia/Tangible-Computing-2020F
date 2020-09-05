console.log('utility-functions.js')



function geth(o){

	// returns the property in an object with the maximum value 

    var vals = [];    
    for(var i in o){
       vals.push(o[i]);
    }

    var max = Math.max.apply(null, vals);

     for(var i in o){
        if(o[i] == max){
            return i;
        }
    }
    
}




function logVideoDevices(){

	navigator.mediaDevices.enumerateDevices().then(function(devices) {
    
    let cams = []
    let id = 0

    for (var i = 0; i < devices.length; i++) {

      let device = devices[i]
      
      if (device.kind != 'videoinput') continue

      	console.log(device.deviceId)

    }

  }).catch(function(err) {
  
    console.log(err.name + ": " + err.message);
  
  })

}



function lowPassFilter(params) {

  params.arr.push(params.obj)
  if (params.arr.length < params.size) return params.obj 
  params.arr.shift()
  let summary = Summary(params.arr)
  summary.forEach(prop => params.obj[prop.name] = prop.average)
    

  return params.obj 

}