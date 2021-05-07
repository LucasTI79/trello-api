const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}));

const PORT = process.env.PORT || 3333

require('./app/controllers/index')(app)

app.get('/', (req,res) => {
  res.send('Hello world!')
})

app.listen(PORT, (err) => {
  if (err) return console.error('err',err)
  return console.log(`Server listening in http://localhost:${PORT}`)
})