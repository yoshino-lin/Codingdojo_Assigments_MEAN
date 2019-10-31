const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats", (req, res) => {
    res.render('cats');
})

app.get("/cuddle", (req, res) => {
    var context={
        name:"Cuddle",
        fa_food:"Spaghetti",
        age:3,
        sleep_spot:["under the bed","in a sunbeam"],
        id:1,
    }
    res.render('details',context);
})
app.get("/tom", (req, res) => {
    context={
        name:"Tom",
        fa_food:"Jerry",
        age:100,
        sleep_spot:["outside the house","in the bathroom"],
        id:2,
    }
    res.render('details',context);
})
app.get("/kitty", (req, res) => {
    context={
        name:"Kitty",
        fa_food:"Grass",
        age:6,
        sleep_spot:["on the owner's bed","beside the firdge"],
        id:3,
    }
    res.render('details',context);
})

var port = 8000;
app.listen(port, () => console.log("listening on port "+port));
