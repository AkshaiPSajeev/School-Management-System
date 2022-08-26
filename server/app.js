const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();


const app=express();

const indexRoutes=require('./routes/index');
const adminRouter=require('./routes/admin');
const studentRouter=require('./routes/student');
const teacherRouter=require('./routes/teacher')
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('monogo Db connected');
}).catch(()=>{
    
    console.log('mongo db error')
})

app.use(express.json())
app.use(cors());

app.use('/',indexRoutes);
app.use('/admin',adminRouter);
app.use('/student',studentRouter);
app.use('/teacher',teacherRouter);

app.listen(8000,(req,res)=>{
    console.log('listening on port 8000');
})

