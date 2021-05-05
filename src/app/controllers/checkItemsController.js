// GET /1/checklists/{id}/checkItems
const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

//get checkitems
router.get('/', async(req,res) => {
  try {
    const { idChecklist } = req.route;
    const response = await axios.post(`${API_URL}/1/checklists/${idChecklist}/checklists`)
    res.status(200).json(response.data)
  } catch (err){
    console.log(err)
    res.status(400).send()
  }
})

//create checkitems
router.post('/:idChecklist', async(req,res) => {
  try {
    const { idChecklist } = req.route;
    const { name, pos, checked } = req.params
    await axios.post(`${API_URL}/1/checklists/${idChecklist}/checkitems`, null , { params: {
      name,
      pos,
      checked
    } })
    res.status(201).send()
  } catch (err){
    console.log(err)
    res.status(400).send()
  }
})



module.exports = app => app.use('/checkitems', router)