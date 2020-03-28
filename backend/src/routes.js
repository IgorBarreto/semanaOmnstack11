const express  = require('express')
const routes = express.Router()
const ongController = require('./controllers/ongController')
const ongProfileController = require('./controllers/ongProfileController')
const incidentsController = require('./controllers/incidentController')
const sessionController = require('./controllers/sessionController')

routes.post('/ongs',ongController.create)
routes.get('/ongs',ongController.index)
routes.post('/sessions',sessionController.create)
routes.post('/incidents',incidentsController.create)
routes.get('/incidents',incidentsController.index)
routes.delete('/incidents/:id',incidentsController.delete)
routes.get('/ongProfile',ongProfileController.index)


module.exports = routes