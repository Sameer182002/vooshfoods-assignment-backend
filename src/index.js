
if (process.env.NODE_ENV) {
    require ("dotenv").config({
        path:`.env.${process.env.NODE_ENV}`
    })
} else require ("dotenv").config()
require("./expressServer")

const mongoose = require("mongoose")
console.log(process.env.NODE_ENV, process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(()=>console.log("MongoDb running on 27017"))
.catch((error)=>console.log("Failed to connect to MongoDB",error))

