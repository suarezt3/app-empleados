import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Listado de empleados';

  /*? para inyectar un servicio siempre se debe hacer desde un constructor en el componente done se va a utilizar
  
  cuando tenemos una clase en angular el primer método que se ejecuta es el constructor y luego el metodo ngOnInit  */
  
    constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
      this.empleados=this.empleadosService.empleados;
    }
  
  
   empleados:Empleado[]=[];
  
    agregarEmpleado(){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
      this.empleadosService.agregarEmpleadoServicio(miEmpleado) 
    }
  
  
    cuadroNombre  :string = "";
    cuadroApellido:string = "";
    cuadroCargo   :string = "";
    cuadroSalario :Number =  0;
  

}
