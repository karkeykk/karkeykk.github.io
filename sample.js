var para = document.createElement("p");
var node = document.createTextNode("This is new para.");
para.appendChild(node);

var el = document.getElementsByClassName("login-box")
el[0].appendChild(para);
var str= '<p>This is a new paragraph</p>';
console.log(document.getElementsByClassName("login-box"));
//el[0].insertAdjacentHTMl('afterEnd',str);




var temp = document.createElement('div');
temp.innerHTML = str;
while (temp.firstChild) {
  el[0].appendChild(temp.firstChild);
}