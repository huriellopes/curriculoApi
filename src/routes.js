const express = require('express')

const CurriculoController = require('./Controllers/CurriculoController')
const routes = express.Router()

routes.get('/test', (_req, res) => {
  res.send('Working Api')
})

routes.get('/datas', CurriculoController.data)
routes.get('/resume', CurriculoController.resume)
routes.get('/college', CurriculoController.college)

module.exports = routes