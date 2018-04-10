import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EtudiantDetailComponent } from './etudiant-detail/etudiant-detail.component';

import { EtudiantsService } from './etudiants.service';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    EtudiantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EtudiantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
