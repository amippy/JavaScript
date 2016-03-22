document.writeln('Hey');

var msg = "yahoo!hehe";
document.writeln(msg);

var array = ['ami','amigo','amippy'];
document.writeln(array[2]);

var x = 20;
if(x >= 10){
  document.writeln('変数xは１０以上です。');
}else{
  document.writeln('変数xは１０以下です。')
}

var y = 100;
if(y > 50){
  document.writeln('yは50より大きい');
}else{
  document.writeln('yは50より小さい');
}

var rank = 'O';
switch (rank) {
  case 'A':
  document.writeln('Aランク');
  break;

  case 'B':
  document.writeln('Bランク');
  break;

  case 'C':
  document.writeln('Cランクです');
  break;

  default:
  document.writeln('ランク外です。。。。')
}
