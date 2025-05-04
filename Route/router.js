const express = require('express')
const router = new express.Router()
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')
const jwtmiddleware = require('../MiddleWares/jwtMiddleware')
const multerConfig = require('../MiddleWares/multerMiddleWre')

// register
router.post('/user/register',userController.register)
router.post('/users/login',userController.login)
// add project
router.post('/project/add',jwtmiddleware,multerConfig.single('projectImage'), projectController.addProject)
// export router
module.exports = router 