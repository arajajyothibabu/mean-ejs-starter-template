
var dao = require('dao');

module.exports = function(router, db){

    router.get('/', function (req, res) {
        var users = [];
        dao.findAll(db, 48, function (err, response) {
            if(response){
                users = response || [];
            }
            res.json(users);
        });
    });

    router.get('/:id', function (req, res) {
        var id = req.params.id;
        var user = {};
        dao.findAll(db, id , function (err, response) {
            if(response){
                user = response || {};
            }
            res.json(user);
        });
    });

    router.get('/search', function (req, res) {
        var q = req.query.q;
        var limit = req.query.limit || 50;
        var users = [];
        dao.search(db, q, limit, function (err, response) {
            if(response){
                users = response || [];
            }
            res.json(users);
        });
    });


    return router;
};
