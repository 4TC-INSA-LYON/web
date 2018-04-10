Ce sujet de forme TP est le dernier volet de la série comprendre le Web. NodeJs est la première brique des applications dites RealTime javascript. Ce sont des applications qui cherchent à fournir des données aux utilisateurs et réagir dans le temps le plus court. C'est le besoin exprimé par des applications comme Facebook, Twitter mais aussi Paypal, Linkedin ou Netflix. Sans ces approches ultra performantes, les utilisateurs ne sont pas suffisamment satisfaits. Nous avons vu qu'une gamme d'approches récentes, depuis 2010, repose sur la mise en oeuvre de bases de données dites NoSQl, et de moteur de serveur Web haute performance comme NodeJS ou NGinx. La dernière étape dans cette révolution concerne l'interface utilisateur et l'interactivité.

![Learning curve d'AngularJS](http://www.bennadel.com/resources/uploads/2013/feelings_about_angularjs_over_time.png "Angular Learning Curve")

On peut distinguer trois dates majeures dans l'évolution des interface navigateur.

- Le Web2.0 2000-2006 repose sur des formulaires de saisie, qui sont analysés sur le poste client puis transmis sur un serveur par une requête http,
- En 2006, JQuery, une bibliothèque générique de traitement devient la référence. Elle fournit des fonctions non bloquantes de manipulation du DOM et d'interaction avec le serveur distant dans le cadre de la page Web. Cette bibliothèque imposera un standard pour la sélection des éléments d'une page.
    Q1 Dans un navigateur, testez la commande : document.getElementsByTagName("p")
- En 2011, twitter propose bootstrap, un environnement de service de structure de pages, en open-source sur github. Boostrap standardise, les menu, les interactions, les organisations de pages web, les interaction (avec JQuery), l'adaptation aux tailles d'écran, etc. Afin de pouvoir développer rapidement un frontend Web efficace.

On reste encore sur une vision de dépendance forte entre le client Web et le serveur. Une application n'est pas 'autonome' et dépend largement du serveur qui gère les données.

Google, en 2010 propose un framework complet de gestion d'application dans le navigateur. L'idée maitresse d'Angular est d'imaginer une application autonome sur le poste client. Angular est donc une révolution dans l'approche classique du Web, car il considère le navigateur comme un espace d'exploitation d'applications locales.

L'objectif de ce TP est de développer une application Angular minimale.

# Avant de démarrer
Vous devez savoir manipuler les grandes lignes de nodejs, avoir compris le mécanisme de programmation d'ordre supérieur et particulièrement de callback dans javascript. Vous devez également maitriser les requêtes http.

Une application angularjs, est servie pas un serveur web. Lorsque l'utilisateur se connecte sur le site, il accède à une page d'accueil qui chargera tous les modules du framework angular, puis l'application utilisateur sous la forme de scripts. La première étape consiste à mettre en place un serveur web simple qui va servir d'une part les fichiers du middleware angular et d'autre part l'application que vous allez développer.

Q1 pouvez-vous donner un définition comparative de framework, librairie, boite à outils ?

# Préparation du backoffice 20min
On repart des tp précédents. Voici la liste des instructions pour démarrer votre backoffice.

1. Préparer votre moteur de base de données avec vos données

```bash
mkdir -p /tmp/projet/back
cd /tmp/projet/back

// Moteur
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.2.7.tgz
tar zxvf mongodb-linux-x86_64-3.2.7.tgz
mkdir base
/tmp/projet/back/mongodb-linux-x86_64-3.2.7/bin/mongod --dbpath /tmp/projet/base

// Importation données
wget https://github.com/4TC-INSA-LYON/web/blob/master/dump.tgz?raw=true -O dump.tgz
tar zxvf dump.tgz
mongorestore --noIndexRestore --drop dump/
```

A partir d'ici vous pouvez tester votre gestion de données.
```bash
/tmp/projet/back/mongodb-linux-x86_64-3.2.7/bin/mongo
> db.users.find().count()
20
```

2. Installation du serveur express

```bash
wget https://raw.githubusercontent.com/4TC-INSA-LYON/web/master/exos-Express/package.json
wget https://raw.githubusercontent.com/4TC-INSA-LYON/web/master/exos-Express/index.js
npm install
node
```
Vous pouvez tester en chargeant la page `http://localhost:3000/user`

Votre backoffice web est prêt.
Laissez vos deux process tourner en tâche de fond.

# LE SUJET DEMARRE ICI
Allez à la racine de votre projet
```bash
cd /tmp/projet
```

 Angular fournit maintenant un CLI pour manipuler l'environnement. Vous allez commencer par créer un espace pour votre application.

Installation du CLI angular
```bash
npm install -g @angular/cli
```

Préparation d'un environnement minimal pour votre application
```bash
ng new tpweb
```

Une fois votre environnement créé, votre première application Angular peut être lancée.
```bash
cd tpweb
ng serve --open
```

# Modification d'une valeur affichée
Si tout se passe bien, vous voyez une page d'accueil sans avoir écrit une seule ligne de code. Angular propose une approche à composants pour architecturer des applications dans le navigateur. Lorsque vous démarrez un nouveau projet le composant initial est dans le répertoire `src/app`.

Modifiez le fichier `app.compent.ts` pour adapter l'attribut `title` sur une autre valeur texte.

Prenez 10 min pour bien comprendre ce qui se passe ici.

# Création d'un composant 'etudiants'
Le cli angular vous permet d'ajouter facilement un composant dans votre application. Notre application générale veut afficher une liste d'étudiants. En première approche nous allons créer un composant affichant un simple étudiant.

`ng generate component etudiants`.
Observez les fichiers créés après cet appel. De quoi est constitué un composant javascript ?
Une valeur importante à connaitre est l'attribut `selector` du fichier de description du composant. Cet attribut indique le nom du composant pour pouvoir le nommer dans les pages html qui veulent l'insérer.

    Modifiez la page principale pour afficher
    le composant étudiants.

    Pour afficher un composant, il suffit d'appeler son _selecteur_.
       <app-xxx></app-xxx>

# Afficher une donnée issue du composant
En vous inspirant de l'affichage du titre `{{app}}` ajoutez une valeur de type _string_ dans le fichier `etudiants.component.ts` et utilisez-là dans le fichier `etudiants.component.html`.

# Déclaration d'une structure
Votre étudiant est certainement plus complexe. Il a un nom, un identifiant, etc.
Une structure d'étudiant pourrait être :

```javascript
etudiant = {
  nom: 'Stéphane',
  id: 1
}
```

Essayez maintenant d'afficher les éléments de cette structure.

# Vous pouvez filtrer l'affichage
Que se passe t'il si vous faites {{etudiant.nom | uppercase}}`

Le `|` est un outil bien connu des Unixiens. Il permet d'enchaîner des traitements de manipulation d'une sortie vers une entrée.

`ls | wc | xargs | cut -d ' ' -f 1`
-> que fait cette commande ?

Dans le cas d'angular un ensemble de filtre est fourni par défaut pour traiter les affichages : dates, nombres, chaînes.

# Liaison dans les deux sens
Pour l'instant vous êtes capables de définir une variable dans un script, ici `typescript`, qui est utilisé dans l'interface utilisateur avec l'opérateur `{{ }}`, appelé _moustache moustache_ !!. Il faut maintenant également pouvoir récupérer une donnée saisie dans l'interface web qui mette à jour la variable interne.

Avant de pouvoir l'utiliser dans votre code, il faut indiquer au framework que vous allez utiliser le module de gestion de formulaires. Vous devez ajouter dans le fichier `app.modules.ts` les deux instructions suivantes pour importer `FormsModule`.

```ts
import { FormsModule } from '@angular/forms';
imports: [
  BrowserModule,
  FormsModule
],
```

Normalement, il n'y a aucune modification à la suite de cet import. Vous pouvez vérifier dans votre console de lancement et votre console javascript du navigateur.

Vous pouvez maintenant ajouter une zone de saisie à la suite de l'affichage du nom de l'étudiant.

```html
<div>
    <label>nom:
      <input [(ngModel)]="etudiant.nom" placeholder="nom">
    </label>
</div>
```

Vous pouvez vérifier que la saisie fonctionne, car l'affichage de la donnée se fait juste au dessus. Nous sommes bien sur une liaison de données qui va dans les deux sens. IHM -> Code -> IHM. Ceci s'appelle le _two way binding_.

# Passons à une liste d'étudiants
Nous allons simuler une liste d'étudiants en remplaçant l'étudiant par une liste. Pour des questions de simplification du code pour la suite, je vous suggère de 'sortir' la liste du composant. Vous devriez avoir le code suivant.

```ts
import { Component, OnInit } from '@angular/core';

let ETUDIANTS = [
  { id: 11, nom: 'Mr. Nice' },
  { id: 12, nom: 'Narco' },
  { id: 13, nom: 'Bombasto' },
  { id: 14, nom: 'Celeritas' },
  { id: 15, nom: 'Magneta' },
  { id: 16, nom: 'RubberMan' },
  { id: 17, nom: 'Dynama' },
  { id: 18, nom: 'Dr IQ' },
  { id: 19, nom: 'Magma' },
  { id: 20, nom: 'Tornado' }
];

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants = ETUDIANTS;
  ...
}
```

La visualisation des éléments de cette liste peut se faire en utilisant la directive de répétition d'angular `*ngFor`.

Elle s'utilise dans des constructions de type `<ul><li>...<li></ul>`

Vous pouvez maintenant afficher la liste des étudiants. Mais attention...

```html
<h2>Mes étudiants</h2>
<ul>
  <li *ngFor='let etudiant of etudiants'>
    <span>{{etudiant.id}}</span> {{etudiant.nom}}
  </li>
</ul>
```

L'affichage de la liste ne s'effectue pas bien, car il n'y a pas d'étudiant unique à afficher. Corrigez le code pour ne pas avoir d'erreur.

# Action sur un click
La dernière chose à gérer au niveau de l'interface utilisateur est le _click_ sur un élément de la liste. Pour cela, vous allez utiliser la liaison sur l'événement _click_ sur la balise `<li>`. La forme de cette action est la suivante : `<li *ngFor='let etudiant of etudiants' (click)='onSelect(etudiant)'>`. Dans cette expression le _click_ invoquera la méthode `onSelect` de votre code.
Lorsque vous cliquez sur un élément de la liste une action est alors générée dans le code.

# Affichage conditionnel
Vous pouvez éviter d'initialiser un étudiant, en conditionnant l'affichage d'un élément de la liste avec l'instruction angular `*ngif`.

Votre code html devrait ressembler à cela.
```html
<h2>Mes étudiants</h2>
<ul>
  <li *ngFor='let etudiant of etudiants' (click)='onSelect(etudiant)'>
    <span>{{etudiant.id}}</span> {{etudiant.nom}}
  </li>
</ul>

<div *ngIf='lEtudiant'> <!-- la div n'est pas dans le DOM -->
  {{lEtudiant.nom | uppercase}}
  <div>
      <label>nom:
        <input [(ngModel)]="lEtudiant.nom" placeholder="nom">
      </label>
  </div>
</div>
```

**Vous êtes arrivé à la v0 de votre code**

# Création d'un sous-composant
Dans les approches à composants, un des objectifs est de décomposer le plus possible les éléments en sous-composants. Dans notre cas, la liste des étudiants peut être séparée d'un étudiant unitaire. Quand on sépare des éléments, le seul point dur à garder en tête est l'échange d'information entre les deux composants père et fils.

Voici les étapes pour obtenir le code décomposé.

1. Créer le sous composant 'detail-etudiant' en utilisant le CLI.
`ng generate component detail-etudiant`.

2. Séparez les templates d'affichage entre le composant parent et le composant détail. Vérifier que vous pouvez utiliser le composant détail, bien que les données ne sont pas transférées entre le parent et le fils.

Il faut maintenant s'occuper du transfert de données entre les deux composants.
Du coté du parent, il faut indiquer la variable transmise selon la syntaxe suivante.

```html
<selecteur [variableDansLeFils]='variableDansLePere'></selecteur>
<app-detail-etudiant [lEtudiant]='lEtudiant'></app-detail-etudiant>
```
Si vous faites cela uniquement, vous obtiendrez une erreur, car le composant fils ne sait pas quoi faire de cette valeur transmise. Il faut explicitement lui déclarer la récupération de cette variable. Cela se fait par l'utilisation d'un décorateur `Input` dans la déclaration du composant.

```ts
import { Component, OnInit, Input } from '@angular/core'; // Le décorateur Input est disponible

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrls: ['./etudiant-detail.component.css']
})
export class EtudiantDetailComponent implements OnInit {
  @Input() lEtudiant; // L'étudiant ici est transmis du père au fils

  constructor() { }
  ngOnInit() { }
}
```

# Création d'un service de données
Dans cette partie nous verrons qu'Angular ne sert pas qu'à créer des composants. Vous avez vu qu'il existe des filtres (sisi, c'est avant). Vous pouvez également créer des services. Un service est un objet javascript qui est 'injecté' dans les composants que vous voulez. Par exemple, une bonne conception est de grouper les services d'accès aux données dans des services angular.

