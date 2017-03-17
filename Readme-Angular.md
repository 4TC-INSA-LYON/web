Ce sujet de forme TP est le dernier volet de la série comprendre le Web. NodeJs est la première brique des applications dites RealTime javascript. Ce sont des applications qui cherchent à fournir des données aux utilisateurs et réagir dans le temps le plus court par rapport à Internet. C'est le besoin exprimé par des applications comme Facebook, Twitter mais aussi Paypal, Linkedin ou Netflix. Sans ces approches ultra performantes, les utilisateurs ne sont pas suffisamment satisfaits. Nous avons vu qu'une gamme d'approche récente, depuis 2010, repose sur la mise en oeuvre de bases de données dites NoSQl, et de moteur de serveur Web haute performance comme NodeJS ou NGinx. La dernière étape dans cette révolution concerne l'interface utilisateur et l'interactivité.

On peut distinguer trois dates majeures dans l'évolution des interface navigateur.

- Le Web2.0 2000-2006 repose sur des formulaires de saisie, qui sont analysés sur le poste client puis transmis sur un serveur par une requête http,
- En 2006, une bibliothèque générique de traitement JQuery va devenir incontournable. Elle fournit des fonctions non bloquantes de manipulation du DOM et d'interaction avec le serveur distant dans le cadre de la page Web. Cette bibliothèque imposera un standard pour la sélection des éléments d'une page.
    Q1 Dans un navigateur, testez la commande : document.getElementsByTagName("p")
- En 2011, twitter propose bootstrap, un environnement de service de structure de pages, en open-source sur github. Boostrap standardise, les menu, les interactions, les organisations de pages web, les interaction (avec JQuery), l'adaptation aux tailles d'écran, etc. Afin de pouvoir développer rapidement un frontend Web efficace.

On reste encore sur une vision de dépendance forte entre le client Web et le serveur. Une application n'est pas 'autonome' et dépend largement du serveur qui gére les données.

Google, en 2010 propose un framework complet de gestion d'application dans le navigateur. L'idée maitresse d'Angular est d'imaginer une application autonome sur le poste client. Angular est donc une révolution dans l'approche classique du Web, car il considère le navigateur comme un espace d'exploitation d'applications locales.

L'objectif de ce TP est de développer une application AngularJS minimale.

# Avant de démarrer
Vous devez savoir manipuler les grandes lignes de nodejs, avoir compris le mécanisme de programmation d'ordre supérieur et particulièrement de callback dans javascript. Vous devez également maitriser les requêtes http.

Une application angularjs, est servie pas un serveur web. Lorsque l'utilisateur se connecte sur le site, il accède à une page d'accueil qui chargera tous les modules du framework angular, puis l'application utilisateur. La première étape consiste à mettre en place un serveur web simple qui va servir d'une part les fichiers du middleware angular et d'autre part l'application que vous allez développer.

Q1 pouvez-vous donner un définition comparative de framework, librairie, boite à outils ?

