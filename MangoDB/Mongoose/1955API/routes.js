const controller = require('./controller')

module.exports = app => {
    app.get('/', controller.homePage);
    app.get('/new/:name', controller.newUser);
    app.get('/remove/:name', controller.removeUser);
    app.get('/:name', controller.displayUser);

}
