var request = require('supertest');

describe('API', function() {

  var app;
  var db;
  var user = process.env.MONGO_USER;
  var pass = process.env.MONGO_PASS;
  // TODO: Change this to test URL
  var url = 'mongodb://' + user + ':' + pass + '@229.candidate.59.mongolayer.com:10229/disco';

  before(function(done) {
    var Db = require('../db/db');
    Db.connect(url, function(err, dbConnection) {
      if (err) {
        console.log(err);
        done(err);
      } else {
        app = require('../server/app')().app;
        db = dbConnection;
        done(null, db);
      }
    });
  });

  after(function(done) {
    db.close(function(err, res) {
      if (err) {
        console.log("Err closing db", err);
      } else {
        console.log("Db closed");
        done();
      }
    });
  });

  it('should respond with correct status code', function(done) {
    request(app)
      .get('/test')
      .expect(404)
      .end(function(err, res) {
        done(err);
      });
    });

});