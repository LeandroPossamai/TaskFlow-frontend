import { MatTableModule } from '@angular/material/table';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
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
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
})
export class DashboardAdminComponent {
  isVisible = false;
  usuarios: any[] = [];
  userAdmin: any;
  // Dados para os gráficos e tabelas...
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

  recentActivities = [
    { task: 'Tarefa 1', project: 'Projeto A', hours: 5, date: '2023-10-01' },
    { task: 'Tarefa 2', project: 'Projeto B', hours: 3, date: '2023-10-02' },
    { task: 'Tarefa 3', project: 'Projeto C', hours: 2, date: '2023-10-03' },
  ];

  constructor(
    private router: Router,
    private usuarioservice: UsuariosService
  ) {}

  logout() {
    // Lógica para logout (ex: limpar token, redirecionar para login)
    localStorage.removeItem('token');
    localStorage.removeItem('loginstatus'); // Exemplo: remover token do localStorage
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    let user: any = localStorage.getItem('email');
    this.obterusarios();
  }

  obterusarios() {
    let user: any = localStorage.getItem('user');
    this.usuarioservice.receberUsuarios().subscribe(
      (data: any) => {
        console.log(data);
        this.usuarios = data;
      },
      (error: any) => {
        console.error('Erro ao criar usuario:', error);
      }
    );
  }
}
