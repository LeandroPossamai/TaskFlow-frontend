import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, FormsModule, BackButtonComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  projetos = [
    { id: 1, nome: 'Projeto 1' },
    { id: 2, nome: 'Projeto 2' },
  ];

  projetoSelecionado: { id?: number; nome: string } = { nome: '' };

  exibirModal = false;
  exibirConfirmacao = false;

  abrirModal() {
    this.projetoSelecionado = { nome: '' }; // Limpa os dados ao abrir o modal
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
  }

  editarProjeto(projeto: { id: number; nome: string }) {
    this.projetoSelecionado = { ...projeto }; // Preenche com os dados do projeto
    this.exibirModal = true;
  }

  salvarProjeto() {
    if (this.projetoSelecionado.nome) {
      if (this.projetoSelecionado.id) {
        const index = this.projetos.findIndex(
          (p) => p.id === this.projetoSelecionado.id
        );
        this.projetos[index] = {
          ...this.projetoSelecionado,
          id: this.projetoSelecionado.id!,
        };
      } else {
        this.projetoSelecionado.id = this.projetos.length + 1; // Definindo um ID simples
        this.projetos.push({
          ...this.projetoSelecionado,
          id: this.projetoSelecionado.id!,
        });
      }
      this.fecharModal();
    }
  }

  confirmarExclusao(projeto: { id: number; nome: string }) {
    this.projetoSelecionado = projeto;
    this.exibirConfirmacao = true;
  }

  excluirProjeto() {
    this.projetos = this.projetos.filter(
      (p) => p.id !== this.projetoSelecionado.id
    );
    this.exibirConfirmacao = false;
  }
}
