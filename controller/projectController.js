const projectController = require('../models/projectSchema')

// logic to add project
exports.addProject = (req,res)=>{
    console.log('inside add project function');
    const userId = req.payload
    const projectImage = req.file.filename
    console.log(projectImage);
    
    console.log(`${userId}`);
    
    res.status(200).json('add Project request resloved')
    
}