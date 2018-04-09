var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use('/erreur', function(req, res) {
  return res.status(401).send("Erreur du fichier");
});
app.use(express.static('public'));

mongo = require('mongodb');
mongoclient = mongo.MongoClient;
app.use(bodyParser.json())

mongoclient.connect('mongodb://localhost/test', function(err, client) {
  if (err) { throw err; }
  db = client.db('test');
  userCollection = db.collection('users');
  projectCollection = db.collection('projects');

  app.get('/user', function(req, res){
     userCollection.find().toArray(function(err, etudiants) {
       if (err) { throw err; }
       res.send(etudiants);
     });
   });
  //
  // app.post('/user', function(req, res) {
  //   console.log("-->", req.body);
  //   userCollection.insertMany([req.body], function (err, result) {
  //     if (err) { throw err; }
  //     res.send("ok");
  //   });
  // });
  //
  // app.get('/project/:id', function(req, res) {
  //   projectCollection.findOne({"_id": new mongo.ObjectID(req.params.id)}, function(err, result) {
  //     if (err) {throw err;}
  //     res.send(result);
  //   });
  // });

  //injectUser = function(req, res, next) {
  //  projectCollection.findOne({"_id": new mongo.ObjectID(req.params.id)}, function(err, result) {
  //    if (err || result === null) {
  //      return res.status(404).send("Pas d'utilisateur");
  //    } else {
  //      req.user = result;
  //      next();
  //    }
  //  });
  //}

  //app.get('/project/:id', injectUser, function(req, res) {
  //  res.send(req.user);
  //});

  //app.use('/', function (req, res) {
  //  return res.send("Hello World");
  //});
});



app.listen(3000);
