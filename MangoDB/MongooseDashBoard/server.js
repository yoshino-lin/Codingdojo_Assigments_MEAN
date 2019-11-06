const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
},{timestamps:true});
const Mongoose = mongoose.model('Mongoose', UserSchema);
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.locals.date = require('date-and-time');

app.get('/', (req, res) => {
    Mongoose.find()
        .then(data => res.render("index", {mongooses: data}))
        .catch(err => res.json(err));
});
app.get('/mongooses/new', (req, res) => {
    res.render("new")
});
app.get('/mongooses/:id', (req, res) => {
    Mongoose.find({_id: req.params.id})
        .then(data => res.render("info", {mongooses: data}))
        .catch(err => res.json(err));
});
app.post('/mongooses', (req, res) => {
    const mongoose = new Mongoose();
    mongoose.name = req.body.name;
    mongoose.save()
        .then(data => res.redirect('/'))
        .catch(err => res.json(err));
});
app.get('/mongooses/edit/:id', (req, res) => {
    Mongoose.find({_id: req.params.id})
        .then(data => res.render("edit", {mongooses: data}))
        .catch(err => res.json(err));
});
app.post('/mongooses/:id', (req, res) => {
    Mongoose.updateOne({_id: req.params.id},{
        name: req.body.newname,
    })
        .then(data => res.redirect('/mongooses/'+req.params.id))
        .catch(err => res.json(err));
});
app.post('/mongooses/destroy/:id', (req, res) => {
    Mongoose.remove({_id: req.params.id})
    .then(data => res.redirect('/'))
    .catch(err => res.json(err));
});
app.listen(8000, () => console.log("listening on port 8000"));
