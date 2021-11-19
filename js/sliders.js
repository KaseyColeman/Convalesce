var slider1 = document.getElementById("myRange1");

var slider2 = document.getElementById("myRange2");

var slider3 = document.getElementById("myRange3");

var slider4 = document.getElementById("myRange4");

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

  fetch('http://localhost:9999/s', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Host':'convalesce.auth',
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