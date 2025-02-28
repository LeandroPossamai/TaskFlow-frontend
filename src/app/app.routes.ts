import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LancarHorasComponent } from './pages/lancar-horas/lancar-horas.component';
import { TesteComponent } from './pages/teste/teste.component';
import { AtividadesComponent } from './pages/atividade/atividade.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'teste',
    component: TesteComponent,
  },
  {
    path: 'atividades',
    component: AtividadesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lancar-horas',
    component: LancarHorasComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Redireciona para home ao acessar a raiz '/'
  },
  {
    path: '**',
    redirectTo: 'home', // Redireciona qualquer rota inválida para home
  },
];
