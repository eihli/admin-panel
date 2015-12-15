var MongoClient = require('mongodb').MongoClient;

var user = process.env.MONGO_USER;
var pass = process.env.MONGO_PASS;
var url = 'mongodb://' + user + ':' + pass + '@229.candidate.59.mongolayer.com:10229/disco';

exports.connect = function(url, done) {
  var state = {
    db: null
  }
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return done(err);
    }
    state.db = db;
    done(null, db);
  });
};

exports.get = function() {
  return state.db;
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
