const express = require("express");
const app = express();
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

app.get("/", (req, res) => {
    if(req.session.times == null){
        req.session.times = 1;
    }else{
        req.session.times += 1;
    }
    context={
        how_many_times:req.session.times
    }
    res.render('index',context);
})

app.post("/plus_two", (req, res) => {
    req.session.times+=1
    res.redirect('/');
})
app.post("/reset", (req, res) => {
    req.session.times=null
    res.redirect('/');
})
var port = 8000;
app.listen(port, () => console.log("listening on port "+port));
