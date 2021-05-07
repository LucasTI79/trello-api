const { default: axios } = require("axios")

const API_URL = axios.create({
  baseURL: 'https://trello.com',
  params: {
    key: process.env.API_KEY,
    token: process.env.TOKEN
  }
})

 module.exports = API_URL 

