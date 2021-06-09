const User = require('../models/User.js')
const path = require('path')

module.exports = (req,res)=>{ 
    User.create(req.body,(error, user)=>{
        const { user_id, password } = req.body;
        if(error){
            console.log(error)
            return res.redirect('/user/register')        
        }        
        res.redirect('/')  
    })        
}