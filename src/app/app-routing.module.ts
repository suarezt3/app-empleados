import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'actualizar/:id',
    component: ActualizaComponent
  },
  {
    path: '**',
    component: ErrorPersonalizadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
