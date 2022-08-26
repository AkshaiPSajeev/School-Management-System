const express=require('express')
const router=express.Router();
const {checkLogin}=require('../controller/UsersController')

router.post('/login',checkLogin)

module.exports=router;