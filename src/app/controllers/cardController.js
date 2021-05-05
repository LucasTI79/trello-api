const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.get('/', (req,res) => {
  res.status(400).json({ error : 'invalid listID' })
})

//all cards
router.get('/:listID', async (req,res) => { 
  try{
    const { listID } = req.params
    console.log(listID)
    const response = await axios.get(`${API_URL}/1/lists/${listID}/cards`)
    res.send(response.data)
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

//create card
router.post('/', async (req,res) => {
  try{
    const { idList } = req.query
    const { name, desc, pos, due, dueComplete } = req.body
    const data = { name, desc, pos, due, dueComplete }
    const response = await axios.post(`${API_URL}/1/cards`, data, {
      params : {
        idList
      }
    })
    res.status(response.status).send()
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/cards', router)