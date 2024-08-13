import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  mostrarDatos:Boolean = false;

  plantilla={
    nombre:"",
    descripcion:""
  }

  enviarDatos(){
    this.mostrarDatos=true;
  }
}
