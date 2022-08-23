const mongoose=require('mongoose');
const { collection } = require('./Address');

const SchoolDetails=mongoose.Schema(
    {
        SchoolName:{
            type:String,
            required:true
        },
        Address:{type:String,required:true}
    },
    {
        collection:'SchoolDetails'
    }
   
);

module.exports=mongoose.model('SchoolDetails',SchoolDetails);