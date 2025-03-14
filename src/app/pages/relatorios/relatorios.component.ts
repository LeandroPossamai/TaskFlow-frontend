import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    ToastModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [MessageService],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss'],
})
export class RelatoriosComponent {
  relatorioForm = new FormGroup({
    projeto: new FormControl(null, Validators.required),
    atividade: new FormControl(null, Validators.required),
    usuario: new FormControl(null, Validators.required),
    dataInicio: new FormControl(null, Validators.required),
    dataFim: new FormControl(null, Validators.required),
  });

  projetos = [
    { id: 1, nome: 'CodeFlow' },
    { id: 2, nome: 'DevSync' },
    { id: 3, nome: 'ByteForge' },
    { id: 4, nome: 'ScriptX' },
    { id: 5, nome: 'AlgoNest' },
    { id: 6, nome: 'CodeSphere' },
    { id: 7, nome: 'DevOpsHub' },
    { id: 8, nome: 'AI Nexus' },
    { id: 9, nome: 'CloudStack' },
    { id: 10, nome: 'DataBridge' },
  ];

  atividades = [
    { id: 1, nome: 'Desenvolvimento Frontend' },
    { id: 2, nome: 'Desenvolvimento Backend' },
    { id: 3, nome: 'Testes de Integração' },
    { id: 4, nome: 'Documentação Técnica' },
    { id: 5, nome: 'Reuniões de Planejamento' },
  ];

  usuarios = [
    { id: 1, nome: 'Lucas Silva' },
    { id: 2, nome: 'Mariana Costa' },
    { id: 3, nome: 'Fernando Oliveira' },
    { id: 4, nome: 'Camila Souza' },
    { id: 5, nome: 'Rafael Mendes' },
  ];

  resultados: any[] = [];

  constructor(private messageService: MessageService) {}

  buscarRelatorios() {
    if (this.relatorioForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Por favor, preencha todos os campos obrigatórios.',
      });
      return;
    }

    console.log('Filtros aplicados:', this.relatorioForm.value);

    // Simulação de dados filtrados
    this.resultados = [
      {
        projeto: 'Projeto Alpha',
        atividade: 'Desenvolvimento Frontend',
        usuario: 'Lucas Silva',
        horas: 12,
        data: '2025-02-20',
      },
      {
        projeto: 'Projeto Beta',
        atividade: 'Testes de Integração',
        usuario: 'Mariana Costa',
        horas: 8,
        data: '2025-03-05',
      },
      {
        projeto: 'Projeto Gama',
        atividade: 'Documentação Técnica',
        usuario: 'Fernando Oliveira',
        horas: 6,
        data: '2025-03-10',
      },
      {
        projeto: 'Projeto Delta',
        atividade: 'Reuniões de Planejamento',
        usuario: 'Camila Souza',
        horas: 4,
        data: '2025-03-15',
      },
      {
        projeto: 'Projeto Ômega',
        atividade: 'Desenvolvimento Backend',
        usuario: 'Rafael Mendes',
        horas: 10,
        data: '2025-03-20',
      },
    ];

    this.messageService.add({
      severity: 'success',
      summary: 'Relatório gerado!',
      detail: 'Os dados foram filtrados com sucesso.',
    });
  }
}