# Création de l'environnement back et serveur minimal

    - A la racine de votre répertoire commencez par démarrer un projet npm avec la commande `npm init`
    - Puis installez le module express (avec l'option --save)
    - Créez un répertoire `back` qui contiendra le serveur et un répertoire front qui contiendra la partie cliente. C'est à dire l'application angularjs.
    - Dans le front créez une page html minimale qui affiche 'bonjour', et dans le back configurez votre serveur pour envoyer la page html sur requête du client.
    - Lancer votre serveur et vérifiez que la page est bien servie.

# Ajout d'une route de récupération des modules angular
Par la suite nous allons charger le framework angular dans le navigateur. Il faut donc ajouter une route au serveur permettant au client de récuperer ces différents modules.

De manière arbitraire, nous choisissons la route '/lib' pour pouvoir servir plus tard les modules nécessaires au framework angular.

    - Ajoutez la déclaration de la route 'lib', qui servira le contenu du répertoire ./node_modules qui a du être créé suite à l'installation d'express. Est-ce clair ?
    - Vérifiez que le fichier `./nodes_modules/mime-types/package.json` existe. Comment faites-vous ?
    - Testez que votre navigateur web arrive à charger le fichier. Comment faites-vous ?

A partir de ce point la partie backoffice est prête à livrer les pages de l'application que vous allez développer dans le repertoire front, et les modules de service dont vous allez avoir besoin pour le framework angular dans le repertoire node_modules.

# Installation du framework angular
Angular est donc un framework web installé dans le navigateur lorsqu'on accède à un site web. Il s'agit donc d'un ensemble de script javascript chargé dans une page web initiale qui va mettre à disposition de l'utilisateur une application dite autonome. Cette partie exprime comment charger le framework en mémoire du browser web.

    - Installez le module angular avec la commande 'npm install angular --save'
    - Ajoutez le chargement de ce script dans le body de votre page html avec l'instruction html suivante : <script src="/lib/angular/angular.min.js"></script>. Vérifiez que le module angular.min.js est bien chargé par le navigateur.

Maintenant que la librairie est bien chargée sans erreur dans votre navigateur, vous pouvez déclarer une nouvelle application angularJS dans votre environement. Une application est constituée d'un ensemble de modules. Le module principal décrit votre application. Chaque module doit être chargé explicitement par votre navigateur. Il y a plusieurs manière de faire dans notre exemple :    

    - Déclarez dans votre page html l'utilisation du module BlankApp avec l'instruction suivante : <body ng-app="BlankApp">...
    - Créez un fichier modules.js dans votre front, qui déclare une application 'BlankApp'. La déclaration d'une application est décrit ici. https://docs.angularjs.org/api/ng/function/angular.module
    - Pensez à charger le fichier module.js par votre front.

Chargez votre application. Celle-ci ne fait rien pour l'instant, mais vous devez pouvoir constater le chargement de tous les modules.

# Ajout d'un bouton dans l'interface et traitement angular
Vous allez maintenant ajouter un bouton dans votre interface utilisateur afin de déclencher les interactions.

Nous allons ajouter ce bouton directement dans la page principale après a balise <body> selon la syntaxe suivante `<button ng-click='coucou()'>Clique moi</button>`. Le bouton déclare un attribut ng-click, qui, comme son préfixe l'indique est lié à angular, et comme son nom l'indique va déclencher une action lié au click souris.    

    - Corrigez et relancer votre serveur et votre application web
    - Cliquez sur le bouton

    --> Que se passe t'il ?

Il faut donc maintenant associer le traitement applicatif associé au click sans passer par le serveur web (sinon on serait sur une architecture web2.0). AngularJs est un framework puissant, décomposant les applications dans une approche MVC (Modèle / Vue / Contrôleur). La vue est constituée par la page html, le contrôleur angular est un objet qui va avoir la charge de gérer le modèle de données de la vue et les fonctions de traitement associées. Nous allons donc associer un contrôleur au bouton que vous venez de créer. Corriger votre bouton afin de lui affilier un controller. `<button ng-click='coucou()' ng-controller='unController'>Clique moi</button>`.

    - Corriger et lancer, observer et regarder l'erreur générée.

Vous devez prendre conscience que l'architecture AngularJs est très souple. Vous pouvez associer un contrôler où vous le désirez, il sera valide à partir de sa balise de déclaration. Techniquement cela correspond à l'injection d'une fonction nommée dans le système qui devient utilisable aux sous-composants.

Il faut maintenant déclarer le contrôleur dans votre déclaration d'application et déclarer la fonction coucou() dans ce dernier.
Transformez la déclaration d'application (module.js) par l'appel suivant.

```javascript    
angular.module('BlankApp', [])
.controller('MonController', ['$scope',  function($scope) {
  $scope.coucou = function() { console.log("Hello");}
}]);
```

Que fait exactement l'appel à la fonction controller.
Faisons un tour par les monades...

Rechargez votre page, et cliquez sur le bouton. Avez-vous remarqué que vous n'avez pas relancé le serveur ?
Vous êtes maintenant capable de déclencher une action sous la forme d'une fonction javascript dans le navigateur à partir d'une action sur l'interface utilisateur.

Serez-vous capable d'afficher une donnée issue du contrôleur dans le navigateur.
Pour cela, transformez votre contrôleur pour qu'il maintienne une variable interne 'titre', accessible dans le scope du navigateur, qui représente le titre du bouton par exemple.
Accédez cette variable du contrôleur dans l'interface par l'opérateur {{ }}.

Bravo !!!
Si vous êtes là et que vous avez compris ce que vous venez de faire. Vous avez chargé une application autonome dans le navigateur, qui présente une architecture MVC, entièrement paramétrable. Cette application est initialement chargée par la requête Web de chargement initiale, est complètement couplée à l'interface graphique Web, et est capable de réaliser des exécutions complexes déclenchées par l'utilisateur.

Le génie-logiciel d'une application full-stack web commence maintenant. Comment architecturer une telle application ? ou placer mes controlleur, comment organiser mon code pour le rendre modulable, sans qu'il ne devienne un sac de code ? Comment intégrer des fonctions externes, etc....

# Service bas niveau angular
Afin de structures le code, angular propose dans le bas niveau des 'providers de service'. On peut rapidement indiquer ces fournisseur de services en 2 catégories :    

   - les fournisseurs qui aident à la structuration du code : Service, Factory et Constante. Ils permettent de regrouper des services communs pour les contrôleur. Un contrôler peut demander l'injection d'une Factory pour accéder à une fonction générique commune.
   - Les fournisseurs qui aident à l'intégration dans l'interface utilisateur : Filter, Directive, Component.

Nous allons prendre deux exemples dans ces fournisseurs de service. La factory et le filtre.

## Déclaration d'une Factory pour les sous-requêtes web
On va utiliser une factory pour mettre à disposition une fonction de requête sur le web. On utilise cette factory pour interroger notre site de référence et y récupérer des données.

    - Commencez par ajouter une route /test sur votre backend, qui retourne un simple document json. Relancez votre serveur web et testez que la route fonctionne.
    - Ajoutez la factory suivante à votre module.

```javascript
.factory('WebQuest', ['$http', function($http) {
  return {
    chercheCherche: function() {
      $http.get('http://localhost:3000/test')
      .then(res => {console.log('-->', res)});
    }
  }
}])
```

Que fait-elle (beaucoup de choses à dire)...

    - Vous pouvez maintenant l'injecter dans votre controller et invoquer la fonction chercheCherche() quand vous le voulez.


Mais.... Bravo à nouveau !!!! vous venez de décloisonner votre application qui peut maintenant interroger votre serveur pour synchroniser vos données. Cette synchronisation se fait sans changement de page web (une révolution).

## Le Filter
Le second fournisseur de service que nous allons écrire est le filter. Il permet de traiter un résultat afficher par un filtre. Ceci fonctionne de manière similaire au pipe '|' unix.

    `ls | wc | xargs | cut -d ' ' -f 1` -> que fait cette commande ?
```javascript
.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
})
```

Appliquez ce filtre sur l'affichage du titre avec l'opérateur |.

Vous pouvez maintenant développer une application regroupant les grandes lignes d'angularJS. Une des forces d'angular est d'intégrer facilement des modules développer par des tièrces parties. Dans ce dernier exercice nous allons restructurer l'application afin d'utiliser des composants angular et un module externe de routage dans l'application ui-router.
Ces deux modification permettent de structurer l'application que vous développez en services autonome.

# Extraction du composant
Un composant angular, est un répertoire qui déclare la structure d'une balise html. Elle déclare donc le controleur et la vue associé à la directive.
Remplacez la directive déclarant votre bouton par une nouvelle directive.

`<toto></toto>` par exemple, et chargez dans la page index.html la déclaration de la directive avec l'instruction suivante :
`<script src='root/root.js'></script>`
Votre index.html, doit ressemble à cela :    
```html
<html>
  <body ng-app="BlankApp">
    <root></root>
    <script src="/lib/angular/angular.min.js"></script>
    <script src="modules.js"></script>
    <script src="root/root.js"></script>
  </body>
</html>
```

Voici la déclaration du fichier root/root.js
```javascript
angular.module('BlankApp').component('root', {
   templateUrl: 'root/root.html',
   controller: ['$scope', 'WebQuest', function($scope, WebQuest) {
     $scope.coucou = function() {
       console.log("Hello");
       WebQuest.call(); }
     $scope.titre = "Bonjour maman";
   }]
})
```

Rechargez votre client et controller que cela fonctionne comme avant.
Qu'avez-vous fait ?

# Utilisation du module ui-router.
https://github.com/angular-ui/ui-router/tree/legacy

Le module externe ui-router, est un outil de gestion des routes locales à l'application. Tout comme il existe des routes pour accéder aux services Web distant en référence aux routes REST par exemple. Une application front angularjs, peut présenter des routes de navigation à l'utilisateur lorsqu'il change de page. AngularJS fourni un routeur de base de qualité médiocre. ui-router est un module avancé pour la gestion des routes angular.

Avant d'utiliser ui-router, vous allez déclarer un nouveau composant simple coucou qui affiche un texte.    
    - A partir de ce que vous savez du composant 'root', réalisez un composant 'toto' qui affiche 'foo'.
    - Testez ce composant en remplaçant l'appel à <root></root>, tout en conservant le reste, dans la page principale par <toto></toto> et vérifiez qu'il fonctionne.

Maintenant vous allez réaliser le routage entre root et toto

    - installer par npm le module ngular-ui-router@1.0.0-rc.1 --save
        !! Attention à la version
    - chargez le script angular-ui-router dans le navigateur avec la balise suivante
    `<script src="/lib/angular-ui-router/release/angular-ui-router.min.js"></script>`
    - remplacez <toto></toto> dans votre document principal par la directive générique <ui-view></ui-view>. A partir de maintenant, votre ui-routeur peut remplacer ui-view, par un composant en fonction de la route choisie.
    - Déclarer la route suivante dans le fichier de description de l'application    

```javascript
angular.module('BlankApp', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
  .state(
    'home'
  ,
    {
      url: '/',
      component: 'root'
    }
  )
})
```

- Cherchez la page localhost:3000/#!/.

Si la page s'affiche normalement, vous pouvez maintenant déclarer une nouvelle route 'toto', vers toto, qui est déclanchée sur le click dans un autre bouton avec la directive ui-sref='toto'.
1) Ajouter la route et testez l'état
2) Ajouter un parametre de la directive ui-sref qui pointe vers le nouvel etat dans un bouton de la page root.html

----
Si vous êtes arrivez-là et que vous avez tout compris, vous avez le niveau pour comprendre angularjs.

Vous pouvez maintenant partir sur les interfaces graphiques comme material-design  et utiliser le module angular-material pour avoir accès à des outils d'interface graphique avancée.   https://material.angularjs.org/latest/

Vous pouvez également courir apprendre typeScript et basculer soit sur Angular 2, soit sur ReactJS qui sont les versions suivantes de ces architectures. Elles apportent une simplification pour le programmeur et une vision encore plus applicative d'une application sur le client Web. Mais si vous avez compris cette série de td/tp sur Javascript vous êtes capable de développer des applications très hautes performances pour le Web.
