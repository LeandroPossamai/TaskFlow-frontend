import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lancar-horas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lancar-horas.component.html',
  styleUrl: './lancar-horas.component.scss',
})
export class LancarHorasComponent {
  horasForm = new FormGroup({
    data: new FormControl('', [Validators.required]), // Adicionando validação
    quantidade: new FormControl('', [Validators.required, Validators.min(1)]), // Validação para horas > 0
  });
  // Método para salvar os dados
  salvarHoras() {
    if (this.horasForm.valid) {
      console.log('Dados enviados:', this.horasForm.value);
      // Aqui você pode adicionar a lógica para salvar os dados em um backend
    } else {
      console.log('Formulário inválido');
    }
  }
}
