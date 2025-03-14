import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lancar-horas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
  ],
  providers: [MessageService], // Importa o serviço de mensagens
  templateUrl: './lancar-horas.component.html',
  styleUrls: ['./lancar-horas.component.scss'],
})
export class LancarHorasComponent {
  atividades = [
    { id: 1, nome: 'Implementação do login' },
    { id: 2, nome: 'Revisão de Código' },
    { id: 3, nome: 'Correção de Bugs' },
    { id: 4, nome: 'Estrutura do projeto' },
    { id: 5, nome: 'Correção de End-Point' },
    { id: 6, nome: 'Correção da Rota users' },
    { id: 7, nome: 'Gerenciamento' },
    { id: 8, nome: 'Correção de BD' },
    { id: 9, nome: 'Correção de Script' },
    { id: 10, nome: 'Correção de Controller' },
  ];

  horasForm = new FormGroup({
    atividade: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private messageService: MessageService) {}

  salvarHoras() {
    if (this.horasForm.valid) {
      console.log('Lançamento salvo:', this.horasForm.value);
      this.horasForm.reset(); // Reseta o formulário

      // Exibe a mensagem de sucesso no Toast
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: 'Horas salvas com sucesso!',
      });
    } else {
      // Exibe um erro no Toast caso o formulário esteja inválido
      this.messageService.add({
        severity: 'error',
        summary: 'Erro!',
        detail: 'Preencha todos os campos corretamente!',
      });
    }
  }
}
