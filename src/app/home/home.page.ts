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
    var pG = this.precoGasolina
    var pA = this.precoAlcool
    if(pG == 0 || pA == 0) {
      this.resultado = "Preencha corretamente os campos!"
    } else if(pG != 0 && pA != 0) {
        if((pA / pG) >= 0.7) {
          this.resultado = "Melhor utilizar gasolina!"
        } else {
          this.resultado = "Melhor utilizar álcool!"

        }
    }
  }
}
