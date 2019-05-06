let express = require('express')

let app = express()

app.get('*', (req, res) => {
  res.send('Hello world')
})

app.listen(process.send.PORT || 3000)