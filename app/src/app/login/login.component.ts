import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  error: "none" | "wrong-username" | "no-username" = "none";

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onKey(event): void {
    this.error = "none";
    this.username = event.target.value;
  }

  async onLogin(): Promise<void> {
    if (this.username === "") {
      this.error = "no-username";
      return;
    }

    this.loginService.containsUser(this.username).subscribe(response => {
      if (!response.containsuser) {
        this.loginService.adduser(this.username).subscribe(x => { console.log("Added user: " + this.username)});
        this.router.navigate(["/licit", { name: this.username }]);
      } else {
        this.error = "wrong-username";
      }
    });
  }

}
