import { Component, OnInit, Input } from '@angular/core'; // Le décorateur Input est disponible ici

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrls: ['./etudiant-detail.component.css']
})
export class EtudiantDetailComponent implements OnInit {
  @Input() lEtudiant; // L'étudiant ici est transmis du père au fils

  constructor() { }

  ngOnInit() {
  }

}
