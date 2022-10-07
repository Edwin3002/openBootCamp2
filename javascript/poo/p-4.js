//  herencia

class Person {
    constructor(name, age, dev) {
        this.name = name
        this.age = age
    }
    saludo() {
        console.log(`hello there, i am ${this.name} and i have ${this.age}`);
    }
}
class Dev extends Person {
    constructor(name, age, language){
        super(name, age)
        this.language = language
    }
}

const newDev = new Dev(' ed' , 20,'js');

console.log(newDev);
newDev.saludo()

