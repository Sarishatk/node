const express = require('express')
const router = new express.Router()
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')

// register
router.post('/user/register',userController.register)
router.post('/users/login',userController.login)
// add project
router.post('/project/add',projectController.addProject)
// export router
module.exports = router 