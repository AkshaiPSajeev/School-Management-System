const mongoose=require('mongoose');

const Sections=mongoose.Schema(
    {
        SectionName:{
            type:String,
            required:true
        }
    },
    {
        collection:"Sections"
    }

);

module.exports=mongoose.model("Sections",Sections);