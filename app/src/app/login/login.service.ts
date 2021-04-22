import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private postUserUrl = 'http://localhost:5000/api/auction/adduser';
  private containsUserUrl = 'http://localhost:5000/api/auction/containsuser';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  adduser(username: string): Observable<any> {
    return this.http.post(this.postUserUrl, {"username": username}, this.httpOptions);
  }

  containsUser(username: string): Observable<{containsuser: boolean, name: string}> {
    return this.http.get<{containsuser: boolean, name: string}>(this.containsUserUrl + "/?username=" + username);
  }

}
