var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://127.0.0.1:27017/test';

exports.connect = function(callback) {

  MongoClient.connect(dbUrl, function(err, db) {
    callback(err, db);
  });

};