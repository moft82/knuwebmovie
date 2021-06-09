const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const { user_id, password } = req.body;
    User.findOne({user_id:user_id}, (error,user) => {      
      if (user){           
        bcrypt.compare(password, user.password, (error, same) =>{          
          if(same){ 
            req.session.userId=user.user_id      
            res.redirect('/')
          }
          else{
            res.redirect('/user/login')  
          }
        })
      }
      else{
        res.redirect('/user/login')
      }
    })
}