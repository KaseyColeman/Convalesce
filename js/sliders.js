var slider1 = document.getElementById("myRange1");
var output1= document.getElementById("dumb1");

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("dumb2");

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("dumb3");

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("dumb4");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
}


slider3.oninput = function() {
  output3.innerHTML = this.value;
}


slider4.oninput = function() {
  output4.innerHTML = this.value;
}

