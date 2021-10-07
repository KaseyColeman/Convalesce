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


// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





