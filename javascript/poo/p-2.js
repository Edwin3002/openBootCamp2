class Person {
    constructor(name, age, dev){
        this.name = name
        this.age = age
        this.dev = dev
    }
    saludo(){
        console.log(`hello there, i am ${this.name}`);
    }
}

const newPerson = new Person('edwin', 19, true)

console.log(newPerson);

let num = 60; ///inicializar
let person2 = new Person('paco', 20, false) //instanciar