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

    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/log/"+lname+"/"+lpass;
    request.open("POST", theUrl);
    request.send();
    request.onload = () => {

        var splitResponse = request.responseText.split( "," );

        var auth1 = splitResponse[9];
        var auth2 = auth1.split(":");
        var auth3 = auth2[1];
        var auth4 = auth3.split("}");
        var auth5 = auth4[0];
        var auth6 = auth5.split('"');
        var auth7 = auth6[1]

        var secondDropdownContent = splitResponse[0]
        var idd = secondDropdownContent.split(":");
        var id = idd[1];

        setCookie("ID",id, 1);

        if (auth7 == "DOC") {
            window.location.href = "http://127.0.0.1:5500/health-provider-dash.html";
        }
        else if (auth7 == "ADMIN") {
            window.location.href = "http://127.0.0.1:5500/admin-dashboard.html";
        }
        else if (auth7 == "CLIENT") {
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

    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/u";
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    request.onload = () => {
        alert(request.responseText.id);
        if(request.responseText == null){
            alert("Username is Already Taken")
        }else{
            setCookie("ID", request.responseText.id, 1);
            window.location.href = "http://127.0.0.1:5500/patient-dashboard.html";
            
        }
        
    }

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


    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/j";
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    request.onload = () => {
        alert("Journal Is created Successfully");

        document.getElementById("entryDate").value = null;
        document.getElementById("entryTitle").value = null;
        document.getElementById("entry").value = null;
    }
}

function getJournals(){
    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/jj"+getCookie(ID);
    request.open("GET", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    request.onload = () => {
        alert("Journals Fetched Correctly");

        document.getElementById("entryDate").value = null;
        document.getElementById("entryTitle").value = null;
        document.getElementById("entry").value = null;
    }
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

    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/u/" + getCookie(ID);
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    request.onload = () => {
        alert("Updated Successfully");
        window.location.href = "http://127.0.0.1:5500/profile.html"

    }
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

    const request = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:9999/s";
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    request.onload = () => {
        alert("Updated Successfully");
        window.location.href = "http://127.0.0.1:5500/chart.html"
    }
}

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


