1. Création du pattern de service initial
`ng generate service etudiants`

Observez les fichiers générés.

Angular repose sur le principe d'injection de dépendances. Par exemple, vous pouvez demander de vous faire injecter le service etudiants où vous le désirer.

2. Pour cela, il faut le déclarer dans les fournisseurs de l'application. Dans le fichier `app.modules.ts`, dans la partie provider
`providers: [EtudiantsService],...`. Attention, il peut y avoir beaucoup d'erreur de syntaxe. Vérifiez que le service est bien injecté, en vérifiant que la console ne sort pas d'erreur.

3. Préparons le service

Votre service d'Etudiants doit ressembler à cela.
```ts
import { Injectable } from '@angular/core';

@Injectable()
export class EtudiantsService {

  getEtudiants() {
    return [
      { id: 11, nom: 'Mr. Nice' },
      { id: 12, nom: 'Narco' },
      { id: 13, nom: 'Bombasto' },
      { id: 14, nom: 'Celeritas' },
      { id: 15, nom: 'Magneta' },
      { id: 16, nom: 'RubberMan' },
      { id: 17, nom: 'Dynama' },
      { id: 18, nom: 'Dr IQ' },
      { id: 19, nom: 'Magma' },
      { id: 20, nom: 'Tornado' }
    ];
  }
  constructor() { }
}
```

