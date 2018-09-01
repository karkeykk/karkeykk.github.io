var para = document.createElement("p");
var node = document.createTextNode("This is new para.");
para.appendChild(node);

var el = document.getElementsByClassName("login-box-msg")
el[0].appendChild(para);
var str= "<p>This</p>";
console.log("hiiiii");
el[0].insertAdjacentHTML("beforeEnd",str);




var temp = document.createElement('div');
temp.innerHTML = str;
while (temp.firstChild) {
  el[0].appendChild(temp.firstChild);
}
