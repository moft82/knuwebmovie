const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const MovieSchema = new Schema({
  code : Number,
  title: String,
  showTm : Number,
  nation : String,
  genre: String,
  watchGradeNm : String,
  desc: String,
  director : String,
  actors : String,
  openDt: Date,
  desc : String,
  img: {type: String}
});

const Movie = mongoose.model('Movie',MovieSchema);
module.exports = Movie