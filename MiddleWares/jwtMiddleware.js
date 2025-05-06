
const jwt = require('jsonwebtoken')

const jwtmiddleware =(req,res,next)=>{
    console.log('inside jwtmiddleware');
    if (!req.headers['authorization']) {
      return res.status(401).json('Authorization header missing');
  }
  
  const token = req.headers['authorization'].split(" ")[1];
  

    // console.log(token);
    // token ne verify cheyyan oru predefined method und athu oru variable lek edth vekkanm
  try { const jwtResponse = jwt.verify(token,"supercreatekey1234")
    console.log(jwtResponse);
   req.payload = jwtResponse.userId
   next()
}catch(err){
    req.status(401).json('autherization failed!!! please Login')
}


}
module.exports = jwtmiddleware





