import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  registros = [
    {
      data: '10/02/2025',
      entrada: '08:00',
      saida: '17:00',
      total: '8h',
      status: 'Completo',
    },
    {
      data: '11/02/2025',
      entrada: '09:00',
      saida: '18:00',
      total: '8h',
      status: 'Atrasado',
    },
  ];

  registrarEntrada() {
    alert('Jornada iniciada!');
  }

  registrarSaida() {
    alert('Jornada encerrada!');
  }
}
