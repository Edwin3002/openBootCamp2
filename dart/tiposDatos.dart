void main(){
var name = 'paco';
var age = 19;
var dev = true;
print(name);
print(name.runtimeType);
print(age.runtimeType);
print(dev.runtimeType);
 rice();
}

void rice(){
  String name = 'pepe';
  int age = 32;
  double money = 57.3;
  bool dev = false;
  double peso;
  peso = 90.2;

  final lastName = 'ayala';
  const month = 12;

  print(name.toUpperCase());
  print(age);
  print(money);
  print(dev);
  print(peso);
  print(lastName);
  print(month);
  String letters = 'a e b c d e';
  print(letters.contains('a'));
  print(letters.contains('a  '));

  String email = ('vargas@gmail.com');
  print(email.split('@')[1]);
  print(email.startsWith('varg'));
  print(email.indexOf('@'));
}