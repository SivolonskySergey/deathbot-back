const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');

router.post('/', bodyParser.json(), authController.handleLogin);

module.exports = router;
