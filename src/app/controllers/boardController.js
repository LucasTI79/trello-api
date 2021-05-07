const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

//all lists in board
router.get('/', async(req,res) => {
  try {
    const idBoard = '609092d559a90c62d379eb1c'
    const response = API_URL.get(`1/boards/${idBoard}/lists`)
    res.status(200).json(response.data)
  } catch (error) {
    console.log('error',error)
    res.status(400).send
  }
})

//create board
router.post('/', async (req,res) => {
  try{
    const { name } = req.params
    await API_URL.post(`1/boards`, null, { params: {
      name
    } })
    res.status(201)
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/boards', router)