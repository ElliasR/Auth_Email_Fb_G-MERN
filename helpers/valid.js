const { check } = require('express-validator');

//REGISTER
exports.validRegister = [
  check('name', 'Name is required')
    .notEmpty()
    .isLength({
      min: 4,
      max: 32,
    })
    .withMessage('Your username must have between 4 to 32 characters.'),
  check('email')
    .notEmpty()
    .withMessage('You must enter a valid email address. '),
  check('password', 'password is required').notEmpty(),
  check('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Your password must contain at least a number'),
];

//LOGIN
exports.validLogin = [
  check('email')
    .isEmail()
    .withMessage('You must enter a valid email address. '),
  check('password', 'password is required').notEmpty(),
  check('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters'),
];

//FORGOTTEN PASSWORD
exports.forgotPasswordValidator = [
  check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('You must enter a valid email address. '),
];

//RESET PASSWORD
exports.resetPasswordValidator = [
  check('newPassword')
    .not()
    .isEmpty()
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters. '),
];
