void main(){
  var cafe = Cafe();
  cafe.calentar();
  print(cafe.servir());
}

class Cafe{
  // late String _temp; //late esperar similar a await
  late final _temp;

  void calentar(){
    _temp = 'hot';
  }

  void enfriar(){
    _temp = 'cold';
  }

  String preparar(){
    print('preparando');
    return 'hot';
  }

  String servir() => 'este es u cafe $_temp';
}