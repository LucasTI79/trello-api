const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.get('/', async(req,res) => {
  try {
    const idBoard = '609092d559a90c62d379eb1c'
    const response = axios.get(`${API_URL}/1/boards/${idBoard}/labels`)
    res.status(200).json(response.data)
  } catch (error) {
    console.log('error',error)
    res.status(400).send
  }
})

//create label
router.post('/', async (req,res) => {
  try{
    const { name, color } = req.query
    const idBoard = '609092d559a90c62d379eb1c'
    await axios.post(`${API_URL}/1/labels`, null , {
      params : {
        name,
        color,
        idBoard
      }
    })
    res.status(201).send()
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/labels', router)