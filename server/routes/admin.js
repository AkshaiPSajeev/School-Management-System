const express=require('express');
const router=express.Router();
const {addSchoolDetails,addSubject} =require('../controller/AdminController');
const {addTeacher}=require('../controller/TeacherController')



router.post('/addSchoolDetails',addSchoolDetails);
router.post('/addSubject',addSubject);
router.post('/addTeacher',addTeacher);

module.exports=router;
