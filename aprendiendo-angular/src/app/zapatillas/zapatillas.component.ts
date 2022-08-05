import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService],
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla> | undefined;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(private _zapatillaService: ZapatillaService) {
    this.mi_marca = 'Fila';
    this.color = 'blue';
    this.marcas = [];
  }
  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.getMarcas();
  }
  getMarcas() {
    // @ts-ignore
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

  removeMarca(index: number) {
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }
  mostrarPalabra() {
    alert(this.mi_marca);
  }
}
