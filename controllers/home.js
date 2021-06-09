const Movie = require('../models/Movie.js')

module.exports = async(req, res) => {
    const movies = await Movie.find({}).populate()
    res.render('index',{movies})
}