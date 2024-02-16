const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const bodyParser = require('body-parser');

router.post('/', bodyParser.json(), registerController.handleNewUser);

module.exports = router;
