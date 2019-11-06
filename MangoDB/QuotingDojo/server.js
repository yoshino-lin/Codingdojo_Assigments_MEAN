const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
    quote: String
},{timestamps:true});
const User = mongoose.model('User', UserSchema);
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.locals.date = require('date-and-time');


app.post('/quotes', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.quote = req.body.quote;
    user.save()
        .then(data => res.redirect('/quotes'))
        .catch(err => res.json(err));
});

app.get('/quotes', (req, res) => {
    User.find().sort({createdAt:-1})
        .then(data => res.render("quotes", {users: data}))
        .catch(err => res.json(err));
});

app.get('/', (req, res) => {
    res.render("index")
});

app.listen(8000, () => console.log("listening on port 8000"));
