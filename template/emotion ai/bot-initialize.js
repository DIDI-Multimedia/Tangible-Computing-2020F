
function connectMC(){

  let connection = new WebSocket(this.port, ['arduino']);
  connection.onopen = function () {
    connection.send('Connect ' + new Date())
    console.log('websocket connected!')
  }

  connection.onerror = function (error) { 
    console.log('WebSocket Error ', error);
    // resetBOTS()

  };
  connection.onmessage = function (e)   { console.log('Server: ', e.data);};

  this.connection = connection
  return connectMC

}



