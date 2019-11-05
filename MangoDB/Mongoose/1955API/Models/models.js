const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type: String, required: [true, "Post must have a name"], minlength: [1, "Name cannot be empty"]},
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
}
