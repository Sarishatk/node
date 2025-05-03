
const jwt = require('jsonwebtoken')

const jwtmiddleware =(req,res,next)=>{
    console.log('inside jwtmiddleware');
    const token = req.headers['authorization'].split(" ")[1]
    // console.log(token);
    
} 
module.exports = jwtmiddleware





