const { Router } = require('express');

const router = Router();

router.get('/', (_req, res)=> {
    res.status(200).json('users');
})

module.exports = router;