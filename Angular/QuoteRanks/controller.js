const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const Author = MongModels.Author;
const Quote = MongModels.Quote;

module.exports = {
    displayAllAuthors: function(req,res){
        Author.find().sort({'name':1})
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
    },
    createOneQuote: function(req,res){
        const newQuotes = new Quote()
        newQuotes.content = req.params.content
        newQuotes.vote = 0
        newQuotes.save()
            .then(data => Author.updateOne({_id: req.params.id}, {$push: {quote: data}}))
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    VoteUpOneQuote: function(req,res){
        Author.findOne({_id:req.params.aid})
            .then(data => {
                for(var each_quote of data["quote"]){
                    if(each_quote["_id"]==req.params.qid)
                        each_quote["vote"]++
                }
                return data.save()
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    VoteDownOneQuote: function(req,res){
        Author.findOne({_id:req.params.aid})
            .then(data => {
                for(var each_quote of data["quote"]){
                    if(each_quote["_id"]==req.params.qid)
                        each_quote["vote"]--
                }
                return data.save()
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteTheQuote: function(req,res){
        Author.findOne({_id: req.params.aid})
            .then(data => {
                for(var each_quote of data["quote"]){
                    if(each_quote["_id"]==req.params.qid){
                        return each_quote
                    }
                }
            })
            .then(data => Author.updateOne({_id: req.params.aid}, {$pull: {quote: data}}))
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
