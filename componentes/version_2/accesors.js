
// Accesors


class Pais {
    get lang() {
        let languaje
        if (this.code == 'es') {
            languaje = 'Español'
        }
       return languaje; 
    } 
    set setjefe(name) {
        this._jefe = name.toLowerCase()
    }

    constructor(code) {
       this.code = code
    }
}

let p1 = new Pais('es')
console.log(p1.lang)
p1.setjefe = 'Pepe'
console.log(p1)