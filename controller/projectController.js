const projects = require('../models/projectSchema');
const projectController = require('../models/projectSchema')

// logic to add project
exports.addProject =async (req,res)=>{
    console.log('inside add project function');
    const userId = req.payload
    const projectImage = req.file.filename
    const {title,language,overview,github,website}=req.body
    // console.log(`${title},${language},${overview},${github},${website},${projectImage},${userId}`);
    try {
        const existingProject = await projects.findOne({ github });
        
        if (existingProject) {
          res.status(406).json("project already exist !!! upload another");
        }else{
    
        const newProject = new projects({
            title,
            language,
            overview,
            github,
            projectImage,
            userId,
            website
        });
    
        await newProject.save();
        res.status(201).json(newProject);  // 201 Created
    }
    } catch (err) {
        console.error(err); // helpful for debugging
        res.status(500).json({ message: 'Request failed', error: err.message });
    }
    
}