const express = require('express');

const router = express.Router();

const { infoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');

console.log('inside v1 routes');
router.use('/airplanes', airplaneRoutes);

router.get('/info', infoController.info);

module.exports = router;
