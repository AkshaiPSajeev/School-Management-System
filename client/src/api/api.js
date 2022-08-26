import axios from 'axios';

//const API=axios.create({baseURL:'http://localhost:8000'},{headers:{'Content-Type':'multipart/form-data'}})
const baseURL='http://localhost:8000';

export const checkLoginCredentials=(credentials)=>{
    let url='';
    if(credentials.role==='Student')url='/student/login'
    else if(credentials.role==='Admin')url='/admin/login'
    else if(credentials.role==='Teacher')url='/teacher/login'
   
    axios({
        method:'post',
        url:baseURL+url,
        data:{
          email:credentials.email,
          password:credentials.password,
          role:credentials.role
        }
   }).then((response)=>{
     console.log(response);
   }).catch((response)=>{
      console.log(response);
   })
}