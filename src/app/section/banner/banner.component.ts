import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('animateName', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1.5s ease-in', style({
          opacity: 1,
        })
        )
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moveImg()
  }

  moveImg() {
    //funcion para mover el div coon imagen, para darle un efecto de animacion
    window.onload = () => {
      const imgDiv: any = document.getElementById('id-img');
      const idH1: any = document.getElementById('id-h1');
      /* condicional para dar el efecto de animacion a la seccion de banner para las diferente tipos de dispositivos*/
      if (screen.width > 900) {
        console.log('primer if');
        idH1.style.top = "240px";
        idH1.style.transitionDuration = "1.5s";
        imgDiv.style.left = "60%";
        imgDiv.style.transitionDuration = "1.5s";
      } else if (screen.width <= 899 && screen.width >= 500) {
        imgDiv.style.opacity = "1"
        imgDiv.style.transitionDuration = "1.5s";
        idH1.style.left = "22%";
        idH1.style.transitionDuration = "1.5s";
      } else if (screen.width <= 499) {
        imgDiv.style.opacity = "1"
        imgDiv.style.transitionDuration = "1.5s";
        idH1.style.left = "0%";
        idH1.style.transitionDuration = "1.5s";
      }

    }
  }


}
