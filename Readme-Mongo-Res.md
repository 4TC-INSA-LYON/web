- mkdir data
- mongod --dbpath ./data

- mongo toto

- db.users.insert({"Nom": "Frénot"})
- db.users.find()
- db.users.findOne()
- db.users.find().pretty()

- db.users.insert({"name": "titi", "adresses": [ {"rue": "du nain"}, {"rue": "du géant"}]})
- db.users.insert({"name": "toto", "adresses" : [ {"rue": "rouge", "avenue": "bleue"}]})
- db.users.find().count()

- db.users.find({"adresses.avenue": {$exists: true}})

- db.users.find({"Nom": "Frénot")})
- db.users.find({"_id":ObjectId("58cf9167d81f12cc6256bfc8")})

- db.users.update({"_id":ObjectId("58cf8afed81f12cc6256bfc6")}, {$set: {"Nom": "Stéphanie"}})
- db.users.update({"_id":ObjectId("58cf8afed81f12cc6256bfc6")}, {$set: {adresses: [{"rue":"de savoie"}]}})
- db.users.update({"_id":ObjectId("58cf8afed81f12cc6256bfc6")}, {$push: {adresses: {"rue": "de paris"}}}})
- db.users.update({"_id":ObjectId("58cf9167d81f12cc6256bfc8")}, {$push: {adresses: { "rue" : "du géant" }}})

- db.users.find({"adresses.rue": "de savoie"})
- db.users.update({"adresses.rue": "de savoie"}, {$set : {"adresses.$.rue": "totot"}})
- db.users.update({"adresses.rue": "du géant"}, {$set : {"adresses.$.rue": "totot"}})
- db.users.update({"adresses.rue": "du géant"}, {$set : {"adresses.$.rue": "totot"}}, {multi:true})
