const express = require('express')
const axios = require('axios')
require('dotenv').config()

const router = express.Router();

router.get('/', async (req,res) => { 
  try{
    const { boardID } = req.body
    const response = await axios.get(`https://api.trello.com/1/boards/${boardID}/lists`)
    res.send(response.data)
  }catch(err){
    console.log('err',err)
    res.status(400)
  }
})

router.post('/', async (req,res) => {
  try{
    const {} = req.body
    const response = await axios.post(`https://api.trello.com/1/cards`)
    res.status(201)
  }catch(err){

  }
})

module.exports = app => app.use('/boards', router)