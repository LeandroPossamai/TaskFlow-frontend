import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando RouterModule
import { routes } from './app.routes'; // Importando o arquivo de rotas
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule], // Importando o RouterModule aqui
  template: `
    <router-outlet></router-outlet>
    <!-- Onde as rotas serão carregadas -->
  `,
})
export class AppComponent {}
