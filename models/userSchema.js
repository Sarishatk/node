const mongoose =  require('mongoose')


const schema = new mongoose.schema({
    username : {
        type : String,
        require:true,
        min : [3,'must be atleast 3']
    },
    email : {
        type : String,
        require:true,
        unique:true,
       validator(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid Email")
        }
       }
    }
})