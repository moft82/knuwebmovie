const Comment = require('../models/Comment.js')

module.exports = (req, res, error) => {
    const {code, score, comment} = req.body;
    Comment.create({
        code: code,
        user_id: req.session.userId,
        score: score,
        comment: comment
    })
    res.redirect('/view/' + code) 
}