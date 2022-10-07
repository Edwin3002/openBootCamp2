class Student {
    constructor(name, asig){
        this.name = name
        this.asig = asig
    }
    getData(){
        return this.name, this.asig
    }
}

const s1 = new Student('pepe', ['html', 'css', 'js'])

console.log(s1);