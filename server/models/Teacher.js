const mongoose=require('mongoose');

const Teachers=mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,

        },
        Email:{
            type:String,
            required:true
        },
        Phone:{
            type:String,
            required:true
        },
        Address:{
            type:String,
            required:true
        },
        Qualification:{
            type:String,
            required:true
        },
        DateOfBirth:{
            type:String,
            required:true
        },
        Subjects:{
            type:Array,
            required:true
        },
        ImagePath:{
            type:String,
            required:true
        }

    },
    {
        collection:'Teachers'
    }
);

module.exports=mongoose.model('Teachers',Teachers);