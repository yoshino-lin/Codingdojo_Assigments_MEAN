const controller = require('./controller')
const path = require('path')

module.exports = app => {
    app.get('/api', controller.displayAllAuthors);
    app.get('/api/:id', controller.displayTheAuthor);
    app.post('/api/:name', controller.createTheAuthor);
    app.put('/api/:id/:name', controller.updateTheAuthor);
    app.delete('/api/:id', controller.deleteTheAuthor);

    app.post('/quotes/:id', controller.createOneQuote);
    app.put('/quotes/up/:aid/:qid', controller.VoteUpOneQuote);
    app.put('/quotes/down/:aid/:qid', controller.VoteDownOneQuote);
    app.delete('/quotes/:aid/:qid', controller.deleteTheQuote);

    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
