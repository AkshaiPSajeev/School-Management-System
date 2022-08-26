const express=require('express');
const router=express.Router();
const {addSchoolDetails,addSubject} =require('../controller/AdminController');
const {addTeacher}=require('../controller/TeacherController')
const upload=require('../utils/multer');
const {addAdmin}=require('../controller/AdminController')

router.post('/addSchoolDetails',addSchoolDetails);
router.post('/addSubject',addSubject);
router.post('/addTeacher',upload.single('TeacherImage'),addTeacher);
router.post('/addAdmin',addAdmin)
module.exports=router;
