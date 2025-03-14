import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  criarUsuarios(novoUsuario: any): Observable<any> {
    // Recuperando o token de autenticação
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    // Enviando o POST para criar o novo usuário
    return this.http.post(this.url + '/users', novoUsuario, { headers });
  }

  receberUsuarios() {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(this.url + '/users', { headers: headers });
  }
}
