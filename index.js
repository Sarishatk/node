// ithine import cheythale .evn file le content project le process lek load avu
require('dotenv').config()  
const express = require('express')
const cors = require('cors')

// create an express application
const pfsever = express()




pfsever.use(cors())
pfsever.use(express.json())

 const PORT = 4000 || process.env.PORT

 pfsever.listen(PORT,()=>{
    console.log(`project fair server started at port :${PORT} and waiting for client request`);
    
 })

 