const jwt=require('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN_SECRET,{expiresIn:'60s'})
}

module.exports=generateToken;