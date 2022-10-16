import 'cookies.dart';

void main() {
  print('hola');
  Cookie tom = Cookie('tomi', 40, 5);
  Cookie paco = Cookie.gluten('paco', 33, false);
  tom.nacer();
  tom.dormir();
  var name = tom.name;
  var age = tom.age;
  tom.setTime = 4;
  var time = tom.getTime();
  print('tu galleta se llama $name y tiene $age años y tiene $time min en el horno');
  print(paco.gluten);

  bool? glu = paco.gluten;
  glu! ? print('azucar') : print('natural');
}
