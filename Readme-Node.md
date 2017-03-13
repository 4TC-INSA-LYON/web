https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e#.ot01zwcnc  

NodeJS est un interpréteur JavaScript, événementiel orienté vers des applications réseau à forte montée en charge. Le projet est annoncé en 2009 par Ryan Dahl, et repose sur la nouvelle machine virtuelle V8 de Google. Principalement, NodeJS repose sur une approche mono-threadé pour le traitement de requêtes réseau. Le coeur d'exécution est similaire à celui d'un navigateur Web, sans la partie complexe de gestion du DOM.

Q1 : Comprenez-vous ce paragraphe ?

L'objectif de ce TD est de lancer rapidement une application nodeJS de type serveur web simple. Puis de la muter vers un système de micro service REST.

# Installation et lancement de node
L'installation se fera dans le répertoire /tmp, qui normalement a suffisamment de place. Tout se fait en ligne de commande, car c'est comme cela qu'on comprend ce qui se passe...
Quand la machine redémarrera toutes vos données seront perdues.

    cd /tmp
    wget https://nodejs.org/dist/v6.10.0/node-v6.10.0-linux-x64.tar.gz
    tar zxvf node-v6.10.0-linux-x64.tar.gz

    (wget https://nodejs.org/dist/v6.10.0/node-v6.10.0-darwin-x64.tar.gz s'il y a des macs dans la salle)

- Ajoutez le répertoire bin dans votre PATH, afin de pouvoir lancer toutes les commandes du répertoire bin.
- Listez les fichiers dans le répertoire bin, et testez les.
- Lancez l'interpréteur.

# Testez l'interpréteur node
Réalisez une série de commande sous node, pour bien vérifier que vous maitrisez JS.
- déclaration de variable
- condition
- boucle
- fonction
- log
- tableau / objets

-> C'est bon ? Vous avez tout retrouvé ?
Q2 : Avez-vous des questions ? (cf. NaNaNaNaNWatmannnn)

# Lancement initial

     npm install express

Ecrire le code le plus simple pour envoyer une page web statique sur le port 3000.
- Testez le avec un client web.

Combien de lignes de code vous faut-il ?

# Fabrication d'une fonction de retour ok et erreur
Crééz une app pour gérer la route '/' et exécuter une fonction basique du style : res.send("Hello World")

Testez un retour d'erreur...
res.status(400).send("Erreur de page")

Testez dans votre navigateur.

https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP

# Intégration dans l'interrogation mongo
## Importez la base test dans le fichier dump.tgz fournie
Vérifiez que vous savez interroger la collection 'users' de la base test
Pour la mise en forme vous pouvez utiliser le module npm json

## Connection mongo
En utilisant le mondule npm mongodb, connectez-vous à la base de données test

## Interrogation mongo
Réalisez une première route de type GET, de nom '/api/v1/user' permettant de faire une requête sur mongo et de récupérer la liste des documents de la collection users.

## Code de test
Utiliser le code de test et vérifier qu'il fonctionne

Q5 : Que pouvez-vous dire de ce code ?

## Ajout d'une route POST
Décommentez la ligne post du client de test, puis ajoutez la route associée.

## Ajout d'une route de récupération d'un projet spécifique
Décommentez le dernier appel dans le code de test
Q6 : Ajoutez dans le test le test de la route suivante
GET '/project/56a112e89ace319342ce09ea'

Q7 : Compléter votre code pour gérer la route
GET '/project/:id'

## Passage par un middleware
Entre le déclenchement de la route et son retour final, il est possible d'intercaler des fonctions de traitement intermédiaires. Ces fonctions travaillent sur la requête initiale, et peuvent modifier la réponse apportée. Les middleware peuvent être générique, il est alors possible d'effectuer des traitements génériques factorisables avant de renvoyer la réponse.

Q8 : Injectez le middleware suivant dans la route /project/:id, afin d'injecter le projet avant de renvoyer la réponse au client.

    injectUser = function(req, res, next) {
      projectCollection.findOne({"_id": new mongo.ObjectID(req.params.id)}, function(err, result) {
        if (err || result === null) {
          return res.status(404).send("Pas d'utilisateur");
        } else {
          req.user = result;
          next();
        }
      });
    }

Q9 : Injecter un middleware qui comptabilise le nombre d'accès à un projet particulier et qui incrémente automatiquement un compteur dans la collection mongo correspondante.

Pour finir avec les middleware, il est possible d'avoir des middlewares parametrés, qui récupèrent automatiquement le nom du paramètre passé dans l'appel.

Q10 : Transformez le middleware injectUser, par un middleware paramétré selon la route suivante.
GET '/project/:projectId'

En guide, voici la signature du middleware paramétré correspondant :
app.param 'formationId', function (req, res, next, formationId) {...}

## Wrap up final
A la fin de cette séance, vous devez savoir :
- Comprendre la notion de fonction asynchrone dans le Web
- Manipuler basiquement un serveur node. Installation, lancement, rédemarrage
- Interfacer des routes node sur un serveur asynchrone externe comme mongo
- Comprendre le principe des interfaces REST sur une base de données
- Comprendre le mécanisme d'interposition entre client et réponse finale
- Savoir développer un ensemble d'API serveur JSON offertes à un client Web
