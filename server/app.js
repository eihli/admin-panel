var express = require('express');
var app = express();

var db = require('../db/db');

function setupServer(opts) {

  app.use(express.static('./app'));

  app.get('/test', function(req, res, next) {
    res.status(404).send();
  });

  function start(port) {
    port = process.env.PORT || port || 8080;

    app.listen(port, function() {
      console.log("Listening on port", port);
    });
  };

  return {
    app: app,
    start: start
  }

};

module.exports = setupServer;