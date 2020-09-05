console.log('bot-descriptions.js')

let bot_SP 



// 66a395cebce0eba4c62718378dab7af72d4713baeeaadabe233fa453817396ef


function createBot(params){

	let bot = {}
  
  bot.humanSpotted = false
  
  bot.port = params.port
  bot.mood = 'normal'
  bot.botMood = botMotionsArr["normal"]
  bot.targetBuffer = []
  bot.targetBufferSize = 5
  bot.emotionBuffer = []
  bot.emotionBufferSize = 3
  bot.moodDuration =  60000
  bot.sleep = 5000
  bot.moodStart =  (new Date).getTime()
	bot.name = params.name
	bot.port = params.port
	bot.deviceId = params.deviceId
	bot.width = 640
	bot.height = 480
	bot.pan = constraints.defRotX  //
	bot.tilt = constraints.defRotY
	bot.face = null //
	bot.aura = [255,0,255]  // set default to magenta
	bot.radius = 400
	bot.connect = connectMC
	bot.transmit = transmitMC
  bot.velocity = 0.01
  bot.interval = null
  bot.lastMood = (new Date).getTime()
  bot.lastEvent = (new Date).getTime()
  bot.target = {}
  bot.target.x = null
  bot.target.y = null
  bot.emotions = null
  bot.energy = 500 
  bot.sleeping = false 
  bot.threshold = 500
  bot.status = ''
  bot.lifeTime = 2000000
  bot.startTime = (new Date).getTime()
	// bot.processImage = processAffdexImage
	// bot.reset

	return bot

}



function transmitMC(){

    const packet = {

      pan: Math.floor(this.pan),
      tilt:Math.floor(this.tilt),
      ledR:this.aura[0],
      ledG: this.aura[1],
      ledB: this.aura[2]

    }


    try {

      // console.log('aura', this.aura)


      this.connection.send(JSON.stringify(packet));

   
    } catch {

    }

}
