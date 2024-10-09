const express = require('express')
const isEmpty = require('../utils/isEmpty')
const { predictDisease } = require('../controller/predict.controller')

const routes = express.Router()

routes.get('/predict-disease', isEmpty, predictDisease)

module.exports = routes