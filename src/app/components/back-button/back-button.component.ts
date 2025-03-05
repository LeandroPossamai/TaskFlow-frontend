// back-button.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {
  constructor(private router: Router) {}

  voltarParaDashboard() {
    this.router.navigate(['/dashboard-admin']);
  }
}
