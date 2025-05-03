
const jwt = require('jsonwebtoken')

const jwtmiddleware =(req,res,next)=>{
    console.log('inside jwtmiddleware');
    const token = req.headers['authorization'].split(" ")[1]
    // console.log(token);
    // token ne verify cheyyan oru predefined method und athu oru variable lek edth vekkanm
    const jwtResponse = jwt.verify(token,"supercreatekey1234")
    console.log(jwtResponse);
   req.payload = jwtResponse.userId 
} 
module.exports = jwtmiddleware





