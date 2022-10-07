// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

// - Una variable que contenga tu altura en metros redondeada hacia arriba

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let cm = 181;

let mt = 18.1;

let kg = 80.1;

const alt = Math.ceil(mt)
const peso = Math.floor(kg)

const iguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
