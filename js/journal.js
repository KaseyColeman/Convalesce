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
            'Host':'convalesce.auth',
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

        document.getElementById("entryDate").value =null;
        document.getElementById("entryTitle").value = null;
        document.getElementById("entry").value = null;
}