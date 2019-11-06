const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    creator:{type: String, required: [true, "Post must have a creator"], minlength: [1, "Name cannot be empty"]},
    content: {type: String, required: [true, "Post must have content"]},
}, {timestamps: true})
const BlogSchema = new mongoose.Schema({
    creator:{type: String, required: [true, "Blog must have a creator"], minlength: [1, "Name cannot be empty"]},
    content: {type: String, required: [true, "Blog must have content"]},
    posts: [PostSchema]
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema);
const Blog = mongoose.model('Blog', BlogSchema);

module.exports = {
    Post: Post,
    Blog: Blog
}
