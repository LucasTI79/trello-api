const express = require('express')
const axios = require('axios');
const API_URL = require('../../modules/trello.config');
require('dotenv').config()

const router = express.Router();

router.get('/', (req,res) => {
  res.status(400).json({ error : 'invalid listID' })
})

//all cards
router.get('/:listID', async (req,res) => { 
  try{
    // const { listID } = req.params
    const listID = '6090a2dcb5b1542378c7c707'
    const response = await API_URL.get(`1/lists/${listID}/cards`)
    res.send(response.data)
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

//create card
router.post('/', async (req,res) => {
  try{
    const { idList } = req.query
    const { name, desc } = req.body
    const lists = {
      0:'6096e2d7f9adaa2ed88ab24e',//Trainee
      1:'6096e2df09f155412c114331',//Junior
      2:'6096e2e3d552a73a566c0863',//Senior
      3:'6096e2e8c42aaf368fed88ad'//Pleno
    }
    const data = { name, desc }
    const response = await API_URL.post(`/1/cards`, {...data, pos:"top"}, {
      params : {
        idList: lists[idList]
      }
    })
    res.status(response.status).json({ idCard: response.data.id })
  }catch(err){
    console.log('err',err)
    res.status(400).send()
  }
})

module.exports = app => app.use('/cards', router)