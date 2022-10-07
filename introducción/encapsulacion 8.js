let Persona = class {
    constructor() {
        this.name = '';
        this.edad = '';
        this.telefono = '';
    }
}
const person1 = new Persona()
const objName = {
    get prop() {
        return person1.name;
    },
    set prop(value) {
        person1.name = value;
    },
};

const objEdad = {
    get prop() {
        return person1.edad;
    },
    set prop(value) {
        person1.edad = value;
    },
};

const objTelefono = {
    get prop() {
        return person1.name;
    },
    set prop(value) {
        person1.telefono = value;
    },
};

objName.prop = 'Paco'
objEdad.prop = '19'
objTelefono.prop = '54321'
console.log(person1.name);
console.log(person1.edad);
console.log(person1.telefono);
console.log(person1);
