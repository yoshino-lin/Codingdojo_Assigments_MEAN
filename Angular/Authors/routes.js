const controller = require('./controller')

module.exports = app => {
    app.get('/api', controller.displayAllAuthors);
    app.get('/api/:id', controller.displayTheAuthor);
    app.post('/api/:name', controller.createTheAuthor);
    app.put('/api/:id/:name', controller.updateTheAuthor);
    app.delete('/api/:id', controller.deleteTheAuthor);
}
