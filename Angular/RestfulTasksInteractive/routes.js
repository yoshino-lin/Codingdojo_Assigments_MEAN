const controller = require('./controller')

module.exports = app => {
    app.get('/api', controller.displayUser);
    app.get('/api/:id', controller.displayOne);
    app.post('/api/:name', controller.createTask);
    app.put('/api/:id/:description/:completed', controller.updateTask);
    app.delete('/api/:id', controller.removeTask);
}
