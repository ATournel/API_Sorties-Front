import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Tag } from '../models/tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) { }
  
  //Sign Up User
  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/citycrunch/signup', user);
  }

  
  //Sign In User
  public signUser(user: User): Observable<boolean> {
   return this.httpClient.post<boolean>('http://localhost:8080/citycrunch/signin', user);
  }

  //Get User
  public getUser(mailUser: String): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8080/citycrunch/'+mailUser);
  }

  //Get Connected User
  public getConnectedUser(): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8080/citycrunch/profil/1');
  }

  //Get user tag list
  public getUserTagList(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>('http://localhost:8080/citycrunch/profil/1/tags');
  }

  //Delete a tag from User's list
  public deleteUserTag(idTag: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/citycrunch/profil/1/delete/'+idTag);
  }

  //Add a tag to a User's list
  public addUserTag(idTag: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/citycrunch/profil/1/add/'+idTag);
  }
}
