const controller = require('./controller')

module.exports = app => {
    app.get('/pokemon', controller.displayUser);
}
