void main(){
  String cien = '100';

  int dosCien = 200;

  int tresCien = dosCien + int.parse(cien);

  String num = dosCien.toString() + cien;

  print(tresCien);
  print('valor: ' + num);
}