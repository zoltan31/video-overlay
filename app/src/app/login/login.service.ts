import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsernameService } from '../username.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private postUserUrl = 'http://35.234.121.57/api/auction/adduser';
  private containsUserUrl = 'http://35.234.121.57/api/auction/containsuser';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private usernameService: UsernameService
  ) { }

  adduser(username: string): Observable<any> {
    this.usernameService.username = username;
    return this.http.post(this.postUserUrl, {"username": username}, this.httpOptions);
  }

  containsUser(username: string): Observable<{containsuser: boolean, name: string}> {
    return this.http.get<{containsuser: boolean, name: string}>(this.containsUserUrl + "/?username=" + username);
  }

}
