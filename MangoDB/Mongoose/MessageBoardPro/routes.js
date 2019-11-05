const controller = require('./controller')

module.exports = app => {
    app.get('/', controller.homePage);
    app.post('/newMessage', controller.createMessage);
    app.post('/newComment/:id', controller.createComment);
}
