// ithine import cheythale .evn file le content project le process lek load avu
require('dotenv').config()  
const express = require('express')
const cors = require('cors')
const router = require('./Route/router')
// create an express application
const pfsever = express()


pfsever.use(cors())
pfsever.use(express.json())
pfsever.use(router)
 const PORT = 4000 || process.env.PORT

 pfsever.listen(PORT,()=>{
    console.log(`project fair server started at port :${PORT} and waiting for client request`);
    
 })
 pfsever.post('/',(req,res)=>{
res.send(`<h1>project fair server started and waiting client request</h1>`)
  
 })

 