const controller = require('./controller')

module.exports = app => {
    app.get('/api', controller.displayAllCakes);
    app.get('/api/:id', controller.displayTheCake);
    app.get('/api/:name', controller.displayTheBaker);
    app.post('/api/:name/:url', controller.createOneCake);
    app.post('/api/:id/:star/:', controller.createOneComment);
}
