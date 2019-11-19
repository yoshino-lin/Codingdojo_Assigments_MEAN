const controller = require('./controller')
const path = require('path')

module.exports = app => {
    app.get('/api', controller.displayAllProduct);
    app.get('/api/:id', controller.displayTheProduct);
    app.post('/api/newProduct', controller.createTheProduct);
    app.put('/api/:id/', controller.updateTheProduct);
    app.delete('/api/:id', controller.deleteTheProduct);
    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
