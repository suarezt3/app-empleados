export class Empleado{


    constructor(nombre:string, apellido:string, cargo:string, salario:Number){
        
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }

    nombre:string="";
    apellido:string="";
    cargo:string="";
    salario:Number=0;

}