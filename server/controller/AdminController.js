const SchoolDetails=require('../models/SchoolDetails');
const Address=require('../models/Address');
const Subjects=require('../models/Subject')

const addSchoolDetails=async(req,res)=>{
    
    const {SchoolName,City,District,State,Pin}=req.body;
    try{
        const address=await Address.create({
            City:City,
            District:District,
            State:State,
            Pin:Pin
        });
        const data=await SchoolDetails.create({
            SchoolName:SchoolName,
            Address:address._id.toString()
        });
    }
    catch(err){
        res.status(500).send('internal server error')
    }
    res.status(201).send('Data added to database')

}

const addSubject=async(req,res)=>{
    try{
        await Subjects.create(
            {
                SubjectName:req.body.SubjectName
            }
        );
    }catch(err){
        res.status(500).send('internal server error') 
    }
   res.status(201).send('Data added to database')
}

module.exports={
    addSchoolDetails,
    addSubject
}