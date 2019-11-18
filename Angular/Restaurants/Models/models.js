const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    customer:{type: String, required: [true, "A name is required"], minlength: [3, "A name must contain at least three characters."],unique: true},
    star: {type: Number, required: true},
    description: {type: String, required: [true, "A quote is required"], minlength: [3, "A quote must contain at least three characters."]},
}, {timestamps: true})
const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A name is required"], minlength: [3, "The minimum length of a name is 3."]},
    cuisine: {type: String, required: [true, "A cuisine is required"], minlength: [3, "The minimum length of a name is 3."]},
    quote: [QuoteSchema]
}, {timestamps: true})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = {
    Restaurant: Restaurant,
    Quote: Quote
}
