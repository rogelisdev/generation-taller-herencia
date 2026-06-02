export class Contenido{
    constructor(titulo, genero, anio, disponible = true){
        this.titulo = titulo
        this.genero = genero 
        this.anio = anio
        this.disponible = disponible
    }

    ficha(){
        return `TITULO: ${this.titulo}, GENERO: ${this.genero}, AÑO: ${this.anio}`
    }

    retirar(){
        this.disponible = !this.disponible
         console.log(`El contenido ${this.titulo} fue retirado: ${this.disponible}`)
    }

    estado(){
        if(this.disponible){
            console.log(`El contenido ${this.titulo} esta disponible`)
        } else {
            console.log(`El contenido ${this.titulo} esta retirado`)
        } 
    }
}
