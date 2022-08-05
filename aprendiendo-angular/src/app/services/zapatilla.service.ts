import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Reebook', 'Blanco', 100, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 80, true),
      new Zapatilla('Reebook Spartan', 'Reebook', 'Azules', 60, false),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Amarillo', 120, true),
      new Zapatilla('Michelin NAVY', 'Michelin', 'Azules', 60, false),
    ];
  }

  getTexto() {
    return 'Hola mundo desde un servicio';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
