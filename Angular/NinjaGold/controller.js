const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const User = MongModels.User;

module.exports = {
    displayGold: function(req,res){
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    save: function(req,res){
        User.findOne({_id:"5dc5c2728099e73d446625d4"})
            .then(data => {
                data.gold = req.params.id
                return data.save()
            })
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },
    reset: function(req,res){
        User.find()
            .then(data => {
                data.gold = 0
                return data.save()
            })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    newBase: function(req,res){
        const newuser = new User();
        newuser.gold = 0
        newuser.save()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
