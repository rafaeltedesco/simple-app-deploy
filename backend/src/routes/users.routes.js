const { Router } = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

module.exports = router;