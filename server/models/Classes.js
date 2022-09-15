const mongoose=require('mongoose');

const Classes=mongoose.Schema(
    {
        ClassName:{type:String,required:true}
    },
    {
        collection:"Classes"
    }
);

module.exports=mongoose.model("Classes",Classes);
