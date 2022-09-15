const SchoolDetails=require('../models/SchoolDetails');
const Address=require('../models/Address');
const Subjects=require('../models/Subject')
const Users=require('../models/Users')
const bcrypt=require('bcrypt');
const Sections=require('../models/Sections');
const Classes = require('../models/Classes');
const addSchoolDetails=async(req,res)=>{
    
    const {SchoolName,City,District,State,Pin}=req.body;
    try{
        const address=await Address.create({
            AddressName:SchoolName,
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

const addAdmin=async(req,res)=>{
    let salt=await bcrypt.genSalt(10); 
    let encryptedPassword=await bcrypt.hash(req.body.Password,salt);
    try{
        await Users.create({
            Email:req.body.Email,
            Password:encryptedPassword,
            Role:"Admin"
        });
        res.status(201).json({
            status:201,
            message:"Admin added to database"
        });
    }catch(err){
        res.json({
            status: 400,
            message: "Invalid data input",
            data: false
        })
    }
}

const addSection=async(req,res)=>{

    console.log(req.body);
    const section=await Sections.findOne({SectionName:req.body.SectionName});
    console.log(section._id);
    const classes=await Classes.find({SectionId:section._id});
    console.log(classes);
}



module.exports={
    addSchoolDetails,
    addSubject,
    addAdmin,
    addSection
}