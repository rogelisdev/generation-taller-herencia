import { Empleados } from "./primer-ejercicio.js";

class Lider extends Empleados {
    constructor(nombre, salario, equipo) {
        super(nombre, "Lider de equipo", salario, true); //Predetermina variables y valores del extends.
        this.equipo = equipo;
    }

    presentarEquipo() {
        console.log(`El lider del equipo ${this.nombre}`)

        this.equipo.forEach(element => {   //Recorre lista 
            console.log(`- ${element}`)
        });
    }

    agregarMiembros(nombre) {
        this.equipo.push(nombre);
        return `Se agrego ${nombre} al equipo de ${this.nombre}`
    }

    info() {
        console.log(`
            Datos del lider: 
            NOMBRE: ${this.nombre}
            SALARIO: ${this.salario}
            CARGO: ${this.cargo}
            ESTADO: ${this.activo}
            PERSONAS EN EL EQUIPO: ${this.equipo.length}`)
    }

}


let lider1 = new Lider("Javier", 7500, ["Juan", "Carlos", "Lucia"]);
let lider2 = new Lider("Pepe", 4500, ["Juan Carlos", "Juliana", "Andre"]);

lider1.agregarMiembros("Maria")
lider1.presentarEquipo()