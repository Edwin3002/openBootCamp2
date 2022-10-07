// enga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función


function fibo(num){
    let x = 0
    let z = []
    for (let index = 0; index < num; index++) {
        x = index
        if (z[2]) {
            z.push(z[z.length-1] +z[z.length-2])
        }else if(z[1]){

            z.push(1)
        }else{
            z.push(x)
        }
        console.log(z);
    }
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

fibo(11)