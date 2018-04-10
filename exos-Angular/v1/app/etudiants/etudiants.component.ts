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

  constructor(private etudiantsService: EtudiantsService) {

  }

  ngOnInit() {
    this.getEtudiants();
  }

}
