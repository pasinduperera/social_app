const express = require("express");
const router = express.Router();
const mongoose  = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')

router.get("/", (req, res) => {
  res.send("hello this is main page...");
});
router.post("/signup", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.name)
  const { name, email, password} =req.body
  if (!name || !email || !password){
   return  res.status(422).json({error:"Please add all the fields!!"})
    //console.log(req.body)
  }

  User.findOne({ email: email }).then((saveUser)=>{
    if(saveUser){
      return res.status(422).json({ error: "That Email is already existes there.." })
    }
    bcrypt.hash(password,10).then(hashedpassword=>{
      
      const user = new User({ email, name, password: hashedpassword });
      user
        .save()
        .then((user) => {
          res.json({ message: "saved Successfully..." });
        })
        .catch((err) => {
          console.log(err);
        });

    })
    
  })
  .catch(err=>{
    console.log(err)
  })
  // res.json({message:"Successfilly posted!!"})
  // console.log(req.body)
  
});

router.post("/signin",(req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
    res.status(422).json({error:" All must be comlpeted..."})
  }
  User.findOne({email:email}).then(saveUser=>{
      if (saveUser) {
        return res
          .status(422)
          .json({ error: "You are alraedy login into the system.." });
      }
      bcryot.compare(password,saveUser.password).then(domatch=>{
        if(domatch){
          res.json({message:"succeffully loged in..."})
        }
        else{
              res.status(422).json({ error: " All must be comlpeted..." });

        }
  }).catch(err){
    console.log(err)
  }

  })

})

module.exports = router;
