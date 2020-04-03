const express = require('express');
const AdvertiserController = require('./controllers/AdvertiserController');
const IterestedController = require('./controllers/InterestedController');
const AdvertsController = require('./controllers/AdvertsController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/advertiser', AdvertiserController.index);
routes.post('/advertiser', AdvertiserController.create);

routes.get('/interested', IterestedController.index);
routes.post('/interested', IterestedController.create);

routes.get('/adverts', AdvertsController.index);
routes.post('/adverts', AdvertsController.create);

module.exports = routes;