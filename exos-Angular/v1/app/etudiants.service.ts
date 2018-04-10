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
