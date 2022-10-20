import 'people.dart';
import 'walker.dart';

class Worker extends People implements Walker{
  double salary;

  Worker(String name, this.salary): super(name);

  String talk(String text){
    return super.talk(text) + ' se trata de un worker';
  }

  @override
  void walk(){
    print('camino como worker');
  }
}