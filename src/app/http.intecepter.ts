import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class HttpAppInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    public setToken(request: HttpRequest<any>): HttpRequest<any> {
        let req: HttpRequest<any>;
        const token: any = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        req = request.clone({ headers: request.headers.set('access-token', token) });
        return req;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.setToken(request))
            .pipe(
                catchError((error: any) => {
                    if (error instanceof HttpErrorResponse) {
                        switch ((error as HttpErrorResponse).status) {
                            case 401:
                                this.router.navigate(['/login']);
                                break;
                            case 403:
                                this.router.navigate(['/login']);
                        }
                    }
                    return throwError(error);
                })
            ) as Observable<HttpEvent<any>>;
    }
}
