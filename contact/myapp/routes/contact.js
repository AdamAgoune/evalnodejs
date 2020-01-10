var express = require('express');
var router = express.Router();
const dbConnection = require('../dbConnection.js');
const ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;

router.post('/' , function(req,res,next){
    console.log(req.body.message)
    dbConnection(function(db){
  
      db.collection('tweets')
        .insertOne({
        nom : req.body.nom ,
        prenom : req.body.prenom ,
        email : req.body.email ,
        numero_mobile : req.body.numero_mobile,
        numéro_fix : req.body.numero_fix ,
        })
    })
})