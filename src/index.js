const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}));

require('./app/controllers/index')(app)

app.get('/', (req,res) => {
  res.send('Hello world!')
})

app.listen(process.env.PORT || 3333, (err) => {
  if (err) return console.error('err',err)
  return console.log('Server listening in http://localhost:3333')
})