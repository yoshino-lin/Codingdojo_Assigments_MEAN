const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    star:Number,
    content: String
}, {timestamps: true})
const CakeSchema = new mongoose.Schema({
    baker: String,
    img_url: String,
    comment: [CommentSchema]
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Cake = mongoose.model('Cake', CakeSchema);

module.exports = {
    Comment: Comment,
    Cake: Cake
}
