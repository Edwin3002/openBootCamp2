import 'cookies.dart';

void main() {
  print('hola');
  Cookie tom = Cookie('tomi', 40);
  Cookie paco = Cookie.gluten('paco', 33, false);
  tom.nacer();
  tom.dormir();
  var name = tom.name;
  var age = tom.age;
  print('tu galleta se llama $name y tiene $age años');
  print(paco.gluten);

  bool? glu = paco.gluten;
  glu! ? print('azucar') : print('natural');
}
