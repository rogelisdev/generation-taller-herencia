class Empleados {
    constructor(nombre, cargo, salario, activo = true) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = activo;
    }

    presentarse() {
        console.log(`Hola mi nombre es ${this.nombre} y mi cargo es el de ${this.cargo}`)
    }
}


const empleado = new Empleados("Mario", "Albañil", 1200, true);

empleado.presentarse()
