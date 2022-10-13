import 'dart:io';

void main(){

  var sky = 'blue';

  if(sky == 'blue'){
    print('cielo si es azul');    
  }else if(sky == 'blanco'){
    print('cielo no es azul, es blanco');
  }else{
    print('ni azul, ni blanco');

  }


  //switch
  var dev = 'pepe';
  switch (dev) {
    case 'paco':
        print('soy el dev paco');
      break;
    case 'pepe':
        print('soy el dev pepe');
      break;
    default:
        print('soy el dev desconocido');
  }


//game
print(' como te llamas?');

String name = stdin.readLineSync()!;

print('vas por una road, vas a la right o left?');
print('right or left');
String adrees = stdin.readLineSync()!;

if(adrees == 'left'){
  
  print('llegas a un parque');
}else if(adrees == 'right'){
  print('llegas a un cine');
}else{
  print(' you lose');
}


}