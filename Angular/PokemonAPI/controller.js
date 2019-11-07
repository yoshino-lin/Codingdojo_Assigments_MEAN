const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const User = MongModels.User;

module.exports = {
    displayabilities: function(req,res){
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}
