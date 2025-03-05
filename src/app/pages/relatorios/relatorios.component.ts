import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Adicionado para suporte ao FormGroup e FormControl
    TableModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    ToastModule,
    RouterModule,
  ],
  providers: [MessageService], // Adicionado corretamente no providers
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss'], // Correção do nome
})
export class RelatoriosComponent {
  relatorioForm = new FormGroup({
    projeto: new FormControl(null),
    atividade: new FormControl(null),
    usuario: new FormControl(null),
    dataInicio: new FormControl(null),
    dataFim: new FormControl(null),
  });

  projetos = [
    { id: 1, nome: 'Projeto A' },
    { id: 2, nome: 'Projeto B' },
    { id: 3, nome: 'Projeto C' },
  ];

  atividades = [
    { id: 1, nome: 'Desenvolvimento' },
    { id: 2, nome: 'Testes' },
    { id: 3, nome: 'Documentação' },
  ];

  usuarios = [
    { id: 1, nome: 'Lucas' },
    { id: 2, nome: 'Mariana' },
    { id: 3, nome: 'Fernando' },
  ];

  resultados: any[] = [];

  constructor(private messageService: MessageService) {}

  buscarRelatorios() {
    console.log('Filtros aplicados:', this.relatorioForm.value);

    // Simulação de dados filtrados
    this.resultados = [
      {
        projeto: 'Projeto A',
        atividade: 'Desenvolvimento',
        usuario: 'Lucas',
        horas: 10,
        data: '2025-02-20',
      },
      {
        projeto: 'Projeto B',
        atividade: 'Testes',
        usuario: 'Mariana',
        horas: 8,
        data: '2025-03-05',
      },
    ];

    this.messageService.add({
      severity: 'success',
      summary: 'Relatório gerado!',
      detail: 'Os dados foram filtrados com sucesso.',
    });
  }
}
