import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
  }

  ngOnInit() {
    this.fecha = new Date(2019, 5, 20);
    this.cargaUsuario();
  }

  cargaUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      (result) => {
        this.user = result.data;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
