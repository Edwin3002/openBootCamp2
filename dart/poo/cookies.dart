class Cookie{

  String name ='Tom';
  int? age;
  bool? gluten;

  Cookie(this.name, this.age){
    // this.name = name;
    // this.age = age;
  }
  Cookie.gluten(this.name, this.age, this.gluten){
  }

    void nacer(){
      print('estoy vivo?');
    }
    void dormir(){
      print('estoy dormido?');
    }
  }