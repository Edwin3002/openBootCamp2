import 'food.dart';

void main(){
  List uno = [
    'lusi',
    3,
    bool,
    4.5,
    [1,2,3],
    {
      'uno':'1',
      'tres' : 2
    }
  ];
  List<String> dos = ['luis', 'paco', 'pepe'];
  List<int> tres = [];
  tres.add(1);
  tres.add(5);

  Set<String> cuatro = {};
  cuatro
  ..add('a')
  ..add('b')
  ..add('c');

  for(String element in cuatro){
    print(element);
  }

  Map <String,int> cinco = {
    'luis':1,
    'luz':2,
    'sol':3,
    'luna':4
};
print(cinco);

//compra


Food tomatoes = Food('tomatoes', 1.2);
Food mushroom = Food('mushroom', 1.9);

List <Food> listaCompra = [];

listaCompra.add(tomatoes);
listaCompra.add(mushroom);
listaCompra.add(Food('apples', 1.5));

}