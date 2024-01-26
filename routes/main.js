const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');
const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, mainController.dashboard);
router.route('/login').post(mainController.login);


module.exports = router;