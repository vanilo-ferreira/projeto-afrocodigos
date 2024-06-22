import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestUpdate, ResponseCollaborator, ResponseUpdateCollaborator } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://x8ki-letl-twmt.n7.xano.io/api:T9s4xK7V/collaborators';

  constructor(private http: HttpClient) {}

  getCollaborators<T>(): Observable<T> {
    return this.http.get<T>(this.url);
  }

  createCollaborators<T>(body: any): Observable<T> {
    return this.http.post<T>(this.url, body);
  }

  getCollaborator(id: string): Observable<ResponseCollaborator> {
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseCollaborator>(_url);
  }

  updateCollaborator(id: string, body:RequestUpdate): Observable<ResponseUpdateCollaborator>  {
    const _url = `${this.url}/${id}`;

    return this.http.put<ResponseUpdateCollaborator>(_url, body);
  }

  deleteCollaborator(id: string): Observable<any>  {
    const _url = `${this.url}/${id}`;

    return this.http.delete<any>(_url);
  }
}
