const mongoose = require("mongoose")
// require('dotenv').config()
mongoURI = "mongodb+srv://malikusman:usmanmalik@cluster0.uhyzy4o.mongodb.net/dream-land?retryWrites=true&w=majority"


const connectToMongoose = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo succesfully")
    })
}
module.exports = connectToMongoose  