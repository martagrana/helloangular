import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'instagram';
  publicaciones: number = 0;
  seguidores: number = 300;
  siguiendo: number = 200;


  cargardatos() {
    this.publicaciones = Math.random();
    this.seguidores = Math.random();
    this.siguiendo = Math.random();
  }
  contarpublicaciones() {
    this.publicaciones = this.publicaciones + 1;
    this.calcularseguidores();
  }

  calcularseguidores() {
    this.seguidores = this.publicaciones * 2;
    this.siguiendo = this.publicaciones * (1 + 1 / 3);
    this.siguiendo = Math.round(this.siguiendo);
  }

}
