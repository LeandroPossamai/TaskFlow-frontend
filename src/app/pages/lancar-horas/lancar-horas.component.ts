import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-lancar-horas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    BackButtonComponent,
  ],
  providers: [MessageService], // Importa o serviço de mensagens
  templateUrl: './lancar-horas.component.html',
  styleUrls: ['./lancar-horas.component.scss'],
})
export class LancarHorasComponent {
  atividades = [
    { id: 1, nome: 'Desenvolvimento Front-end' },
    { id: 2, nome: 'Revisão de Código' },
    { id: 3, nome: 'Correção de Bugs' },
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
