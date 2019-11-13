const controller = require('./controller')

module.exports = app => {
    app.get('/api', controller.displayAllCakes);
    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
