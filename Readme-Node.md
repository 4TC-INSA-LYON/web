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
-> Avez-vous des questions ?

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
Au lancement du serveur, créer une connexion mongo (cf TD précédent)

Réalisez une route permettant de faire une requête sur mongo