Pensez à sauvegarder et vérifier votre console.

4. Utilisons le service
```ts
import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../etudiants.service'

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants = [ ];
  lEtudiant:any;

  onSelect(unEtudiant) { this.lEtudiant = unEtudiant}

  getEtudiants(): void {
    this.etudiants = this.etudiantsService.getEtudiants();
  }

  constructor(private etudiantsService: EtudiantsService) { }

  ngOnInit() { this.getEtudiants(); }
}
```
Où est injecté le service ?
Quel appel utilise le service ?

Normalement à cette étape vous devriez avoir le même fonctionnement que précédemment. ** Vous êtes à la v1 (cf github) du logiciel.**
  - l'approche à composants est bonne.
  - Vous avez 2 composants et 1 service.
  - Vous savez définir un composant et l'accrocher aux autres.
  - Vous savez définir un service et l'injecter dans le système.

Il vous manque encore l'accès à un système extérieur asynchrone comme un site web.


# Observable et programmation asynchrone
L'appel à la fonction `getEtudiants` du service `Etudiants` est synchrone. Cela fonctionne pour les tests, mais n'est pas viable dans un environnement réel. Vous devez modifier votre utilisation du service pour qu'il devienne asychrone. Pour ceci, vous pouvez passer par des _callbacks_, des _promesses_ ou des objets _Observables_. Dans notre exemple de code, nous allons passer par des observables qui font partie d'une des approches standards de la programmation reactive. http://reactivex.io/rxjs/

