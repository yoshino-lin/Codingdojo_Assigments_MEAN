const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const Post = MongModels.Post;
const Blog = MongModels.Blog;

module.exports = {
    homePage: function(req,res){
        Blog.find()
            .then(data => res.render("index", {blogs: data}))
            .catch(err => res.json(err));
    },
    createMessage: function(req,res){
        const newMessage = new Blog();
        newMessage.creator = req.body.name_post_message;
        newMessage.content = req.body.message_to_post;
        newMessage.save()
            .then(data => res.redirect("/"))
            .catch(err => res.json(err));
    },
    createComment: function(req,res){
        const newComment = new Post();
        newComment.creator = req.body.name_post_comment;
        newComment.content = req.body.comment_to_post;
        newComment.save()
            .then(data => Blog.updateOne({_id: req.params.id}, {$push: {posts: data}}))
            .then(res.redirect("/"))
            .catch(err => res.json(err));
    }
}
