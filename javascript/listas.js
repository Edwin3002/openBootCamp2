// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const list = ['azul', 'rojo', 'amarillo', 'verde', 'negro'];

list.push('girasol')

console.log(list);

const films = [
    {
        titulo: 'vengadores',
        fecha: '2012',
        director: 'a'
    },
    {
        titulo: 'hulk',
        fecha: '2008',
        director: 'b'
    },
    {
        titulo: 'avatar',
        fecha: '2010',
        director: 'c'
    },
    
]

const films2 = films.filter(fi=>fi.fecha < 2011)

let direc = []
films.map(fi=>{
    direc.push(fi.director)
})

let title = []
films.map(fi=>{
    title.push(fi.titulo)
})

let two = direc.concat(title)


const direct_title = [...direc, ...title]
console.log(two);
console.log(direct_title);