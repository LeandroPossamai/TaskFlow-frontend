import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    NgxChartsModule,
    MatTableModule,
  ],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
})
export class DashboardAdminComponent {
  // Dados para os gráficos
  barChartData = [
    { name: 'Projeto A', value: 40 },
    { name: 'Projeto B', value: 30 },
    { name: 'Projeto C', value: 20 },
  ];

  pieChartData = [
    { name: 'Concluídas', value: 50 },
    { name: 'Em Andamento', value: 30 },
    { name: 'Pendentes', value: 20 },
  ];

  // Dados para a tabela de atividades
  recentActivities = [
    { task: 'Tarefa 1', project: 'Projeto A', hours: 5, date: '2023-10-01' },
    { task: 'Tarefa 2', project: 'Projeto B', hours: 3, date: '2023-10-02' },
    { task: 'Tarefa 3', project: 'Projeto C', hours: 2, date: '2023-10-03' },
  ];
}
