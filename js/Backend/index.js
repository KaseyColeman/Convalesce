let currentData = null

fetch('http://localhost:8080/health')
    .then(response => response.json())
    .then(data => currentData=data);

const lname =  document.getElementById("uname1");
const lpass = document.getElementById("psw1");

lname.onchange = function (){
    console.log("wee");
    console.log(lname.value);
    console.log(currentData);
}

function login(){
    console.log(lname.value);
    console.log(lpass.value);

    if(lname.value == "kcoleman@student.neumont.edu"){
        window.location.replace = "http://127.0.0.1:5500/patient-dashboard.html"; 
    }
    window.location.replace = "http://127.0.0.1:5500/index.html"; 
}

// function validate(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if ( username == "Formget" && password == "formget#123"){
//     alert ("Login successfully");
//    // Redirecting to other page.
//     return false;
//     }