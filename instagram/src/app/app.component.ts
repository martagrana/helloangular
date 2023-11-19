import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'instagram';

  titulodato1: string = 'publicaciones';
  titulodato2: string = 'seguidores';
  titulodato3: string = 'siguiendo';
  publicaciones: number = 0;
  seguidores: number = 300;
  siguiendo: number = 200;
  fechanacimiento: Date = new Date(1983, 11, 16);
  eschica: boolean = true;

  perfil = {
    usuario: 'Death_cab',
    nombrereal: 'Marta Graña',
    fotousuario: 'assets/img/marta-grana.jpg',
  };

  fotos: string[] = ["assets/img/IMG_instagram1.jpg", "assets/img/IMG_instagram2.jpg", "assets/img/IMG_instagram3.jpg"];

  mostrarFotos() {
    console.log(this.fotos.length);
    //this.fotos.push("una foto distinta")

    for (let index = 0; index < this.fotos.length; index++) {
      const element = this.fotos[index];
      console.log(element);
    }

    this.fotos.forEach(element => {
      console.log(element);
    });

    for (const iterator of this.fotos) {
      console.log(iterator);

    }

    /*console.log(this.fotos.length);
    console.log(this.fotos[0]);
    console.log(this.fotos[1]);
    console.log(this.fotos[2]);
    console.log(this.fotos[3]);*/
  }

  cargardatos() {
    this.publicaciones = Math.random();
    this.seguidores = Math.random();
    this.siguiendo = Math.random();

  }
  contarpublicaciones() {
    this.publicaciones += 3;
    this.calcularseguidores();
    console.log(this.fechanacimiento.getFullYear());
    if (this.eschica) {
      console.log("soy chica");
      let añonacimiento: number = this.fechanacimiento.getFullYear();
      if (añonacimiento > 1980) { console.log("soy de los ochenta"); }
      else {
        console.log("no soy de los ochenta");
      }
    } else {
      console.log("no soy chica");

    };
    console.log(this.perfil);


  }

  calcularseguidores() {
    this.seguidores *= 2;
    let siguiendo = this.publicaciones * (1 + 1 / 3);
    this.siguiendo = Math.round(siguiendo);
  }

  resetear() {
    this.publicaciones = 0;
    this.seguidores = 0;
    this.siguiendo = 0;
  }

}