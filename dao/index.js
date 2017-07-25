/**
 * Created by jyothi on 26/7/17.
 */

var usersCollection = "users";

module.exports = {
    /**
     *
     * @param db
     * @param limit
     * @param cb
     * @param version
     */
    findAll: function (db, limit, cb, version) {
        version = version || 0;
        db.collection(usersCollection).find({}).sort({repeats: -1}).skip(version * limit).limit(limit).toArray(function (err, res) {
            console.log(err, res);
            if(typeof cb !== 'undefined'){
                cb(err, res);
            }
        });
    },
    /**
     *
     * @param db
     * @param id
     * @param cb
     */
    findUser: function (db, id, cb) {
        db.collection(usersCollection).find({id: id}, function (err, res) {
            console.log(err, res);
            if(typeof cb !== 'undefined'){
                cb(err, res);
            }
        });
    },
    /**
     *
     * @param db
     * @param query {Array}
     * @param limit
     * @param cb
     */
    search: function(db, query, limit, cb){
        db.collection(usersCollection).find({
            "$text": {
                "$search": query.trim()
            }
        }).limit(limit || 24).toArray(function (err, res) {
            console.log(err, res);
            if(typeof cb !== 'undefined'){
                cb(err, res);
            }
        });
    }

};