const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: [3, 'must be atleast 3']
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid Email")
            }
        }
    },
    password: {

        type: String

    },
    github: {

       
        type: String
    },
    linkedin: {

        type: String

    },
    profile :{
        type: String
    }
})

const user = mongoose.model("users",userSchema)
module.exports = user