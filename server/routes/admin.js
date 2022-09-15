const express=require('express');
const router=express.Router();
const {addSchoolDetails,addSubject} =require('../controller/AdminController');
const {addTeacher}=require('../controller/TeacherController')
const upload=require('../utils/multer');
const {addAdmin}=require('../controller/AdminController')
const {checkLogin}=require('../controller/UsersController')
const {addSection}=require('../controller/AdminController')

router.post('/login',checkLogin);
router.post('/addSchoolDetails',addSchoolDetails);
router.post('/addSubject',addSubject);
router.post('/addTeacher',upload.single('TeacherImage'),addTeacher);
router.post('/addAdmin',addAdmin)
router.post('/addSection',addSection)
module.exports=router;
