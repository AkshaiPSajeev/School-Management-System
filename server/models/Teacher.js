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
            type:Date,
            required:true
        },
        /*Subjects:{
            type:Array,
            required:true
        },*/
        TeacherImage:{
            ImageUrl:{
                type:String,
                required:true
            },
            CloudinaryId:{
                type:String,
                required:true
            }
            
        }

    },
    {
        collection:'Teachers'
    }
);

module.exports=mongoose.model('Teachers',Teachers);