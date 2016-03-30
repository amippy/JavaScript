function watch(){

  var ele = document.getElementById("target");

  ele.innerHTML = Date().toLocaleString();

  window.setTimeout("watch()", 1000);
}

document.writeln('Hello');

var msg = 'You gonna be great!';
document.writeln(msg);
