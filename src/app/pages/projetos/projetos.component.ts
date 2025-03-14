import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Project {
  name: string;
  description: string;
  assignedTo: number[];
}

interface Employee {
  id: number;
  name: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  projects: Project[] = [
    {
      name: 'HairSync',
      description:
        'Plataforma inteligente para gestão de horários e fidelização de clientes em barbearias.',
      assignedTo: [1, 2],
    },
    {
      name: 'VisionBoard AI',
      description:
        'Dashboard com IA para análise preditiva de negócios, otimizando estratégias de vendas e marketing.',
      assignedTo: [3, 4],
    },
    {
      name: 'PetCare Connect',
      description:
        'Sistema inovador para agendamento de consultas, banho e tosa, com rastreamento em tempo real para donos de pets.',
      assignedTo: [1, 3],
    },
    {
      name: 'NextGen Edu',
      description:
        'Plataforma educacional interativa com gamificação e desafios diários para aprendizado personalizado.',
      assignedTo: [3, 5],
    },
    {
      name: 'EcoTrack',
      description:
        'Sistema para monitoramento de consumo de energia e sustentabilidade em empresas e residências.',
      assignedTo: [6],
    },
    {
      name: 'FitPlanner',
      description:
        'Aplicativo para planejamento de treinos e dietas personalizadas, com acompanhamento de metas em tempo real.',
      assignedTo: [3, 1],
    },
    {
      name: 'CodeFlow Hub',
      description:
        'Ambiente colaborativo para desenvolvedores compartilharem snippets, dicas e projetos open-source.',
      assignedTo: [1, 6],
    },
    {
      name: 'NodeOps',
      description:
        'Plataforma DevOps baseada em Node.js para CI/CD e automação de infraestrutura em tempo real.',
      assignedTo: [2],
    },
  ];

  employees: Employee[] = [
    { id: 1, name: 'Lucas' },
    { id: 2, name: 'Erick' },
    { id: 3, name: 'Luciano' },
    { id: 4, name: 'Erica' },
    { id: 5, name: 'Rodrigo' },
    { id: 6, name: 'Thiago' },
  ];

  project: Project = { name: '', description: '', assignedTo: [] };
  isEditing = false;

  displayedColumns: string[] = ['name', 'description', 'assignedTo', 'actions'];

  onSubmit() {
    if (this.isEditing) {
      this.isEditing = false;
    } else {
      this.projects.push({ ...this.project });
    }
    this.project = { name: '', description: '', assignedTo: [] };
  }

  editProject(project: Project) {
    this.project = { ...project };
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
    this.project = { name: '', description: '', assignedTo: [] };
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter((p) => p !== project);
  }

  getEmployeeNames(ids: number[]): string {
    return (
      ids
        .map((id) => this.employees.find((emp) => emp.id === id)?.name)
        .join(', ') || 'Nenhum'
    );
  }
}
