let coche = class {
    constructor(puertas) {
        this.puertas = puertas;
    }

};
const coche1 = new coche(1)
function add (){
    coche1.puertas ++
}

console.log(coche1);
add()
console.log(coche1);
const miCoche = {
    puerta : 4
}
console.log(miCoche.puerta);