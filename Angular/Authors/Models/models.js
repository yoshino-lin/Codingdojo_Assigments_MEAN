const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A name is required"], minlength: [3, "The minimum length of a name is 3."]},
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = {
    Author: Author
}
