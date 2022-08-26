const generator=require('generate-password');


const getPassword=()=>{
    const password=generator.generate({
        length:10,
        numbers:true
    });
    return password;
}



module.exports=getPassword;