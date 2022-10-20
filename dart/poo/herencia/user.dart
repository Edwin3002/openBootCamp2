import 'people.dart';

class Usuarios extends People{
  String nameUser;
  String password;
  Usuarios(String name, this.nameUser, this.password) : super(name);
}