# Contexte
Les bases de données NoSql, sont des bases de données de nouvelles générations, qui visent à maintenir des performances correctes dans des conditions de répartitions sur un réseau. Elles tirent leurs origines d'une conjecture dite du CAP ou théorème de Brewers. Elle stipule qu'on ne peut pas développer un moteur de base de données distribué sur plusieurs noeuds qui préserve tout le temps les trois capacités :
- La disponibilité,
- La cohérence,
- La résistance aux déconnexions partielles du réseau.

Cette conjecture de 2002, impulse une nouvelle dynamique aux moteurs de base de données relationnelles qui montraient des signes de faiblesse dans le cas de gros volumes de données ou dans le cas d'accès 24/24 à travers la planète. Google, Facebook ou Twitter ne peuvent pas reposer sur des moteurs de base de données relationnelles classiques comme Oracle ou MySQL. Une nouvelle génération de moteurs arrive.

NB : NoSQL, ne veut pas dire que ces moteurs ne sont pas des moteurs SQL. Ils possèdent tous un langage d'interrogation assez proche de SQL. Mais signifie 'Not Only' SQL ; c'est à dire que la nature du moteurs permet de faire des choses en plus ou en moins...

L'objectif de ce TD est de manipuler rapidement un moteur NoSQL, mongodb, afin de comprendre les alternatives possibles au bases relationnelles. N'hésitez-pas à soulever toutes les questions possibles qui vous viennent à l'esprit. Ce TD est bien évidemment trop gros pour le faire en séance...

# Base de données relationnelles
Q1- Quels sont les grands principes de bases de données relationnelles qui vous semblent important ? (10min)

# Installation et lancement du moteur mongo
L'installation se fera dans le répertoire /tmp, qui normalement a suffisamment de place. Tout se fait en ligne de commande, car c'est comme cela qu'on comprend ce qui se passe...
Quand la machine redémarrera toutes vos données seront perdues.

    cd /tmp
    wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.2.7.tgz  
    tar zxvf mongodb-linux-x86_64-3.2.7.tgz

    (wget https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-3.4.2.tgz s'il y a des macs dans la salle)

- Ajoutez le répertoire bin dans votre PATH, afin de pouvoir lancer toutes les commandes du répertoire bin.
- Listez les fichiers dans le répertoire bin, et repérez rapidement le serveur et l'interpréteur de commandes.
- Lancez le moteur de base de données.

# Premiers pas rapides
Mongo est une base de données documentaires. C'est à dire que l'unité d'information n'est pas une ligne structurée dans une table ou une vue de jointure sur des tables, mais un document au format Json. Le document est issu d'une collection, qui peut être vu comme l'équivalent d'une table relationnelle, car c'est le point d'entrée des questions posées.
Dans la question suivante, chaque ligne correspond à une commande.
Ecrivez la suite de commandes dans un fichier que vous stockerez dans votre compte utilisateur.

    Lancez l'interpréteur de commande avec 'toto' en paramètre.
    Insérer l'enregistrement {"Nom": "Frénot"} dans la collection 'user'
    Listez tous les enregistrements de la collection

Q2 Que vient t'il de se passer qui n'est pas classique ?

    Ajoutez l'enregistrement {"name": "titi", "adresses": [ {"rue": "du nain"}, {"rue": "du géant"}]}

Q3 Que vient t'il de se passer à nouveau ?




# Extension
Comment faire pour éviter les jointures du modèle relationnelle dans mongo ?
Vous pouvez faire le même exercice avec ElasticSearch...
