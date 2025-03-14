import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  standalone: true,
  styleUrls: ['./user-registration.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    NgxChartsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    NzModalModule,
    RouterModule,
  ],
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private usuarioservice: UsuariosService
  ) {
    // Criando o formulário com validações
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  // Método para enviar os dados do formulário
  onSubmit(): void {
    console.log('chamou');
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      this.usuarioservice.criarUsuarios(userData).subscribe(
        (data: any) => {
          console.log(data);
          console.log('Novo usuario criado com sucesso:', userData.username);
          this.userForm = this.fb.group({
            username: '',
            email: '',
            password: '',
          });
          alert('Usuário criado com sucesso!');
        },
        (error: any) => {
          console.error('Erro ao criar usuario:', error);

          if (error instanceof HttpErrorResponse && error.status === 422) {
            console.error('Detalhes do erro de validação:', error.error.detail);
          } else {
          }
        }
      );
    }
  }

  logout() {
    // Lógica para logout (ex: limpar token, redirecionar para login)
    localStorage.removeItem('token');
    localStorage.removeItem('loginstatus'); // Exemplo: remover token do localStorage
    this.router.navigate(['/login']);
  }

  // Método para fazer a requisição POST para criar o usuário
}
