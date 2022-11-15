void main(){
  String? name;
  try {
    String nameMayus = name!.toUpperCase();
  } catch (e) {
    print("Error in toUpperCase ${e.toString()}");
    
  }
}