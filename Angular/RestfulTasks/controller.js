const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const User = MongModels.User;

module.exports = {
    displayUser: function(req,res){
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    displayOne: function(req,res){
        User.findOne({_id:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createTask: function(req,res){
        const newuser = new User();
        newuser.title = req.params.name
        newuser.description = ""
        newuser.completed = false
        newuser.save()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateTask: function(req,res){
        User.findOne({_id: req.params.id})
            .then(user => {
                user.description = req.params.description
                user.completed = req.params.completed
                return user.save()
            })
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },
    removeTask: function(req,res){
        User.remove({_id:req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}
