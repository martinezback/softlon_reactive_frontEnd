import { Component, OnInit } from '@angular/core';
import { ServiceUsuarioFormService } from '../service-usuario-form.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent implements OnInit {

  public usuariosList: Array<any>= []

  constructor(private serviceUserForm: ServiceUsuarioFormService){
    
  }

  ngOnInit(): void {
    this.serviceUserForm.open.subscribe(data=>{
      this.usuariosList.push(data)
      console.log(this.usuariosList)

    })
  }

}
