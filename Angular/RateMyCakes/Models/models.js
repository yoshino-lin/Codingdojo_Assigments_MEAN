const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    star: {type: Number, required: [true, "A rate is required"]},
    content: {type: String, required: [true, "A content is required"]}
}, {timestamps: true})
const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: [true, "A baker is required"]},
    img_url: {type: String, required: [true, "An img url is required"]},
    comment: [CommentSchema]
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Cake = mongoose.model('Cake', CakeSchema);

module.exports = {
    Comment: Comment,
    Cake: Cake
}
