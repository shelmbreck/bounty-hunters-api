// required modules
let express = require('express')

// Express instance
let app = express()

//ontrollers
app.use('/v1/bounties', require('./controllers/v1/bounties'))

//Catch-all (wildcard) route
app.get('*', (req, res) => {
  res.send('Hello world')
})

//Attch to port
app.listen(process.send.PORT || 3000)