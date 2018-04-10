import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDetailComponent } from './etudiant-detail.component';

describe('EtudiantDetailComponent', () => {
  let component: EtudiantDetailComponent;
  let fixture: ComponentFixture<EtudiantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
