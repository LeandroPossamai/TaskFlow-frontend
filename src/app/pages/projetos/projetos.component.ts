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
  id: number;
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
      id: 1,
      name: 'HairSync',
      description:
        'Plataforma inteligente para gestão de horários e fidelização de clientes em barbearias.',
      assignedTo: [1, 2],
    },
    {
      id: 2,
      name: 'VisionBoard AI',
      description:
        'Dashboard com IA para análise preditiva de negócios, otimizando estratégias de vendas e marketing.',
      assignedTo: [3, 4],
    },
    {
      id: 3,
      name: 'PetCare Connect',
      description:
        'Sistema inovador para agendamento de consultas, banho e tosa, com rastreamento em tempo real para donos de pets.',
      assignedTo: [1, 3],
    },
    {
      id: 4,
      name: 'NextGen Edu',
      description:
        'Plataforma educacional interativa com gamificação e desafios diários para aprendizado personalizado.',
      assignedTo: [3, 5],
    },
    {
      id: 5,
      name: 'EcoTrack',
      description:
        'Sistema para monitoramento de consumo de energia e sustentabilidade em empresas e residências.',
      assignedTo: [6],
    },
    {
      id: 6,
      name: 'FitPlanner',
      description:
        'Aplicativo para planejamento de treinos e dietas personalizadas, com acompanhamento de metas em tempo real.',
      assignedTo: [3, 1],
    },
    {
      id: 7,
      name: 'CodeFlow Hub',
      description:
        'Ambiente colaborativo para desenvolvedores compartilharem snippets, dicas e projetos open-source.',
      assignedTo: [1, 6],
    },
    {
      id: 8,
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

  project: Project = { id: 0, name: '', description: '', assignedTo: [] };
  isEditing = false;
  editIndex: number | null = null;

  displayedColumns: string[] = ['name', 'description', 'assignedTo', 'actions'];

  // Método de envio do formulário, lida com criação ou edição
  onSubmit() {
    if (this.isEditing && this.editIndex !== null) {
      // Atualiza o projeto editado
      this.projects[this.editIndex] = { ...this.project };
      this.isEditing = false;
      this.editIndex = null;
    } else {
      // Cria um novo projeto
      const newProject: Project = {
        ...this.project,
        id: this.projects.length + 1,
      };
      this.projects.push(newProject);
    }

    this.resetForm();
  }

  // Método para iniciar a edição de um projeto
  editProject(project: Project, index: number) {
    this.project = { ...project };
    this.isEditing = true;
    this.editIndex = index;
  }

  // Método para cancelar a edição e resetar o formulário
  cancelEdit() {
    this.isEditing = false;
    this.editIndex = null;
    this.resetForm();
  }

  // Método para excluir um projeto
  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }

  // Método para exibir os nomes dos funcionários atribuídos
  getEmployeeNames(ids: number[]): string {
    return (
      ids
        .map((id) => this.employees.find((emp) => emp.id === id)?.name)
        .join(', ') || 'Nenhum'
    );
  }

  // Método para resetar o formulário
  private resetForm() {
    this.project = { id: 0, name: '', description: '', assignedTo: [] };
  }
}
