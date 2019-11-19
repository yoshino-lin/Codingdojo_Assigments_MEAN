const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    index: {type: Number, required: [true, "A index is required"]},
    name: {type: String, required: [true, "Products must contain a Name"], minlength: [3, "The minimum length of a name is 3."]},
    qty: {type: Number, required: [true, "Products must contain a Qty"], min: [0, "Product quantities ust be numbers greater than or equal to 0"]},
    price: {type: Number, required: [true, "Products must contain a Price"], min: [0, "Product prices must be numbers greater than or equal to 0"]},
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product: Product,
}
