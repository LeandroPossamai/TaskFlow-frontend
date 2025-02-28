import { SplitterModule } from 'primeng/splitter';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [SplitterModule, RouterModule, AvatarModule],
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent {
  constructor(private router: Router) {}

  logout() {
    // Removendo o token do localStorage
    localStorage.removeItem('token');
    // Redirecionando para a página de login
    this.router.navigate(['/login']);
  }
}
