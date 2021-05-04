const express = require('express')

const router = express.Router();

router.get('/', (req,res)=>{
  res.send('cards')
})

module.exports = app => app.use('/cards', router)