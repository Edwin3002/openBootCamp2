void main(){
  int a = 10;
  int b = 25;

  // print(a + b);
  // print(a - b);
  // print(a * b);
  // print(a / b);
  // print(a ~/ b);
  // print(a % b);
  // a--;
  // print(a);
  // b++;
  // print(b);
  // print(a < b);
  // print(a > b);
  // print(a <= b);
  // print(a >= b);
  // print(a = b);
  // print(a != b);


  var c;

  c??=a;
  print(c);
  c += b;
  print(c);
  c *= b;
  print(c);


  bool dev = true;
  print(dev);
  print(!dev);

  bool verdad = a >20 || b >20;
  print(verdad);
  bool verdad2 = a >20 && b >20;
  print(verdad2);

  // condicion ? expresion1 : expresion2 

  dev ? print('soy desarrollador') : print(' no soy nada');
}