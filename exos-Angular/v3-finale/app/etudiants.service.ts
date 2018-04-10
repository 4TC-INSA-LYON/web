import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EtudiantsService {

  getEtudiants() {
    return this.http.get('http://localhost:3000/user')
  }

  constructor(private http: HttpClient) { }

}
