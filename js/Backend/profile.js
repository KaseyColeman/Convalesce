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