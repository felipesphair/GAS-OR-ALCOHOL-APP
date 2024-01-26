import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  public resultado: String = ""
  public precoGasolina: GLfloat = 0;
  public precoAlcool: GLfloat = 0;

  calcular() {
    if(this.precoAlcool == 0 || this.precoAlcool == 0) {
      this.resultado = "Preencha corretamente os campos!"
    } else if(this.precoAlcool != 0 && this.precoAlcool != 0) {
      if((this.precoAlcool / this.precoGasolina) >= 0.7) {
        this.resultado = "Melhor utilizar gasolina!"
      } else {
        this.resultado = "Melhor utilizar álcool!"

      }
    }
  }
}
