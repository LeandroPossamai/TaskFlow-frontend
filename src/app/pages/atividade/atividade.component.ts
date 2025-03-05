import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, BackButtonComponent],
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss'],
})
export class AtividadeComponent {
  atividades = [
    { id: 1, nome: 'Planejamento inicial', status: 'Em andamento' },
    { id: 2, nome: 'Desenvolvimento da API', status: 'Pendente' },
    { id: 3, nome: 'Testes finais', status: 'Concluído' },
  ];

  novaAtividade = { nome: '', status: '' };
  editando: any = null;

  adicionarAtividade() {
    if (this.novaAtividade.nome && this.novaAtividade.status) {
      this.atividades.push({
        id: this.atividades.length + 1,
        ...this.novaAtividade,
      });
      this.novaAtividade = { nome: '', status: '' };
    }
  }
  getStatusClass(status: string) {
    switch (status) {
      case 'Concluído':
        return 'status-concluido';
      case 'Em andamento':
        return 'status-andamento';
      case 'Pendente':
        return 'status-pendente';
      default:
        return '';
    }
  }

  editarAtividade(atividade: any) {
    this.editando = { ...atividade };
  }

  salvarEdicao() {
    const index = this.atividades.findIndex((a) => a.id === this.editando.id);
    if (index !== -1) {
      this.atividades[index] = this.editando;
      this.editando = null;
    }
  }

  excluirAtividade(id: number) {
    this.atividades = this.atividades.filter((a) => a.id !== id);
  }
}
