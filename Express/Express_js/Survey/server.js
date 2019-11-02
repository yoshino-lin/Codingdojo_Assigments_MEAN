const express = require("express");
const app = express();
const ejs = require("ejs");
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.render('index');
})

app.post("/result", (req, res) => {
    req.session.name=req.body.name;
    req.session.location=req.body.location;
    req.session.language=req.body.f_lang;
    req.session.comment=req.body.comment;
    context={
        name:req.session.name,
        location:req.session.location,
        language:req.session.language,
        comment:req.session.comment,
    }
    res.render('result',context);
})
var port = 8000;
app.listen(port, () => console.log("listening on port "+port));
