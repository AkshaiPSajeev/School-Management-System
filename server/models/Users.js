const mongoose=require('mongoose');

const Users=mongoose.Schema(
    {
        Email:{
            type:String,
            required:true,
            unique:true
        },
        Password:{
            type:String,
            required:true
        },
        Role:{
            type:String,
            required:true
        }

    },
    {
        collection:"Users"
    }
);

module.exports=mongoose.model("Users",Users);