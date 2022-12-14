import React,{useState} from 'react'
import {checkLoginCredentials}  from '../../api/api'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {

const [error, setError] = useState(false);
const [errorMessage,setErrorMessage]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate=useNavigate();
const formvalid=()=>{

if(email.trim() ==''&& password.trim() ==''){

setErrorMessage('Enter Email and password to login');

return false;
}else if(email.trim() ==''){

setErrorMessage('Email required');


return false;
}else if(password.trim() ==''){
console.log('33333')
setErrorMessage('Password required');


return false;
}
return true;
}

const submitFormData=async (e)=>{
e.preventDefault();
if(!formvalid()){
setError(true);
console.log('form not valid');
console.log(errorMessage);
}else{
  const credentials={
    email:email,
    password:password,
    role:props.role
  }
  console.log('sending data');
  const baseURL='http://localhost:8000';
  //let response=await checkLoginCredentials(credentials);
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
  if(response.status===200){
    if(credentials.role==='Admin'){
      //store token in context api
      navigate('/admin')
    }else if(credentials.role==='Student'){
      navigate('/student')
    }else if(credentials.role==='Teacher'){
      navigate('/teacher')
    }
  }
 }).catch((response)=>{
    console.log(response);
 })
  
  
}
}

return (
<>
  <div className='flex justify-center m-auto'>
    <div className='bg-[#222831]   px-5 py-16  rounded-md  shadow-inner border '>
      <div className='flex justify-center mt-2'>
        <div className='flex justify-end '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-8 ">
            <path
              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" />
          </svg>
        </div>

        <h1 className='font-bold  text-white text-2xl '>

          {props.role} Login</h1>
      </div>
 
      <form onSubmit={submitFormData}>
        <div className='m-5 mx-10 grid grid-rows-1 gap-2'>

          <input type='text' className='border-2 mt-5 mb-2 rounded-md h-10 w-64 px-3 ' placeholder=' email' name='Email'
            onChange={(e)=>{setEmail(e.target.value)}}></input>

          <input type='password' className='px-3 mb-4 border-2 h-10 rounded-md' placeholder=' password' name='Password'
            onChange={(e)=>{setPassword(e.target.value)}}></input>
          <button className='border-blue-600 h-10 bg-[#0F79AF] hover:bg-[#1b86bc] rounded-md text-white font-bold'
            type='submit'>Log
            in</button>

          <a href="#" className='text-center text-white hover:text-slate-200 mt-5'>Forgot password?</a>

          {/*
          <hr />
          <button className='border-blue-600 h-10 bg-[#dd4b39]'>


            Log in</button>
          <input type='text' className='border-2 h-10' placeholder='email'></input> */}
        </div>
      </form>
    </div>
  </div>

</>
)
}

export default Login