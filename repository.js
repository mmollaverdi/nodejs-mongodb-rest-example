var dbAccess = require('./dbAccess');
var collectionName = 'people';

exports.add = function(document, successCallback) {
  dbAccess.connect(function(db) {
  
    db.collection(collectionName).insert(document, function(err, docs) {
      if(err) {
        throw err;
      }
      successCallback();
    });  

  });
};

exports.findByName = function(name, successCallback) {
  dbAccess.connect(function(db) {

    db.collection(collectionName).findOne({'name' : name}, function(err, document) {
      if(err) {
        throw err;
      }
      successCallback(document);
    });  

  });
};

exports.delete = function(name, successCallback) {
  dbAccess.connect(function(db) {

    db.collection(collectionName).remove({'name' : name}, function(err, document) {
      if(err) {
        throw err;
      }
      successCallback();
    });  

  });
};

exports.update = function(name, document, successCallback) {
  dbAccess.connect(function(db) {

    db.collection(collectionName).update({'name' : name}, document, function(err, document) {
      if(err) {
        throw err;
      }
      successCallback();
    });  

  });
};

