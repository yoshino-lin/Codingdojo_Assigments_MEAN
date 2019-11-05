const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const User = MongModels.User;

module.exports = {
    homePage: function(req,res){
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newUser: function(req,res){
        const newuser = new User();
        newuser.name = req.params.name
        newuser.save()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    removeUser: function(req,res){
        User.remove({name:req.params.name})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    displayUser: function(req,res){
        User.findOne({name:req.params.name})
            .then(result => res.json(result))
            .catch(err => res.json(err));
        }
}
