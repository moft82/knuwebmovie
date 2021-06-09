const Comment = require('../models/Comment.js')
const Movie = require('../models/Movie.js')

module.exports = async(req, res) => {
    const movie = await Movie.findOne({code : Number(req.params.code)}).populate()
    const comments = await Comment.find({code : Number(req.params.code)}).populate()
    
    var summary = {}
    summary.count = comments.length

    res.render('view', {movie,summary ,comments})
}