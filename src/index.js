
if (process.env.NODE_ENV !== 'production') {
    require ("dotenv").config({
        path:`.env.${process.env.NODE_ENV}`
    })
} 

require("./expressServer")

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("MONGO_URL:", process.env.MONGO_URL);

const mongoose = require("mongoose")
console.log(process.env.NODE_ENV, process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true })
.then(()=>console.log("MongoDb running on 27017"))
.catch((error)=>console.log("Failed to connect to MongoDB",error))

module.exports = require("./expressServer");
