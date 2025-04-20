const users = require('../models/userSchema')


// logic to resliove register
exports.register =async (req,res)=>{
    console.log("inside register controller function");
    const {username,email,password} = req.body
    // console.log(`${username},${email},${password}`);
    // await nu oru seen nd res kittaam kittathe irikkam soo run time error ne enagne slove cheyyam vecha using try catch block
    try{const existingUser = await  users.findOne({email})
    if(existingUser){
        req.status(406).json("Account already exist!! please Login.")
    }else{
     const newUser = new users({
        username,email,password,github:"",linkedin:"",profile:""
     })   
    //  mongodb lu veraan
    await newUser.save()
    
    res.status(200).json(newUser)
    }}
    catch(err){
        res.status(401).json(`register API failed,Error: ${err}`)
    }
}