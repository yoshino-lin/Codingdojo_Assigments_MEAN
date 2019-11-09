const controller = require('./controller')

module.exports = app => {
    app.get('/api', controller.displayAllCakes);
    app.get('/api/:id', controller.displayTheCake);
    app.get('/api/:name', controller.displayTheBaker);
    app.post('/api/createAcake', controller.createOneCake);
    app.post('/api/:id/:star/:', controller.createOneComment);
}
