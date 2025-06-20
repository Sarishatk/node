const projects = require('../models/projectSchema');
const projectController = require('../models/projectSchema')

// logic to add project
exports.addProject = async (req, res) => {
    console.log('inside add project function');
    const userId = req.payload
    const projectImage = req.file.filename
    const { title, language, overview, github, website } = req.body
    // console.log(`${title},${language},${overview},${github},${website},${projectImage},${userId}`);
    try {
        const existingProject = await projects.findOne({ github });

        if (existingProject) {
            res.status(406).json("project already exist !!! upload another");
        } else {

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

// get user project

exports.alluserProject = async (req, res) => {
    const userId = req.payload
    console.log(userId)
    try {
        const userProjects = await projects.find({ userId })
        res.status(200).json(userProjects)
    } catch (err) {
        res.status(401).json(err)
    }
}


// get all projects

exports.getAllProjects = async (req, res) => {
    const searchkey = req.query.search; // fixed typo
    const query = {
        language: { $regex: searchkey, $options: "i" } // properly closed
    };

    try {
        const allProjects = await projects.find(query);
        res.status(200).json(allProjects);
    } catch (err) {
        res.status(500).json({ error: err.message }); // 401 is for unauthorized, not server errors
    }
};


// home project
exports.HomeProject = async (req, res) => {
    try {
        const aLLhomeproject = await projects.find().limit(3)
        res.status(200).json(aLLhomeproject)
    } catch (err) {
        res.status(401).json(err)
    }
}

// edit project
exports.editproject = async (req, res) => {
    const { id } = req.params;
    const userId = req.payload;
    const { title, language, overview, github, website, projectImage } = req.body;
    const uploadedImage = req.file ? req.file.filename : projectImage;



    try {

        const UpdateProject = await projects.findByIdAndUpdate(
            { _id: id },
            {
                title,
                language,
                overview,
                github,
                website,
                projectImage: uploadedImage,
                userId
            },
            { new: true }
        );

     
            return res.status(200).json(UpdateProject );
        

        // Removed: await UpdateProject.save();

        res.status(200).json(UpdateProject);
    } catch (err) {
        console.error("Error in editproject:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};

// delete project
exports.deleteProjectController = async (req,res)=>{
    const {id} = req.params;
    try {
const removeProject = await projects.findByIdAndDelete({_id:id})
res.status(200).json(removeProject)
    }catch(err){
        res.status(401).json(err)
    }

}

exports.editUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updates = req.body;
        
        // If a file was uploaded, add the path to updates
        if (req.file) {
            updates.profileImage = req.file.filename;
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            status: true,
            message: "User updated successfully",
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error updating user",
            error: error.message
        });
    }
}