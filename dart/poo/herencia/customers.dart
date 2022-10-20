import 'people.dart';
import 'worker.dart';

void main() {
  People paco = People('paco', age: 30, number: '12345');

  print(paco.age);
  print(paco.getName);

  //herencia
  Worker pedro = Worker('luis', 1500);

  People daniel = paco;
  print(daniel.runtimeType);

  print('el worker se llama: ${pedro.getName}');

  print(paco.talk('wenas'));
  print(pedro.talk('noches'));
  pedro.walk();
  print(daniel.talk('manito suave'));
}
