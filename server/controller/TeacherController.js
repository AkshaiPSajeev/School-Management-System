const Teachers=require('../models/Teacher');
const {cloudinary} =require('../utils/cloudinary');
const {upload}=require('../utils/multer');
const Address=require('../models/Address');
const Users=require('../models/Users');
const sendEmail=require('../utils/sendEmail');
const getPassword=require('../utils/generatePassword');
const bcrypt=require('bcrypt');


const addTeacher=async(req,res)=>{
   try{
    
    const imageUploadResponse= await cloudinary.uploader.upload(req.file.path,{folder:'Teachers'});
    
    const address=await Address.create({
        AddressName:req.body.HouseName,
        City:req.body.City,
        District:req.body.District,
        State:req.body.State,
        Pin:req.body.Pin
    });
  
    await Teachers.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Address:address._id.toString(),
        Qualification:req.body.Qualification,
        DateOfBirth:req.body.DateOfBirth,
        Subjects:JSON.parse(req.body.Subjects).subjects,
        TeacherImage:{
            ImageUrl:imageUploadResponse.secure_url,
            CloudinaryId:imageUploadResponse.public_id
        }
    });
   
    const password=getPassword();
    let salt=await bcrypt.genSalt(10); 
    let encryptedPassword=await bcrypt.hash(password,salt);

    await Users.create({
        Email:req.body.Email,
        Password:encryptedPassword,
        Role:'Teacher'
    });

    sendEmail(req.body.Email,password);
    res.status(201).send('Teacher added to data base');
    }catch(err){
        res.json({
            status: 400,
            message: "Invalid data input",
            data: false
        })
    }
  
    
}


module.exports={
    addTeacher
}