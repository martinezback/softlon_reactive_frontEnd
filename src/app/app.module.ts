import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './templateForm/formulario.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ComponenteDePruebaComponent } from './componente-de-prueba/componente-de-prueba.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ReactiveFormComponent,
    ComponenteDePruebaComponent,
    UsuariosComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
