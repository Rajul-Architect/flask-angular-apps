import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private httpClient: HttpClient) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return (new Promise(res => {
            this.httpClient.get(environment.loginUrl).subscribe(
                (active) => {
                    res(true)
                },
                (error) => {
                    this.router.navigateByUrl('/login');
                    res(false);
                }
            );
        }));
    }
}
