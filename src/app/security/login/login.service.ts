import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { NavigationEnd, Router } from "@angular/router";

@Injectable()
export class LoginService {
  user: User;

  constructor(protected http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${MEAT_API}/login`, {
        email: email,
        password: password,
      })
      .do((user) => (this.user = user));
  }

  logout() {
    this.user = undefined;
  }

  handleLogin(path?: string) {
    this.router.navigate(["/login", btoa(path)]);
  }
}
