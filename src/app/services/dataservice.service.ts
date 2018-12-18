import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activite } from '../models/activite';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  //Activities Methods
  public getAllActivites(): Observable<Activite[]> {
    return this.httpClient.get<Activite[]>('http://localhost:8080/citycrunch/activites/all?page=0&size=12&sort=dateActivite,desc');
  }
  //Get Activities 'On a testé'
  public getTestedActivities(): Observable<Activite[]> {
    return this.httpClient.get<Activite[]>('http://localhost:8080/citycrunch/activites/nom=On%20a%20test%C3%A9?page=0&size=4&sort=dateActivite,desc');
  }
  //Get Activities in a Category
  public getActivitesByTag(idTag: number): Observable<Activite[]> {
    return this.httpClient.get<Activite[]>('http://localhost:8080/citycrunch/activites/tag='+idTag);
  }
  //Get One Activity by its Id
  public getOneActivite(idActivite: number): Observable<Activite> {
    return this.httpClient.get<Activite>('http://localhost:8080/citycrunch/activites/'+idActivite);
  }
  //Get user Suggestions
  public getUserSuggestions(): Observable<Activite[]> {
    return this.httpClient.get<Activite[]>('http://localhost:8080/citycrunch/activites/sugg/user=1');

  }


  //Tags Methods
  public getAllTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>('http://localhost:8080/citycrunch/tags/all');
  }

  public getOneTag(idTag: number): Observable<Tag> {
    return this.httpClient.get<Tag>('http://localhost:8080/citycrunch/tags/'+idTag);
  }

}
