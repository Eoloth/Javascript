import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Rebook', 'Blanco', 100, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 80, true),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Blanco', 120, true),
      new Zapatilla('Michelin NAVY', 'Michelin', 'Azules', 60, false),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
  }
}
