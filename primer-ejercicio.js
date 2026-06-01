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

    calcularSalarioAnual() {
        let calcular = this.salario * 12
        console.log(`Tu salario anual es de: ${calcular}`)
        return calcular;
    }

    desactivar() {
        if (this.activo === true) {
            this.activo = false
            console.log(`El empleado ${this.nombre} su estado es : ${this.activo}`)
        } else {
            console.log(`El empleado ${this.nombre} su estado es : ${this.activo}`)
        }

    }

    info(){
        console.log(`Datos del trabajador:\n
        NOMBRE: ${this.nombre}, \n
        SALARIO: ${this.salario}, \n
        CARGO: ${this.cargo}, \n
        ESTADO: ${this.activo}`) 
    }

}


const empleado = new Empleados("Mario", "Albañil", 1200, true);

empleado.presentarse()
empleado.calcularSalarioAnual()
empleado.desactivar()
empleado.info()
