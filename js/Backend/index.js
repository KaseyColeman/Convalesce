const Cuser = null


function login() {
    const lname = document.getElementById("uname1").value;
    const lpass = document.getElementById("psw1").value;

    const data = {
        "username": lname,
        "password": lpass
    };

    fetch('http://localhost:9999/log', {
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
            window.sessionStorage.setItem('uid',data.id);
            if(data.authority == "DOC"){
                window.location.href = "http://127.0.0.1:5500/health-provider-dash.html";
            }
            else if (data.authority == "ADMIN"){
                window.location.href = "http://127.0.0.1:5500/admin-dashboard.html";
            }
            else{
                window.location.href = "http://127.0.0.1:5500/patient-dashboard.html";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });   
}

function createAccount() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    var name = document.getElementById("nam").value;
    var email = document.getElementById("email").value;
    var birth = document.getElementById("birth").value;
    var pronoun = document.getElementById("pronouns").value;

    const data = {
        "id": 0,
        "name": name,
        "username": username,
        "password": password,
        "email": email,
        "age":birth,
        "pronouns": [pronoun],
        "authority": "CLIENT"
    };

    fetch('http://localhost:9999/u', {
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
            window.sessionStorage.setItem('uid',data.id);
            window.location.href = "http://127.0.0.1:5500/patient-dashboard.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    
}

function onLogout(){
    window.sessionStorage.clear();
    window.location.href = "http://127.0.0.1:5500/index.html";
}

