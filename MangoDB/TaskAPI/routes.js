const controller = require('./controller')

module.exports = app => {
    app.get('/', controller.displayUser);
    app.get('/:id', controller.displayOne);
    app.post('/:name', controller.createTask);
    app.put('/:id/:description/:completed', controller.updateTask);
    app.delete('/:id', controller.removeTask);
}
