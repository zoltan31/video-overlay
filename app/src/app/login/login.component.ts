import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  error: "none" | "wrong-username" | "no-username" = "none";

  constructor(
    private router: Router
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

    const usernameIsFree = /* TODO: Here comes the HTTP call */ true;
    if (usernameIsFree) {
      this.router.navigate(["/licit", { name: this.username }]);
    } else {
      this.error = "wrong-username";
    }
  }

}
