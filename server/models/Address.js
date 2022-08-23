const mongoose=require('mongoose');

const Address=mongoose.Schema(
    {
        City:{type:String,required:true},
        District:{type:String,required:true},
        State:{type:String,required:true},
        Pin:{type:String,required:true,minLength:6,maxLength:6}   
    },
    {
        collection:'Address'
    }
);

module.exports=mongoose.model('Address',Address);