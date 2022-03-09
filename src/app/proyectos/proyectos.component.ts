import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router: Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {
    this.empleados=this.empleadosService.empleados;
   }

  ngOnInit(): void {
  }


  volverHome() {
    this.router.navigate(['home'])
  }

  empleados:Empleado[]=[];
  
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['home'])

  }


  cuadroNombre  :string = "";
  cuadroApellido:string = "";
  cuadroCargo   :string = "";
  cuadroSalario :Number =  0;

}
