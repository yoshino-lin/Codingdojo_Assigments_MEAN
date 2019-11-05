const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.locals.date = require('date-and-time');
const routes = require('./routes')(app);

app.listen(8000, () => console.log("listening on port 8000"));
