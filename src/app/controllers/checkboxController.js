const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

//create checklist
router.post('/', async(req,res) => {
  try {
    const { idCard, name, pos } = req.body
    await API_URL.post(`1/cards/${idCard}/checklists`, { name, pos })
    res.status(201).send()
  } catch (err){
    console.log(err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/checkbox', router)