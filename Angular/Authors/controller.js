const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const Author = MongModels.Author;

module.exports = {
    displayAllAuthors: function(req,res){
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    displayTheAuthor: function(req,res){
        Author.findOne({_id:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createTheAuthor: function(req,res){
        const newauthor = req.body
        Author.create(newauthor)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateTheAuthor: function(req,res){
        Author.findOne({_id:req.params.id})
            .then(author => {
                author.name = req.params.name
                return author.save();
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteTheAuthor: function(req,res){
        Author.remove({_id:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
