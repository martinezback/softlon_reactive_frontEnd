import { Component,Input, OnInit } from '@angular/core';
import { ServiceUsuarioFormService } from '../service-usuario-form.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{

  @Input() usuarios:any

  constructor(private serviceUserForm: ServiceUsuarioFormService){
    
  }

  ngOnInit(): void {
    
  }

  verDetalle(){
    console.log(this.usuarios)
    this.serviceUserForm.open.emit({data:this.usuarios})
  }
  
}
