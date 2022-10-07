function yes(){
    return true
}
function time(){
    return setTimeout(() => {
        console.log('soy promesa');
    }, 5000);
}

function idPar() {
    let id = 0
    while(true) {
        yield id += 2
    }
}