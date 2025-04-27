const users = require('../models/userSchema')
const project = require('../models/projectSchema')
const jwt = require('jsonwebtoken')

// logic to resliove register
exports.register = async (req, res) => {
    console.log("inside register controller function");
    const { username, email, password } = req.body
    // console.log(`${username},${email},${password}`);
    // await nu oru seen nd res kittaam kittathe irikkam soo run time error ne enagne slove cheyyam vecha using try catch block
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Account already exist!! please Login.")
        } else {
            const newUser = new users({
                username, email, password, github: "", linkedin: "", profile: ""
            })
            //  mongodb lu veraan
            await newUser.save()

            res.status(200).json(newUser)
        }
    }
    catch (err) {
        res.status(401).json(`register API failed,Error: ${err}`)
    }
}

exports.login = async (req, res) => {
    console.log("inside login function")
    const { email, password } = req.body
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "supercreatekey1234")
            res.status(200).json({ existingUser, token })
        } else {
            res.status(404).json("Incorrect Password/Email")
        }
    } catch (err) {
        res.status(401).json(`login API failed,Error: ${err}`)
    }


}
