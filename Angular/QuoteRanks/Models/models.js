const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    content: {type: String, required: [true, "A name is required"], minlength: [3, "The minimum length of a name is 3."]},
    vote: {type: Number, required: true}
}, {timestamps: true})
const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A name is required"], minlength: [3, "The minimum length of a name is 3."]},
    quote: [QuoteSchema]
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = {
    Author: Author,
    Quote: Quote
}
