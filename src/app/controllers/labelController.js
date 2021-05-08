const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.get('/', async(req,res) => {
  try {
    const idBoard = process.env.ID_BOARD
    const response = await API_URL.get(`1/boards/${idBoard}/labels`)
    res.status(200).json(response.data)
  } catch (error) {
    console.error(err)
    res.status(400).send
  }
})

//create label
router.post('/', async (req,res) => {
  try{
    const { name, color } = req.query
    const idBoard = process.env.ID_BOARD
    await API_URL.post(`1/labels`, null , {
      params : {
        name,
        color,
        idBoard
      }
    })
    res.status(201).send()
  }catch(err){
    console.error(err)
    res.status(400).send()
  }
})



//add label to card
router.post('/add', async (req,res) => {
  try{
    const { value,idCard } = req.body
    await API_URL.post(`/1/cards/${idCard}/idLabels`, null , {
      params : {
        value
      }
    })
    res.status(201).send()
  }catch(err){
    // console.log('err',err)
    res.status(400).send()
  }
})


module.exports = app => app.use('/labels', router)