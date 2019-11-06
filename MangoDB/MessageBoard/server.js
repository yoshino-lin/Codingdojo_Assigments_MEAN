const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
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

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.locals.date = require('date-and-time');

app.get('/', (req, res) => {
    Blog.find()
        .then(data => res.render("index", {blogs: data}))
        .catch(err => res.json(err));
});
app.post('/newMessage', (req, res) => {
    const newMessage = new Blog();
    newMessage.creator = req.body.name_post_message;
    newMessage.content = req.body.message_to_post;
    newMessage.save()
        .then(data => res.redirect("/"))
        .catch(err => res.json(err));
});
app.post('/newComment/:id', (req, res) => {
    const newComment = new Post();
    newComment.creator = req.body.name_post_comment;
    newComment.content = req.body.comment_to_post;
    newComment.save()
        .then(data => Blog.updateOne({_id: req.params.id}, {$push: {posts: data}}))
        .then(res.redirect("/"))
        .catch(err => res.json(err));
});
app.listen(8000, () => console.log("listening on port 8000"));
