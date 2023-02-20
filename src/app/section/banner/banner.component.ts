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
  }

}
