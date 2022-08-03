import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'aprendiendo-angular';
  public descripcion: string;
  public mostar_videojuegos: boolean = true;
  public config;

  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideojuegos(value: boolean) {
    this.mostar_videojuegos = value;
  }
}
