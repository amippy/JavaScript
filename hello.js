document.writeln('HelloWorld');


var msg = 'What da fuck are you doing!'
document.writeln(msg);

var x = 10;
if(x > 5){
  document.writeln('変数xは５より大きい数！');
}else{
  document.writeln('変数xは５より小さい数！');
}

var signal = 'red';
switch(signal){
  case 'red':
  document.writeln('渡ってはいけません！');
  break;

  case 'yellow':
  document.writelm('危ないですよ！');
  break;

  case 'blue':
  document.writeln('渡ってください！');
  break;
}

var x = 10;
while(x < 20){
  document.writeln('xの値は'+ x);
  x++;
}

var fuck = 20;
do{
  document.writeln(fuck + '回目のfuck');
  fuck++;
}while(fuck < 30);

x = 10;
while(x < 20){
  document.writeln('xの値は' + x);
  x++;
}

x = 3;
do{
  document.writeln('xの値は' + x)
  x++;
}while(x < 5);
