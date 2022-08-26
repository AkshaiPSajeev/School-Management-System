import React, { useEffect } from 'react'
import Login from '../../components/Login/Login'

function StudentLoginPage() {
  const bgStyle={
    background:"linear-gradient(#222831,#393E46)",
    backgroundSize:"cover",
    height:"100vh"
    
  }
  useEffect(()=>{
    //if there is student token go to student home page or go to student login page
  })
  return (
    <>
    <div style={bgStyle} className='flex h-screen'>
    <Login role="Student" />
    </div>
   
    </>
  )
}

export default StudentLoginPage