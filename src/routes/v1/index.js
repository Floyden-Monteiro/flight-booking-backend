const express = require('express');

const router = express.Router();

const { infoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');


router.use('/airplanes', airplaneRoutes);
router.use('/cities',cityRoutes);

router.get('/info', infoController.info);

module.exports = router;
