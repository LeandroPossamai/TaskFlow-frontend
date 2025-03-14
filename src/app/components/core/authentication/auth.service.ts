import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

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

  login(credentials: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const body = {
      username: credentials.username,
      password: credentials.password,
    };

    return this.http.post(this.urlApi + '/login', body, { headers }).pipe(
      map((response: any) => {
        console.log(response);
        // Verifica a estrutura da resposta que vem do backend
        if (response && response['acessToken']) {
          console.log('Token recebido');
          if (localStorage['loginstatus'] != 'loggedin') {
            if (!localStorage['loginstatus']) {
              localStorage['loginstatus'] = '';
            }
            localStorage['loginstatus'] = 'loggedin';
          }
          const encryptToken = response['acessToken'];
          const expiresIn = response['expiresIn'];

          // Armazena o token e a data de expiração no localStorage
          localStorage.setItem('token', encryptToken);
          console.log(encryptToken);
          localStorage.setItem('expires_in', expiresIn.toString());
          localStorage.setItem('loginstatus', 'loggedin');

          // Redireciona para o dashboard ou outra página
          this.router.navigate(['/dashboard-admin']);

          return response;
        }

        // Se não encontrar o token, exibe um erro
        this.notification.warning(
          'Login inválido',
          'Usuário ou senha inválidos'
        );
        return response;
      }),
      catchError((error) => {
        this.notification.warning(
          'Login inválido',
          'Usuário ou senha inválidos'
        );
        return of(error);
      })
    );
  }

  logout() {
    localStorage.removeItem('loginstatus');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_in');
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
    const token = localStorage.getItem('token');
    if (!token) return null;
    return this.jwtHelper.decodeToken(token);
  }
}
