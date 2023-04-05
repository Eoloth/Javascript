import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Project } from '../models/project';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando el servicio de Angular';
  }

  saveProject(project: Project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'save-project', params, {
      headers: headers,
    });
  }

  getProjects(id: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'projects', { headers: headers });
  }

  getProject(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'project/' + id, { headers: headers });
  }
}
