import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  constructor(
              private router: Router,
              private route: ActivatedRoute, 
              private miServicio:ServicioEmpleadosService, 
              private empleadosService:EmpleadosService, 
              ) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id']; //? CON ESTO ATRAPAMOS LOS PARAMETROS DE UNA RUTA
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

    this.accion = parseInt(this.route.snapshot.queryParams['accion']) 
  }


  volverHome() {
    this.router.navigate(['home'])
  }

  empleados:Empleado[]=[];
  accion: number;



  actualizaEmpleado(){

    if(this.accion === 1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
       this.empleadosService.actualizarEmpleado(this.indice,  miEmpleado);
       this.router.navigate(['home']);
    }else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['home'])
    }
     };

  
  // actualizaEmpleado(){
  //   let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  //   //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
  //   this.empleadosService.actualizarEmpleado(this.indice,  miEmpleado);
  //   this.router.navigate(['home'])
  // };

  // eliminaEmpleado() {
  //   this.empleadosService.eliminarEmpleado(this.indice);
  //   this.router.navigate(['home'])
  // }


  cuadroNombre  :string = "";
  cuadroApellido:string = "";
  cuadroCargo   :string = "";
  cuadroSalario :Number =  0;
  indice: number;
}
