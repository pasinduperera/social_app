const { JSON_KEY } = require("../keys");
const mongoose = require('mongoose')
const User =mongoose.model("User")
const jwt = require('jsonwebtoken')



module.exports = (req,res,next)=>{
    const{authorization} = req.headers
    //authorization === baerar vlvnskdlnkfjsdnfdkjfnkbjnjfhjfdhvsdbadabkjsnassjflejk
    if(!authorization){
        res.status(401).json({error:"First you need to login to the system..."})
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token,JSON_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"You need to logged into system...."})
        }

        const{_id} = payload
        User.findById(_id).then((userdata) => {
          req.user = userdata
        next();
        })
    

    })
}