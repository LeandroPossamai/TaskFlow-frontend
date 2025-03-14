import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private url = environment.apiUrl;

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: any, state: RouterStateSnapshot) {
    console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
