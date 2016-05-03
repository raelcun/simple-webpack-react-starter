const express = require('express'),
      path = require('path'),
      cors = require('cors')

const app = express()
const static_path = path.join(__dirname, './../build')

app.enable('trust proxy')
app.get('/api/currentTime', cors(), (req, res) => res.send({ time: new Date() }))

const server = app.listen(5000, () => console.log(`Server listening on port ${server.address().port}`))
