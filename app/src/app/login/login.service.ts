import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private postUserUrl = 'http://localhost:5000/api/auction/adduser';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  adduser(username: string): Observable<any> {
    return this.http.post(this.postUserUrl, {"username": username}, this.httpOptions);
  }

}
