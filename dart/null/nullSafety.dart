void main(){
  var numero;
  numero = null;

  assert(numero != null);
  if(numero == null){
    // exit(0);  //no se porque no funciona
  }
  int calcular(int numero){
    return numero * numero;
  }
  calcular(numero);

  String? nombre = getName('paco campos');
}

void openSocket(int? port){

}

String? getName(String name){
  var partes = name.split('');
  return partes.length > 1 ? partes[1] : null;


  int? quizasValor;
  int valor = quizasValor!;   // ! permite asignarle una variable que contenga "?" example: datos? 
  
}