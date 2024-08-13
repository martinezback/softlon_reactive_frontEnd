import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  
  @Input() usuarios:any

  public usuarioFormulario:Array<any>=[]


  public reactiveForm: FormGroup ;
  enviarDatos:Boolean=false;

  constructor(private formBuilder: FormBuilder ){ this.reactiveForm=formBuilder.group({})}


  
  
  ngOnInit(): void {

    this.reactiveForm= this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z ]*$')]],
      descripcion:['',[Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z ]*$')]]
    })

  

    //this.formDataApi();
  }

  /* formDataApi(){
    const response ={
      nombre:'juan alberto',
      descripcion:'certificado laboral'
    }

    this.reactiveForm?.patchValue(response)
  } */

   /* reactiveForm= new FormGroup({
    'name' : new FormControl('', Validators.required),
    'descripcion': new FormControl('',[Validators.required, Validators.minLength(5)]) 
  });

   nombre = new FormControl('', Validators.required);
  descripcion = new FormControl('',[Validators.required, Validators.minLength(5)]); 

   mostrarDatos:Boolean = false;

  enviarDatos(){
    this.mostrarDatos=true;
  }  */
}
