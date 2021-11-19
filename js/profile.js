// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");


// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }


  function updateUser(){
    var name =document.getElementById("MName").value;
    var email = document.getElementById("MEmail").value;
    var age = document.getElementById("MAge").value;
    var health = document.getElementById("MWorker").value ;


    const data = {
        "id": window.sessionStorage.getItem('uid'),
        "name": name,
        "email": email,
        "age":age,
        "doctorsId":health
    };

    fetch('http://localhost:9999/u/' + window.sessionStorage.getItem('uid'), {
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
            window.location.href = "http://127.0.0.1:5500/profile.html"
        })
        .catch((error) => {
            console.error('Error:', error);
        });


  }