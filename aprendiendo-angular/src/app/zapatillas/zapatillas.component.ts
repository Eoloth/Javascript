import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.mi_marca = 'Fila';
    this.color = 'blue';
    this.marcas = [];
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Reebook', 'Blanco', 100, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 80, true),
      new Zapatilla('Reebook Spartan', 'Reebook', 'Azules', 60, false),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Amarillo', 120, true),
      new Zapatilla('Michelin NAVY', 'Michelin', 'Azules', 60, false),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }
  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.mi_marca);
  }
  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  removeMarca() {
    this.marcas.pop();
  }
}
