import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  projects: any[] = []; // Lista de projetos
  project: any = { name: '', description: '', assignedTo: [] }; // Projeto atual (para formulário)
  isEditing = false; // Indica se está editando um projeto

  // Lista de funcionários (exemplo)
  employees = [
    { id: 1, name: 'João Silva' },
    { id: 2, name: 'Maria Souza' },
    { id: 3, name: 'Carlos Oliveira' },
  ];

  // Adicionar ou atualizar projeto
  onSubmit() {
    if (this.isEditing) {
      // Atualizar projeto existente
      const index = this.projects.findIndex((p) => p === this.project);
      this.projects[index] = { ...this.project };
    } else {
      // Adicionar novo projeto
      this.projects.push({ ...this.project });
    }
    this.resetForm();
  }

  // Editar projeto
  editProject(project: any) {
    this.project = { ...project };
    this.isEditing = true;
  }

  // Excluir projeto
  deleteProject(project: any) {
    this.projects = this.projects.filter((p) => p !== project);
  }

  // Cancelar edição
  cancelEdit() {
    this.resetForm();
  }

  // Limpar formulário
  resetForm() {
    this.project = { name: '', description: '', assignedTo: [] };
    this.isEditing = false;
  }

  // Buscar o nome do funcionário pelo ID
  getEmployeeName(employeeId: number): string {
    const employee = this.employees.find((e) => e.id === employeeId);
    return employee ? employee.name : 'Não atribuído';
  }
}
