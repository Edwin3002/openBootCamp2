class People {
  String? _name;
  int? age;
  String? number;
  // address

  People(this._name, {this.age, this.number});

  get getName => this._name;
  set setName(value) => this._name = value;

  String talk(String text){
    return '$_name habla y dice $text';
  }
}
