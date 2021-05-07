const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.get('/', async(req,res) => {
  try {
    
  } catch (error) {
    console.log('error',error)
    res.status(400).send
  }
})

router.post('/', async(req,res) => {
  try {
    const idCard = '6090a41a4e265d49bf00bac1'
    const { name } = req.body
    await API_URL.post(`1/cards/${idCard}/checklists`, { name })
    res.status(201).send()
  } catch (err){
    console.log(err)
    res.status(400).send()
  }
})



module.exports = app => app.use('/dropdown', router)