1. Dans votre service, vous allez renvoyer un observable en ajoutant les appels suivants.
```ts
import { of } from 'rxjs/observable/of'
...
  getEtudiants() {
    return of([
      { id: 11, nom: 'Mr. Nice' },
      ...
      ]);
  }
  ...
}
```

2. Un observable ressemble à une promesse. Il s'agit d'un objet qui dans le futur possèdera une valeur à observer. Pour en être notifié, il faut s'y abonner. Remplacez dans l'invocation du service, l'utilisation de cette objet Observable avec le code suivant.

```javascript
getEtudiants() {
  this.etudiantsService.getEtudiants()
    .subscribe(etudiants => this.etudiants = etudiants)
}
```

Normalement vous devriez faire un parallèle simple avec la notion de promesse.

Vérifiez bien que votre application fonctionne toujours.
** Vous en êtes à la v2. **

# Intégration au serveur de données
Vous vous souvenez qu'un serveur tourne ? Pouvez-vous vérifier qu'il fonctionne encore ? Vous allez maintenant, récupérer la liste des étudiants à partir de la base de données de test. Pour cela vous allez injecter le service HttpClientModule dans le système, l'utiliser à partir du service Etudiants et ce sera fini.

1. Déclaration de l'utilisation du service HttpClientModule
- Dans le fichier de déclaration de l'application `AppModule` :
- Importez le symbole `HttpClientModule` issu du fichier `@angular/common/http`.
- Ajoutez le symbole dans le tableau `@NgModule.imports`.

Vérifiez que votre application compile toujours.

2. Dans le code du service d'accès aux étudiants, il faut
- Injecter le service angular httpClient
- Utiliser la fonction get, qui fabriquera l'Observable
Le code de `etudiants.service.ts` ressemble à :

```ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EtudiantsService {

  getEtudiants() {
    return this.http.get('http://localhost:3000/user')
  }
  constructor(private http: HttpClient) { } //Injection
}
```

3. Débuggez
Quels sont les points de bugs recontrés ?


Vous avez fini la v3 également disponible en ligne. Normalement vous avez une chaine MEAN de bout en bout.

----

Ce que je n'ai pas dit.
- Mécanique de test unitaires et E2E
- Routage d'interface
- Service, pipe, filter, composant : il existe quelques autres services dans angular.
- TypeScript, typage...

----
Pour aller plus loin  

https://angular.io/guide/quickstart

https://hackernoon.com/angular-vs-react-the-deal-breaker-7d76c04496bc#.qv6ov83cb

https://hackernoon.com/100-free-resources-to-learn-full-stack-web-development-5b40e0bdf5f2
