var dbAccess = require('./dbAccess');
var collectionName = 'people';

exports.add = function(document, callback) {
  dbAccess.connect(function(err, db) {

    if (err) {
	  callback(err);
	} else {
      db.collection(collectionName).insert(document, function(err, document) {
        callback(err);
      });  
	}

  });
};

exports.findByName = function(name, callback) {
  dbAccess.connect(function(err, db) {
	
	if (err) {
	  callback(err);
	} else {
	  db.collection(collectionName).findOne({'name' : name}, function(err, document) {
        callback(err, document);
      });
	}

  });
};

exports.delete = function(name, callback) {
  dbAccess.connect(function(err, db) {
    
	if (err) {
	  callback(err);
    } else {
	  db.collection(collectionName).remove({'name' : name}, function(err) {
        callback(err);
      });  
    }

  });
};

exports.update = function(name, document, callback) {
  dbAccess.connect(function(err, db) {

    if (err) {
	  callback(err);
    } else {
	  db.collection(collectionName).update({'name' : name}, document, function(err, document) {
        callback(err);
      });  
	}

  });
};

