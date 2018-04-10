import { TestBed, inject } from '@angular/core/testing';

import { EtudiantsService } from './etudiants.service';

describe('EtudiantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtudiantsService]
    });
  });

  it('should be created', inject([EtudiantsService], (service: EtudiantsService) => {
    expect(service).toBeTruthy();
  }));
});
