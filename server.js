const express = require('express')
const app = express()
const path = require('path')

const listenPort = process.env.HAUGHTON_FIT_FRONTEND_PORT

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('*', (req, res) => {
    if (req.url.includes('?')) {
        res.sendFile(path.join(__dirname, req.url.split('?')[0]))	
	return
    }
    res.sendFile(path.join(__dirname, req.url))
})


app.listen(listenPort, () => {
  console.log(`Server running at http://localhost:${listenPort}/`)
})
