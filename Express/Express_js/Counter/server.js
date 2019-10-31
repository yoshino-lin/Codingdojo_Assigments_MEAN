const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var times = 0;

app.get("/", (req, res) => {
    if(times == 0){
        times = 1;
    }else{
        times += 1;
    }
    context={
        how_many_times:times
    }
    res.render('index',context);
})

app.post("/plus_two", (req, res) => {
    times+=1
    res.redirect('/');
})
app.post("/reset", (req, res) => {
    times=0
    res.redirect('/');
})
var port = 8000;
app.listen(port, () => console.log("listening on port "+port));
