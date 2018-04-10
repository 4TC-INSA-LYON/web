import { Component, OnInit } from '@angular/core';

let etudiants = [
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
  // lEtudiant = {
  //  id: 1,
  //  nom: 'Stephane'
  // };
  etudiants = etudiants;
  lEtudiant:any;

  onSelect(unEtudiant) {this.lEtudiant = unEtudiant}

  constructor() {

  }

  ngOnInit() { }

}
