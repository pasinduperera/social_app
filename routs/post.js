const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require('mongoose.model(Post)')
const require_login = require('../middleware/require_login')

router.post("./createpost",require_login,(req,res)=>{
    const{title,body} = req.body
    if(!title ||!body){
        return res.status(422).json({error :"have to enter title and body......."})
    }
    console.log(req.user);
    res.send("ok")
    // const post =  new post({
    //     title,
    //     body
    //////////
    // })
})
module.exports = router