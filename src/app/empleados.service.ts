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

      }

      

}