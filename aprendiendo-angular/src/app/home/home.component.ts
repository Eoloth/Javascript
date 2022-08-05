import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public indentificado: boolean;

  constructor() {
    this.indentificado = false;
  }

  ngOnInit(): void {}

  setIdentificado() {
    this.indentificado = true;
  }
  unsetIdentificado() {
    this.indentificado = false;
  }
}
