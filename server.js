var express = require('express')
var app = express()

// Somewhere above, probably where you `require()` express and friends.
const path = require('path')

// Later on. app could also be router, etc., if you ever get that far

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, req.url))
})

var listenPort = '80'

app.listen(listenPort, () => {
  console.log(`Server running at http://localhost:${listenPort}/`)
})
