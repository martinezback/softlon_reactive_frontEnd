import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public users:Array<any>=[]

  ngOnInit(): void {
    this.users=[
      {
        nombre:' jorge gomez',
        email:' jorge@mail',
        pais:'Colombia',
        ciudad:'Medellin',
        telefono:'12345',
        rol:'USER',
      },
      {
        nombre:' andres perez',
        email:' andres@mail',
        pais:'Colombia',
        ciudad:'Bogota',
        telefono:'12345',
        rol:'USER',
      },
      {
        nombre:'Henry martinez',
        email:' henry@mail',
        pais:'Colombia',
        ciudad:'Bogota',
        telefono:'12345',
        rol:'ADMIN',
      }
    ]
  }
  
}
