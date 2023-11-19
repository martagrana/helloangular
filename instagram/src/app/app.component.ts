import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'instagram';

  tituloDato1: string = 'publicaciones';
  tituloDato2: string = 'seguidores';
  tituloDato3: string = 'siguiendo';
  publicaciones: number = 0;
  seguidores: number = 300;
  siguiendo: number = 200;
  fechaNacimiento: Date = new Date(1983, 11, 16);
  esChica: boolean = true;

  perfil = {
    usuario: 'Death_cab',
    nombreReal: 'Marta Graña',
    fotoUsuario: 'assets/img/marta-grana.jpg',
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

  cargarDatos() {
    this.publicaciones = Math.random();
    this.seguidores = Math.random();
    this.siguiendo = Math.random();

  }
  contarPublicaciones() {
    this.publicaciones += 3;
    this.calcularSeguidores();
    console.log(this.fechaNacimiento.getFullYear());
    if (this.esChica) {
      console.log("soy chica");
      let añoNacimiento: number = this.fechaNacimiento.getFullYear();
      if (añoNacimiento > 1980) { console.log("soy de los ochenta"); }
      else {
        console.log("no soy de los ochenta");
      }
    } else {
      console.log("no soy chica");

    };
    console.log(this.perfil);


  }

  calcularSeguidores() {
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