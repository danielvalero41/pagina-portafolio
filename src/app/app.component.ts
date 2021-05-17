import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagina-portafolio';
  img_perfil = "../assets/img/perfil.jpg"
  programador:boolean = true
  trabajador:boolean 
  algo:boolean = true

  ngOnInit(){    
  }

  ver_programador(){
    this.programador = true
    this.trabajador = false
  }

  ver_trabajador(){
    this.programador = false
    this.trabajador = true
  }
  
}
