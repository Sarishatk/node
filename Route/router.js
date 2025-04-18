const express = require('express')
const router = new express.Router()
const userController = require('../controller/userController')
// register
router.post('/user/register',userController.register)

module.exports = router