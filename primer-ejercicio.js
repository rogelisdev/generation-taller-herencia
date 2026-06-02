export class Empleados {
    constructor(nombre, cargo, salario, activo = true) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = activo;
    }

    presentarse() {
        console.log(`Hola mi nombre es ${this.nombre} y mi cargo es el de ${this.cargo}`)
    }

    calcularSalarioAnual() {
        let calcular = this.salario * 12
        console.log(`Tu salario anual es de: ${calcular}`)
        return calcular;
    }

    desactivar() {
        this.activo = !this.activo;
        console.log(`El empleado ${this.nombre} ahora está: ${this.activo}`);
    }

    info() {
        console.log(`Datos del trabajador:
            NOMBRE: ${this.nombre},
            SALARIO: ${this.salario},
            CARGO: ${this.cargo},
            ESTADO: ${this.activo}`);
    }

}


let empleado1 = new Empleados("Mario", "Albañil", 1200, true);
let empleado2 = new Empleados("Francisco", "Medico", 9500, true);
let empleado3 = new Empleados("Karla", "Modelo", 1750, false);

empleado1.presentarse()
empleado1.calcularSalarioAnual()
empleado1.desactivar()
empleado1.info()

empleado2.presentarse()
empleado2.calcularSalarioAnual()
empleado2.desactivar()
empleado2.info()

empleado3.presentarse()
empleado3.calcularSalarioAnual()
empleado3.desactivar()
empleado3.info()