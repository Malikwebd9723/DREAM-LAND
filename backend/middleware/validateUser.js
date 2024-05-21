const jwt = require("jsonwebtoken");
// require('dotenv').config()
JWT_SEC = "dreamLandSecret"


const validateUser = (req , res , next)=>{
    try {
        const token = req.header('auth-token');
        if(!token){
            res.status(401).json({error: "Authenticate Yourself!"})
        }
        const data = jwt.verify(token , JWT_SEC)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(500).send ({error :'Internal server error'});
    }
}
module.exports = validateUser;