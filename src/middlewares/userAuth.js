const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.userAuth = async(req,res,next)=>{
    try{
        const token = req.header('x-auth-token')
        if (!token)
            return res.status(401).send({ status: false, message: "TOKEN_NOT_FOUND" });
        const decodedTokenData = jwt.verify(token, process.env.JWTPRIVATEKEY_USER)
        const {userId,email} = decodedTokenData || {}
        const isUserExists = await userModel.findOne({
            isDeleted : false,
            _id : userId,
            email : email
        })
        if(!isUserExists){
            return res.status(403).send({ status: false, message: "UNAUTHORISED_USER" })
        }
        req.user = decodedTokenData;
        next();
    }catch(error){
        res.status(401).send({ status: false, message: "INVALID_TOKEN" });
    }
}