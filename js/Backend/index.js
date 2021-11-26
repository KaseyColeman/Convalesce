const Cuser = null

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------COOKIE

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- LOGIN

function login() {
    const lname = document.getElementById("uname1").value;
    const lpass = document.getElementById("psw1").value;

    const data = {
        "username": lname,
        "password": lpass
    };

    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/log";
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    request.onload = () => {
        alert(request.responseText.id);
        setCookie("ID", request.responseText.id, 1);
        if (request.responseText.Authority == "DOC") {
            window.location.href = "http://127.0.0.1:5500/health-provider-dash.html";
        }
        else if (request.responseText.Authority == "ADMIN") {
            window.location.href = "http://127.0.0.1:5500/admin-dashboard.html";
        }
        else if (request.responseText.Authority == "CLIENT") {
            window.location.href = "http://127.0.0.1:5500/patient-dashboard.html";
        }

    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------CREATEACCOUNT


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
        "age": birth,
        "pronouns": [pronoun],
        "authority": "CLIENT"
    };

    fetch('http://localhost:9999/u', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            //window.sessionStorage.setItem('uid',data.id);
            setCookie("ID", "uid=" + "" + data.id, 1);
            window.location.href = "http://127.0.0.1:5500/patient-dashboard.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });


}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------LOGOUT

function onLogout() {
    window.sessionStorage.clear();
    window.location.href = "http://127.0.0.1:5500/index.html";
    document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function destroy() {
    window.location.href = "http://127.0.0.1:5500/login.html";
    document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function SaveJournal() {
    var date = document.getElementById("entryDate").value;
    var entryName = document.getElementById("entryTitle").value;
    var entry = document.getElementById("entry").value;
    var userId = window.sessionStorage.getItem('uid');

    const data = {
        "id": 0,
        "date": date,
        "entryName": entryName,
        "entry": entry,
        "userId": userId
    };

    fetch('http://localhost:9999/j', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Journal Is created Successfully");
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    document.getElementById("entryDate").value = null;
    document.getElementById("entryTitle").value = null;
    document.getElementById("entry").value = null;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function updateUser() {
    var name = document.getElementById("MName").value;
    var email = document.getElementById("MEmail").value;
    var age = document.getElementById("MAge").value;
    var health = document.getElementById("MWorker").value;


    const data = {
        "id": window.sessionStorage.getItem('uid'),
        "name": name,
        "email": email,
        "age": age,
        "doctorsId": health
    };

    fetch('http://localhost:9999/u/' + getCookie("ID"), {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




function sliderSave() {
    var slider1 = document.getElementById("myRange1");

    var slider2 = document.getElementById("myRange2");

    var slider3 = document.getElementById("myRange3");

    var slider4 = document.getElementById("myRange4");

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

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


























