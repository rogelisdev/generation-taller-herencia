import {Contenido} from "./segundo-ejercicio.js"

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `
        TITULO: ${this.titulo}
        GENERO: ${this.genero}
        AÑO: ${this.anio}
        TEMPORADAS: ${this.temporadas}
        TOTAL EPISODIOS: ${this.totalEpisodios()}
        `;
    }
}

let serie = new Serie("Breaking Bad", "Drama", 2008, 5);
serie.registrarEpisodios(13);
console.log(serie.ficha());
