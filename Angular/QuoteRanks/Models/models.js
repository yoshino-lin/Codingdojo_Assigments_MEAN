const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    content: {type: String, required: [true, "A quote is required"], minlength: [3, "A quote must contain at least three characters."]},
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
