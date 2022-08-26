const SchoolDetails=require('../models/SchoolDetails');
const Address=require('../models/Address');
const Subjects=require('../models/Subject')
const Users=require('../models/Users')
const bcrypt=require('bcrypt');
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
    console.log(req.body);
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


module.exports={
    addSchoolDetails,
    addSubject,
    addAdmin
}