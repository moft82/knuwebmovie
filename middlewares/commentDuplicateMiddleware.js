const Comment = require('../models/Comment.js')

module.exports = async(req, res, next) => {
    const {code} = req.body;
    const comments = (await Comment.find({ code: code, user_id: req.session.userId })).toString()
    if (comments != ""){
        return res.redirect('/view/' + code)
    }
    next()
}