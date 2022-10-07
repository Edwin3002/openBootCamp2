class Person {
    //privado
    #name  
    constructor(name, age){
        this.#name = name //privado
        this.age = age  //publico
    }
    #adios(){
        console.log(`bye there`);
    }
    saludo(){
        console.log(`hello there, i am ${this.name} and i have ${this.age}`);
    }
    getName(){
        return this.#name
    }
    setName(newName){
         this.#name = newName
    }
    //publico   // (SET)   nos permite acceder a atributos protegidos this.#name
    saludo2(){
        console.log(`hello there, i am ${this.#name} and i have ${this.age}`);
    }
}

const per = new Person('titi', 2)
console.log(per.name);
console.log(per.age);
per.saludo()
per.saludo2()
// per.adios()



// set cambiar el valor de atributos protegidos
// get obtener el valor de atributos protegidos