// GET /1/checklists/{id}/checkItems
const express = require('express')
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

//get checkitems
router.get('/', async(req,res) => {
  try {
    const { idChecklist } = req.route;
    const response = await API_URL.post(`1/checklists/${idChecklist}/checklists`)
    res.status(200).json(response.data)
  } catch (err){
    console.error(err)
    res.status(400).send()
  }
})

//create checkitems
router.post('/', async(req,res) => {
  try {
    const { idChecklist, value } = req.query;
    const checkItems = {
      0:'Opção 1',
      1:'Opção 2',
      2:'Opção 3'
    }
    await API_URL.post(`1/checklists/${idChecklist}/checkitems`, null , { params: {
      name: checkItems[value],
      pos:'bottom',
      checked:true
    }})
    res.status(201).send()
  } catch (err){
    console.error(err)
    res.status(400).send()
  }
})



module.exports = app => app.use('/checkitems', router)