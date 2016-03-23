function watch(){

  var ele = document.getElementById("target");

  ele.innerHTML = Date().toLocaleString();

  window.setTimeout("watch()", 1000);
}
