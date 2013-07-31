var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://127.0.0.1:27017/test';

exports.connect = function(successCallback) {

  MongoClient.connect(dbUrl, function(err, db) {
    if(err) {
      throw err;
    }
    successCallback(db);
  });

};