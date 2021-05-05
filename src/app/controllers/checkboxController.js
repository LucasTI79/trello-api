const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.post('/', async(req,res) => {
  try {
    const idCard = '6090a41a4e265d49bf00bac1'
    const { name, pos } = req.body
    await axios.post(`${API_URL}/1/cards/${idCard}/checklists`, { name, pos })
    res.status(201).send()
  } catch (err){
    console.log(err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/checkbox', router)