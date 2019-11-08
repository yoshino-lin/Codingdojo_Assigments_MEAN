const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
}
