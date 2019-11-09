const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const Comment = MongModels.Comment;
const Cake = MongModels.Cake;

module.exports = {
    displayAllCakes: function(req,res){
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    displayTheCake: function(req,res){
        Cake.findOne({_id:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    displayTheBaker: function(req,res){
        Cake.findOne({baker:req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createOneCake: function(req,res){
        const newcake = new Cake();
        newcake.baker = req.body.baker
        newcake.img_url = req.body.img_url
        newcake.save()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createOneComment: function(req,res){
        const newcomment = new Comment();
        newcomment.star = req.params.star
        newcomment.content = req.params.content
        newuser.save()
            .then(data => Cake.updateOne({_id: req.params.id}, {$push: {comment: data}}))
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
