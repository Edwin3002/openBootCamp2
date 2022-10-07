void main(List<String> arguments){
  var setFisrt = <String>{'pepe', 'paco', 'luz'};

  print(setFisrt);
  setFisrt.add('david');
  setFisrt.add('pepe');
  print(setFisrt);
  setFisrt.remove('david');
  print(setFisrt);
  print(setFisrt.elementAt(2));
  setFisrt.clear();
  print(setFisrt);
}