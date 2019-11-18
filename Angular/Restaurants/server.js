const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public'));
app.use(express.urlencoded({extended: true}));
const routes = require('./routes')(app);
app.listen(8000, () => console.log("listening on port 8000"));
