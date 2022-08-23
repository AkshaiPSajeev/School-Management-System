const mongoose=require('mongoose');

const Subjects=mongoose.Schema(
    {
        SubjectName:{
            type:String,
            required:true,
            unique:true
        }
    },
    {
        collection:'Subjects'
    }
);

module.exports=mongoose.model('Subjects',Subjects);
