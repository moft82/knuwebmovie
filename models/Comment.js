const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    code: Number,
    user_id: String,
    score : Number,
    comment: String,
    datePosted:{ 
        type: Date,
        default: new Date()
      },
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment