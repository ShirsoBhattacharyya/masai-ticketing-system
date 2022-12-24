const jwt = require('jsonwebtoken');

const authentication= (req,res,next)=>{
    const token= req.headers?.authorization?.split(" ")[1]; 
    jwt.verify(token, "masai-ticketing-system-jwtsecret", async function(e, user) {
        if(e){
            res.json({message:"error",response:e.message});
        }else{  
            req.body.userId=user.userId;
            next();
        }    
    });
}

module.exports=authentication;
