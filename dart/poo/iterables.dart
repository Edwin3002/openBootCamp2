void main(){
  // List
  // Set
  // Map
  Iterable<int> iter = [1,2,3,4,5];

  List<int> list = [1,2,3,4,5];

  list[1];
  // iter[1]; da error
  iter.elementAt(1);

  Iterable<String> alimen = ['tomate', 'carne', 'huevos'];

  for (String alim in alimen) {
    print(alim);
  }


  var elementoFind = alimen.firstWhere((element) => element.startsWith('t'));
  print(elementoFind);

  var elementoFind2 = alimen.firstWhere((element) => element.startsWith('w'), orElse: () => 'No existe');
  print(elementoFind2);

  var single = alimen.singleWhere((element) => element.contains('o') && element.startsWith('h'));
  print(single);
  
  var every = alimen.every((element) => (element.length>7));
  print(every);

  var any = alimen.any((element) => (element.length>5));
  print(any);

  Iterable<User> users = [User(12, ' luis'),User(19, ' paco'), User(15, ' sol'), User(21, ' rosa')];

var todos = users.every((user) => user.age > 15);
print(todos);

var todos2 = users.any((user) => user.age > 18);
print(todos2);

}

class User{
  var age;
  var name;

  User(this.age, this.name);
}