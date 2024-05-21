const connectToMongoose = require('./database')
const express = require("express")
connectToMongoose();
var cors = require('cors')
 
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 5000;

app.use('/api/auth', require("./routes/auth"))
app.use('/api/property', require("./routes/property"))

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})