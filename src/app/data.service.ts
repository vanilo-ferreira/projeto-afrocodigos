import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://x8ki-letl-twmt.n7.xano.io/api:T9s4xK7V/collaborators';

  constructor(private http: HttpClient) {}

  getCollaborators<T>(): Observable<T> {
    return this.http.get<T>(this.url);
  }
}
