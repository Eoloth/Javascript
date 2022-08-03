import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = 'Componente de videojuegos';
    this.listado = 'Listado de los juegos más populares';

    console.log('Se ha cargado el componente: videojuego.component.ts');
  }

  ngOnInit(): void {
    console.log('Se ha cargado el método: ngOnInit()');
  }

  ngDoCheck(): void {
    console.log('Se ha cargado el método: ngDoCheck()');
  }

  ngOnDestroy(): void {
    console.log('Se ha cargado el método: ngOnDestroy()');
  }

  cambiarTitulo(): void {
    this.titulo = 'Nuevo título';
  }
}
