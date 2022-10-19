void main(){
  final now = DateTime.now();
  final moon = DateTime(1969,7,20,20,0,0);
  final fallWall = DateTime(1989,11,9);

  print(now);
  print(now.timeZoneName);
  print(moon);
  print(fallWall);
  print(fallWall.day);
  print(moon.isBefore(fallWall));
}