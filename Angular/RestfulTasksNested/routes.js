const controller = require('./controller')

module.exports = app => {
    app.get('/api', controller.displayUser);
    app.get('/api/:id', controller.displayOne);
    app.post('/api/:title/:description', controller.createTask);
    app.put('/api/:id/:title/:description', controller.updateTask);
    app.delete('/api/:id', controller.removeTask);
}
