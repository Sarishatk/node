const express = require('express')
const router = new express.Router()
const userController = require('../controller/userController')

// register
router.post('/user/register',userController.register)
router.post('/users/login',userController.login)
module.exports = router