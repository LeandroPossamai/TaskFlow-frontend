import { AppComponent } from './../../../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  urlApi = environment.apiUrl;
  timer: any;
  acesso: any;
  acessover: any;

  login(credentials: any) {
    let header: any = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    let body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    return this.http
      .post(
        this.urlApi + '/authentication/authenticate_user',
        body.toString(),
        {
          headers: header,
        }
      )
      .pipe(
        map((response) => {
          let result: any = response;
          if (result && result['access_token']) {
            if (localStorage['loginstatus'] != 'loggedin') {
              if (!localStorage['loginstatus']) {
                localStorage['loginstatus'] = '';
              }
              localStorage['loginstatus'] = 'loggedin';
            }
            let encryptToken = result['access_token'];
            localStorage.setItem('token', encryptToken);
            this.router.navigate(['/dashboard']);
            // // // console.log(response)
            return response;
          }
          // // // console.log(response)
          return response;
        }),
        catchError((error) => {
          this.notification.warning(
            'Login invalido',
            'usuario ou senha invÃ¡lidos'
          );
          return of(error);
        })
      );
  }

  logout() {
    localStorage.removeItem('loginstatus');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    // remove token if cookie not set
    if (localStorage['loginstatus'] != 'loggedin') {
      localStorage.removeItem('token');
    }

    let token: any = localStorage.getItem('token');

    if (!token) return false;

    let expirationDate = this.jwtHelper.getTokenExpirationDate(token);
    let isExpired = this.jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  get currentUser() {
    let token: any = localStorage.getItem('token');
    if (!token) return null;
    return this.jwtHelper.decodeToken(token);
  }
}
