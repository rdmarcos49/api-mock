const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dataMocked = require('./mockResponse.json')
const app = express()
const PORT = 8000;

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(dataMocked));
})

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})