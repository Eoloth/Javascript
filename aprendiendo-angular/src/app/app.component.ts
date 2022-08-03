import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostar_videojuegos: boolean = true;

  ocultarVideojuegos(value: boolean) {
    this.mostar_videojuegos = value;
  }
}
