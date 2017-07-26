
var dao = require('../dao');

module.exports = function(router, db){

    router.get('/', function (req, res) {
        var users = [];
        dao.findAll(db, 48, function (err, response) {
            if(response){
                users = response || [];
            }
            console.log("Users", response);
            res.json(users);
            res.end();
        });
    });

    router.get('/search', function (req, res) {
        console.log("req", req);
        var q = req.query.q;
        var limit = req.query.limit || 50;
        var users = [];
        dao.search(db, q, limit, function (err, response) {
            console.log(err);
            if(response){
                users = response || [];
            }
            console.log("Search results ", response);
            res.json(users);
            res.end();
        });
    });

    /**
     * FInd single user with ID
     */
    /*router.get('/:id', function (req, res) {
        var id = req.params.id;
        var user = {};
        dao.findUser(db, id , function (err, response) {
            if(response){
                user = response || {};
            }
            console.log("User", response);
            res.json(user);
            res.end();
        });
    });*/


    return router;
};
