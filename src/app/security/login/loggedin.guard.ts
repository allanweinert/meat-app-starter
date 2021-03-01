import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoggedinGuard implements CanLoad {

    constructor(private loginService: LoginService){}

    canLoad(route: Route): boolean {
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){
            this.loginService.handleLogin(`/${route.path}`)
        }
        return loggedIn
    }

}