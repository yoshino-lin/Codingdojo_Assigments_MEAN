const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    gold: Number
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
}
