void main(){
  print('hola');

//recursividad
  int factorial(int n){
    if(n == 1){
      return 1;
    }else{
      return n*factorial(n-1);
    }
  }

  print(factorial(5));


  //anonimas

  var names = ['paco','hugo','luis'];

  names.forEach((e) {
    print(e);
  });

  //sintaxis corta, arrow func

  void printGHello() => print('ello paco');
  printGHello();

//cascada

var listn = [3];
listn.add(1);
listn.add(5);
listn.add(6);

listn.forEach(print);
var listn2 = [5];
listn2..add(6)
..add(9)
..add(2);

listn2.forEach(print);

}