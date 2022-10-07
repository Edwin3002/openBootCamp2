void main (){
  var fisrtList = [10, 15, 55];
  var secondList = [' paco', ' pepe', 'rosa'];
  var thirdList = [
    [' paco2', ' pepe2', 'rosa2'],
    [10, 15, 20]
    ];

print(fisrtList.length);
print(fisrtList[fisrtList.length-1]);
print(fisrtList[1]);
print(fisrtList);
print(secondList);
print(thirdList);
print(thirdList[0][1]);

var listFija = List.filled(4, '', growable: false);
listFija[2] = 'loco';

print(listFija);
}