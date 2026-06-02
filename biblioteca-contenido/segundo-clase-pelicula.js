import { Contenido } from "./segundo-ejercicio.js";

export class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio)
        this.duracion = duracion;
    }

    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60)
        let minutos = this.duracion % 60;

        return `${horas}h ${minutos}min`
    }

    ficha() {
        return `
        TITULO: ${this.titulo}
        GENERO: ${this.genero}
        AÑO: ${this.anio}
        DURACION: ${this.duracionFormateada()}
        `;
    }
}

let peli = new Pelicula("Avengers", "Acción", 2019, 94);
console.log(peli.ficha());