var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'contacts' ;

const dbConnection = function (callback) {
    MongoClient.connect(url, function(err,client){
  
      if(err){
        return
      }
      console.log("Connected successfully to server");
      const db = client.db(dbName);
  
      callback(db)
      client.close()
    })
  }
  
module.exports = dbConnection