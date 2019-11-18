const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const Restaurant = MongModels.Restaurant;
const Quote = MongModels.Quote;

module.exports = {
    displayAllAuthors: function(req,res){
        Restaurant.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    displayTheAuthor: function(req,res){
        Restaurant.findOne({_id:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createTheAuthor: function(req,res){
        const newauthor = req.body
        Restaurant.create(newauthor)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateTheAuthor: function(req,res){
        Restaurant.findOne({_id:req.params.id})
            .then(author => {
                author.name = req.body.name
                author.cuisine = req.body.cuisine
                return author.save();
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    getAllQuote: function(req,res){
        Restaurant.findOne({_id:req.params.id})
            .then(data => res.json(data.quote))
            .catch(err => res.json(err))
    },
    deleteTheAuthor: function(req,res){
        Restaurant.remove({_id:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createOneQuote: function(req,res){
        const newQuotes = new Quote()
        newQuotes.customer = req.body.customer
        newQuotes.star = req.body.star
        newQuotes.description = req.body.description
        newQuotes.save()
            .then(data => Restaurant.updateOne({_id: req.params.id}, {$push: {quote: data}}))
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    nameChecker: function(req,res){
        Restaurant.find({name:req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}
