const controller = require('./controller')

module.exports = app => {
    app.get('/gold', controller.displayGold);
    app.post('/gold/:id', controller.save);
    app.post('/reset', controller.reset);
    app.get('/new', controller.newBase);
}
