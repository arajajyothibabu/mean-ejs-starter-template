module.exports = function (router, db) {

    router.get('/', function (req, res, next) {
        res.render('index', {title: 'Sample MEAN App'});
    });

    return router;

};
