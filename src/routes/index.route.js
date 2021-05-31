const siteRouter = require('./site.route');
const newsRouter = require('./news.route');

function route(app){
    
    app.use('/news',newsRouter);
    app.use('/',siteRouter);
    // app.post('/search', function (req, res) {
    //     res.render('search');
    // })
    

}

module.exports = route;