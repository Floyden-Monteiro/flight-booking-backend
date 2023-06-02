const express = require('express');

const router = express.Router();
const { infoController} = require("../../controllers")

router.get('/info', infoController);

module.exports= router;
