import 'people.dart';
import 'job.dart';

class Usuarios extends People with Job{
  String nameUser;
  String password;
  

  Usuarios(String name, this.nameUser, this.password) : super(name);
}