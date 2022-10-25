import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  estudios: Array<string> = [
    'Musico - Bajista',
    'Administrador Financiero',
    'Desarrollador de paginas Web',
    'Estudiante Universidad Creativa',
  ];

  mostrar = true;

  ocultarYmostrarFoto() {
    if (this.mostrar == true) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }

  nota = 99;

  incrementarNota() {
    this.nota += 1;
  }
  disminuirNota() {
    this.nota -= 1;
  }
  constructor() {}

  ngOnInit(): void {}
}
