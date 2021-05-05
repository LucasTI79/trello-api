const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.get('/:idList/cards', async (req,res) => {
  try{
    const idList = '6090a2dcb5b1542378c7c707'
    const response = await axios.get(`${API_URL}/1/lists/${idList}/cards`)
    res.status(200).json(response.data)
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

//create list
router.post('/', async (req,res) => {
  try{
    const { name } = req.body
    const idBoard = '6090a2dcb5b1542378c7c707'
    await axios.post(`https://api.trello.com/1/boards`, { name }, { params: {
      idBoard
    } })
    res.status(201)
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/lists', router)