const controller = require('./controller')
const path = require('path')

module.exports = app => {
    app.get('/api', controller.displayAllAuthors);
    app.get('/api/:id', controller.displayTheAuthor);
    app.post('/api/newAuthor', controller.createTheAuthor);
    app.put('/api/:id/', controller.updateTheAuthor);
    app.delete('/api/:id', controller.deleteTheAuthor);
    app.get('/quotes/sort/:id', controller.getAllQuote);
    app.post('/quotes/:id', controller.createOneQuote);
    app.get('/api/goCheckName/:name', controller.nameChecker)
    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
