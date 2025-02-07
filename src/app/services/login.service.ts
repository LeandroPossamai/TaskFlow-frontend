import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/LoginResponse.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private htppClient: HttpClient) {}

  login(name: string, password: string) {
    return this.htppClient
      .post<LoginResponse>('/login', { name, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
        })
      );
  }
}
