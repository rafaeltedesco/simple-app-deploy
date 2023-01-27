const { Router } = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.get('/', (_req, res)=> {
    res.status(200).json('users');
})

router.post('/', userController.createUser);

module.exports = router;