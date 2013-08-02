var restify = require('restify');
var repository = require('./repository');

exports.start = function() {
  var server = restify.createServer();
  server.use(restify.bodyParser());

  server.get('/people/:name', function(req, res, next) {

    repository.findByName(req.params.name, function(err, document) {
	  handle(err, next);
      if (document) {
        res.setHeader('content-type', 'application/json');
        res.send(document);
      } else {
        res.setHeader('content-type', 'text/plain');
        res.send(404, "Resource not found");
      }
      return next();
    });
    
  });

  server.post('/people', function create(req, res, next) {

    repository.add(req.body, function(err) {
	  handle(err, next);
      res.send(201);
      return next();
    });
      
  });

  server.del('/people/:name', function create(req, res, next) {

    repository.delete(req.params.name, function(err) {
	  handle(err, next);
      res.send(204);
      return next();
    });
        
  });

  server.put('/people/:name', function create(req, res, next) {

    repository.update(req.params.name, req.body, function(err) {
	  handle(err, next);
      res.send(204);
      return next();
    });

  });

  server.listen(8080);
};

function handle(err, next) {
  if (err) {
    console.error(err);
    return next(new restify.InternalError("Internal server error"));
  }
};
