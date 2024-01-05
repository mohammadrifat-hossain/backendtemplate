const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const {middleware} = require('../middleware/AuthMiddleware');

router.post('/login', AuthController.login)


module.exports = router