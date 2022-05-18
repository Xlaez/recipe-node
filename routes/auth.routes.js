const { Router } = require('express');
const { signup, login } = require('../src/controllers/auth.controller');

const router = Router();

router.route('/').post(signup);
router.route('/login').post(login);

module.exports.authRouter = router;