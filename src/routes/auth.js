const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { registerValidator, loginValidator } = require('../middlewares/validators');

router.post('/register', registerValidator, AuthController.register);
router.post('/login', loginValidator, AuthController.login);

module.exports = router; 