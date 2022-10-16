class Cookie{

  String name ='Tom';
  int? age;
  bool? gluten;
  int? _time;

  Cookie(this.name, this.age, this._time){
    // this.name = name;
    // this.age = age;
  }
  Cookie.gluten(this.name, this.age, this.gluten){
  }

  set setTime(int time){
    _time = time;
  }

  int getTime() => _time!;

    void nacer(){
      print('estoy vivo?');
    }
    void dormir(){
      print('estoy dormido?');
    }
  }