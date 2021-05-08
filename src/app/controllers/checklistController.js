const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

//create checklist
router.post('/', async(req,res) => {
  try {
    const { idCard } = req.body
    const response = await API_URL.post(`1/cards/${idCard}/checklists`, null ,{
      params: {
        name:"Situação",
        pos:"top",
        idCard
      }
    })
    res.status(201).json(response.data)
  } catch (err){
    console.error(err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/checklists', router)