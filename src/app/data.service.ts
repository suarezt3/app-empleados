import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";


@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {}

    guardarEmpleados(empleados: Empleado[]) {
        this.httpClient.post('https://app-clientes-curso-pi-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(resp => 
            console.log(`Se Guardaron los registros ${resp}`),
             
        );
    }


}