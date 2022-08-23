const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();


const app=express();

const indexRoutes=require('./routes/index');
const adminRouter=require('./routes/admin');

mongoose.connect('mongodb://localhost:27017/SchoolManagement').then(()=>{
    console.log('monogo Db connected');
}).catch(()=>{
    console.log('mongo db error')
})

app.use(express.json())


app.use('/',indexRoutes);
app.use('/admin',adminRouter);

app.listen(8000,(req,res)=>{
    console.log('listening on port 8000');
})

