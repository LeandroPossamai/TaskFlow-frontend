import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LancarHorasComponent } from './pages/lancar-horas/lancar-horas.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { AtividadeComponent } from './pages/atividade/atividade.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { AuthGuardService } from './components/core/authentication/auth-guard.service';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: '',
    children: [
      {
        path: 'dashboard-admin',
        component: DashboardAdminComponent,
      },
      {
        path: 'projetos',
        component: ProjetosComponent,
      },
      {
        path: 'relatorios',
        component: RelatoriosComponent,
      },
      {
        path: 'atividade', // Rota para a página de atividades
        component: AtividadeComponent, // Componente que será renderizado
      },

      {
        path: 'lancar-horas',
        component: LancarHorasComponent,
      },
      {
        path: 'cad-users',
        component: UserRegistrationComponent,
      },
    ],
    canActivate: [AuthGuardService],
  },
];
