const nodemailer=require('nodemailer');


const sendEmail=(toEmail,password)=>{

   console.log(toEmail,password,process.env.ADMIN_EMAIL,process.env.ADMIN_PASSWORD);
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.ADMIN_EMAIL,
            pass:process.env.ADMIN_PASSWORD
        }
    });
    const mailoptions={
        from:process.env.ADMIN_EMAIL,
        to:toEmail,
        subject:"Login credentials",
        text:`Following is your Login credentials for School profile.Use this to Login into the School system
        Login email :${toEmail} 
        Login Password:${password}`

    };
     transporter.sendMail(mailoptions,function(err,info){
        if(err)console.log('Error in sending mail')
        else
        console.log('Login credentials email send')
    })
}

module.exports=sendEmail;