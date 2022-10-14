import 'dart:io';

void main(){

  var n = 5;
  while(n >0){
    print('buen dia ');
    print(n);
    n--;
  }


  var iter = 10;

  for(var i = 0; i <= iter; i++){
    print(i);
  }
  while(true){
    String? linea = stdin.readLineSync();
    print('texto:' + linea.toString());
  }
}