void main(){
  var gastos = [1.23, 15.3, 23.2, 37.9, 44.8];

  int cuenta = 0;

  double suma = 0;

  for(var gasto in gastos){
    cuenta++;
  }

  print('el total de gastos $cuenta');

  for(var gasto in gastos){
    suma += gasto;
  }

  var sumaFixed = suma.toStringAsFixed(2);

  print('el total es $sumaFixed en dolares');

}