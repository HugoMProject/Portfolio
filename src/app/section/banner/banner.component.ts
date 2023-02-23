import { Component, OnInit } from '@angular/core';
import { trigger,state,animate,transition,style } from '@angular/animations'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations:[
    trigger('animateName',[
      state('void',style({
        opacity:0
      })),
      transition(':enter',[
        animate('1.5s ease-in',style({
          opacity:1,
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
  
  moveImg(){
    //funcion para mover el div coon imagen, para darle un efecto de animacion
    window.onload = ()=>{
      let imgDiv:any = document.getElementById('id-img');
      let idH1:any = document.getElementById('id-h1');
      idH1.style.top = "240px";
      idH1.style.transitionDuration = "1.5s";
      imgDiv.style.left = "60%";
      imgDiv.style.transitionDuration = "1.5s";
    }
  }
}
