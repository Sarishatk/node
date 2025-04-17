const express = require('express')
const router = new express.Router()
const userController = require('../controller/userController')
// register
router.post('/user/register')
