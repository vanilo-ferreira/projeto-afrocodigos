import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseCollaborators } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://x8ki-letl-twmt.n7.xano.io/api:T9s4xK7V/collaborators';

  constructor(private http: HttpClient) {}

  getCollaborators(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
