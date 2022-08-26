const { findOne } = require('../models/Users');
const Users=require('../models/Users');
const bcrypt=require('bcrypt');
const {generateToken}=require('../utils/generateToken')
const checkLogin=(req,res)=>{
    const user=Users.   findOne({Email:req.body.email,Role:req.body.role});
    console.log(user);
    if(user && bcrypt.compare(req.body.password,user.Password)){
       res.status(200).json(
        {
            status:200,
            message:'valid login',
            data:[{
                email:user.Email,
                token:generateToken(user._id)
            }]
        }
       )
    }else{
        res.status(400).json({
            status: 400,
            message: "Invalid credential",
            data: false
        })
    }
}

module.exports={
    checkLogin
}