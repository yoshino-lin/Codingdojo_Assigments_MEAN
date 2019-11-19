const mongoose = require('mongoose');
const MongModels = require('./Models/models');

const Product = MongModels.Product;

module.exports = {
    displayAllProduct: function(req,res){
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    displayTheProduct: function(req,res){
        Product.findOne({index:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createTheProduct: function(req,res){
        const newProduct = req.body
        Product.create(newProduct)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateTheProduct: function(req,res){
        Product.findOne({index:req.params.id})
            .then(author => {
                author.name = req.body.name
                author.price = req.body.price
                author.qty = req.body.qty
                return author.save();
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteTheProduct: function(req,res){
        Product.remove({index:req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
