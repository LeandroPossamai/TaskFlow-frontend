import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
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
  selector: 'app-atividades',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BackButtonComponent,
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
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss'],
})
export class AtividadeComponent {
  atividades = [
    { id: 1, nome: 'Planejamento inicial', status: 'Em andamento' },
    { id: 2, nome: 'Desenvolvimento da API', status: 'Pendente' },
    { id: 3, nome: 'Testes finais', status: 'Concluído' },
    { id: 4, nome: 'Design do frontend', status: 'Em andamento' },
    { id: 5, nome: 'Configuração do banco de dados', status: 'Concluído' },
    { id: 6, nome: 'Implementação de autenticação', status: 'Pendente' },
    { id: 7, nome: 'Integração com WebSocket', status: 'Em andamento' },
    { id: 8, nome: 'Desenvolvimento do dashboard', status: 'Pendente' },
    { id: 9, nome: 'Revisão de código', status: 'Em andamento' },
    { id: 10, nome: 'Documentação', status: 'Pendente' },
    { id: 11, nome: 'Deploy da aplicação', status: 'Pendente' },
  ];
  constructor(private router: Router) {}

  novaAtividade = { nome: '', status: '' };
  editando: any = null;

  adicionarAtividade() {
    if (this.novaAtividade.nome && this.novaAtividade.status) {
      const newId = this.atividades.length
        ? Math.max(...this.atividades.map((a) => a.id)) + 1
        : 1;
      this.atividades.push({
        id: newId,
        ...this.novaAtividade,
      });
      this.novaAtividade = { nome: '', status: '' };
    }
  }
  getStatusClass(status: string) {
    switch (status) {
      case 'Concluído':
        return 'status-concluido';
      case 'Em andamento':
        return 'status-andamento';
      case 'Pendente':
        return 'status-pendente';
      default:
        return '';
    }
  }

  editarAtividade(atividade: any) {
    this.editando = { ...atividade };
  }

  salvarEdicao() {
    const index = this.atividades.findIndex((a) => a.id === this.editando.id);
    if (index !== -1) {
      this.atividades[index] = this.editando;
      this.editando = null;
    }
  }

  excluirAtividade(id: number) {
    this.atividades = this.atividades.filter((a) => a.id !== id);
  }

  logout() {
    // Lógica para logout (ex: limpar token, redirecionar para login)
    localStorage.removeItem('token');
    localStorage.removeItem('loginstatus'); // Exemplo: remover token do localStorage
    this.router.navigate(['/login']);
  }
}
