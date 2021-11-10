var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("dumb1");

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

slider1.oninput = function () {
  output1.innerHTML = this.value;
}

slider2.oninput = function () {
  output2.innerHTML = this.value;
}


slider3.oninput = function () {
  output3.innerHTML = this.value;
}


slider4.oninput = function () {
  output4.innerHTML = this.value;
}

function sliderSave() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const data = {
    "id": 0,
    "date": today,
    "slider1": slider1.value,
    "slider2": slider2.value,
    "slider3": slider3.value,
    "slider4": slider4.value,
    "userId": window.sessionStorage.getItem('uid')
  };

  fetch('http://localhost:8082/eslider/c', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}