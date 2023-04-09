const User = require('../models/User');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_secrets = process.env.JWT_Secret;
const checkUser=(user)=>{
    return new Promise( async function(resolve,reject){
        try{
            const confirmeUser=await User.findOne({email:user.email})
            if (!confirmeUser) {
                reject ({message:'please enter correct credentials',status:400})
                return ;
            }

            const passwordCompare=await bcrypt.compare(user.password,confirmeUser.password) 
            if (!passwordCompare) {
                reject({message:'please enter correct credentials',status:400})
                return ;
            }

            resolve('dadsa')

        }catch(e){

            reject({message:e.message,status:500});
        }
    })
}

module.exports = checkUser