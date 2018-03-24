var url = new URL(window.location.href);
var tyyp = url.searchParams.get("tyyp");
var nr = parseInt(url.searchParams.get("nr"));
var index;

if(tyyp == 'firma'){
  if(nr == 1){
    index = 0;
  }else if (nr == 2) {
    index = 1;
  }else if (nr == 3) {
    index = 2;
  }
}else if (tyyp == 'pulm') {
  if(nr == 1){
    index = 3;
  }else if (nr == 2) {
    index = 4;
  }else if (nr == 3) {
    index = 5;
  }
}else if (tyyp == 'synna') {
  if(nr == 1){
    index = 6;
  }else if (nr == 2) {
    index = 7;
  }else if (nr == 3) {
    index = 8;
  }
}else if (tyyp == 'kodukokk') {
  if(nr == 1){
    index = 9;
  }else if (nr == 2) {
    index = 10;
  }else if (nr == 3) {
    index = 11;
  }
}
document.getElementById('form-control').selectedIndex = index;
