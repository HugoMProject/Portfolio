import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    /* funcion para activar el evento de la funcion para cambiar las clases*/
    const menu:any = document.getElementById('btnMenu');
    menu.addEventListener("click", this.changeStyleMenuBanner())
  }
  
  changeStyleMenuBanner(){
    /* funcion para agreagar o remover la clase*/
    const menuBanner:any = document.querySelector('.list-link')
    if(!menuBanner.classList.contains('menuOn')){
      menuBanner.classList.add('menuOn')
    }else{
      menuBanner.classList.remove('menuOn')
    }
    
  }
}
