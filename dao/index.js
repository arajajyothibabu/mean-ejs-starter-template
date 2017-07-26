/**
 * Created by jyothi on 26/7/17.
 */

var usersCollection = "topic_intent";

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
        db.collection(usersCollection).find({}).skip(version * limit).limit(limit).toArray(function (err, res) {
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
        db.collection(usersCollection).find({_id: id}, function (err, res) {
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
            "topic": {
                "$regex": query.trim()
            }
        }).limit(limit || 24).toArray(function (err, res) {
            console.log(err, res);
            if(typeof cb !== 'undefined'){
                cb(err, res);
            }
        });
    }

};