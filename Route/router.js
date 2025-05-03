const express = require('express')
const router = new express.Router()
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')
const jwtmiddleware = require('../MiddleWares/jwtMiddleware')

// register
router.post('/user/register',userController.register)
router.post('/users/login',userController.login)
// add project
router.post('/project/add',jwtmiddleware, projectController.addProject)
// export router
module.exports = router 