// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


let me = {
    name: 'sara',
    lastName: 'ayala',
    age: 19,
    alture: 181,
    dev: true
}
const meAge = me.age

const team =[
    {
        name: 'ed',
        lastName: 'campos',
        age: 22,
        alture: 171,
        dev: false
    },
    {
        name: 'paco',
        lastName: 'rey',
        age: 17,
        alture: 199,
        dev: true
    },
    {
        ...me
    }
]

const newList = team.sort((a, b) =>a.age + b.age
)

console.log(newList);