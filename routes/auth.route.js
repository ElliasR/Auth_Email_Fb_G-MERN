const express = require('express');
const router = express.Router();

//Validation
const {
  validRegister,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require('../helpers/valid');

//Load Controllers
const {
  registerController,
  activationController,
  loginController,
  //GOOGLE
  googleController,
} = require('../controllers/auth.controller.js');

router.post('/register', validRegister, registerController);
router.post('/activation', activationController);
router.post('/login', validLogin, loginController);
//router.post('/register', validRegister, registerController);

//GOOGLE
router.post('/googlelogin', googleController);

module.exports = router;
