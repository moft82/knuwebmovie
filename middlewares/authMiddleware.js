const User = require('../models/User')

module.exports = (req, res, next) => {
  User.find({user_id: req.session.userId}, function (err, result) {
    if (err || !result || !req.session.userId) {
      return res.redirect('/user/login')
    }
    next()
  })
}