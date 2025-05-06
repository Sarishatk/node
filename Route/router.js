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

// getuser prject
router.get('/user/all-projects',jwtmiddleware,projectController.alluserProject)


//get all projects 
router.get('/project/all',jwtmiddleware,projectController.getAllProjects)


// get home project
router.get('/projects/Home-projects',projectController.HomeProject)




// export router
module.exports = router 

