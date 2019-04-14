var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(function (req, res, next) {
    if (req && res) { }
    setTimeout(next, 900);
});
var config = require('./db.json');
var isLoggedInNo = JSON.stringify(config.isloggedinno);
var isLoggedInYes = JSON.stringify(config.isloggedinyes);
server.post('/rpc/Account/IsLoggedIn', function (req, res) {
    if (req) { }
    res.send(isLoggedInNo);
});
server.post('/rpc/Account/login', function (req, res) {
    if (req.body.username === req.body.password) {
        res.send(isLoggedInYes);
    }
    else {
        res.send(isLoggedInNo);
    }
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.rewriter({
    '/rest/:resource/:id': '/:resource/:id',
    '/rest/:resource': '/:resource',
    '/rest/tagfavorite1/:id1/:id2': '/tagfavorites'
}));


server.use(router);
server.listen(4000, function () {
    console.log('json-server is running (json-server.js script)');
});
