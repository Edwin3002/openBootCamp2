import 'worker.dart';

  final _valorcambio = 1.11;

extension WorkerExtension on Worker{

  double conversorUsd(double salary){

    return salary * getvalorCambio();
  }
  static double getvalorCambio(){
    return _valorcambio;
  }
}