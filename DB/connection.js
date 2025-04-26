

const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log("successfully connected with mongodb");
}).catch((err) => {
    console.log(`connection  :${err}`);
})
