const person  = {
    name: ' ed',
    age: '19',
    dev: true,
    saludo : function(){
        console.log(' hola');
    }
}

person.saludo()


const personTwo  = {
    name: 'paco',
    age: '22',
    dev: true,
    saludo : function(){
        console.log('adios');
    }
}
const personThree  = {
    name: 'pepe',
    age: '17',
    dev: false,
    saludo : function(){
        console.log('welcome');
    }
}

const createPerson = (name, age, dev) => {
    return{
        name, age, dev,
        saludo: function(){
            console.log(' hello create');
        }
    }
}

const newPerson = createPerson(' juan', 27, true)

console.log(newPerson);