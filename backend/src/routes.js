const express = require('express');

const OngControlller = require('./controllers/OngController')
const IncidentControlller = require('./controllers/IncidentController')
const ProfileControlller = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngControlller.index)
routes.post('/ongs', OngControlller.create)

routes.get('/profile', ProfileControlller.index)

routes.get('/incidents', IncidentControlller.index)
routes.post('/incidents', IncidentControlller.create)
routes.delete('/incidents/:id', IncidentControlller.delete)

module.exports = routes;