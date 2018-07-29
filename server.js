var express = require('express')
var app = express()

// Somewhere above, probably where you `require()` express and friends.
const path = require('path')

// Later on. app could also be router, etc., if you ever get that far

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/dist/build.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'build.js'))
})

app.get('/dist/main.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'main.css'))
})

app.get('/dist/haughtonFitLogo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'haughtonFitLogo.png'))
})

var listenPort = '80'

app.listen(listenPort, () => {
  console.log(`Server running at http://localhost:${listenPort}/`)
})
