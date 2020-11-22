console.log('hello world')

let express = require('express')

let app = express()

let server = app.listen(3000)
// connect to port 3000 

app.use(express.static('public'))

console.log('my server is running')