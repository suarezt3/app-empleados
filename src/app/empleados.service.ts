import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados:Empleado[]=[
        new Empleado("Eyder", "Suarez", "Presidente", 5000),
        new Empleado("Ana", "Diaz", "Auxiliar", 1500),
        new Empleado("Tatiana", "Rojas", "Secretaria", 2000),
        new Empleado("Camila", "Garcia", "Contadora", 3000),
      ];

      agregarEmpleadoServicio(empleado: Empleado) {
          this.servicioVentanaEmergente.muestraMensaje(`Persona que se va a agregar
            ${empleado.nombre}
            Salario ${empleado.salario}`)
            this.empleados.push(empleado)
      };


      encontrarEmpleado(indice: number) {
        let empleado: Empleado = this.empleados[indice];
        return empleado
      };

      actualizarEmpleado(indice: number, empleado: Empleado) {
        let empleadoModificado      = this.empleados[indice];
        empleadoModificado.nombre   = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo    = empleado.cargo;
        empleadoModificado.salario  = empleado.salario;
      };

      eliminarEmpleado(indice: number) {
        this.empleados.splice(indice,1)
      }

      

}