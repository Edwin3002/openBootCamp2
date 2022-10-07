
enum usersState{
  notLogged, logged, logging, register
}

void main(){
  var state = usersState.notLogged;

  print(state);
  state = usersState.logged;
}

