







document.getElementById("submit").addEventListener("mousedown", submit);

//create function submit that sends the data name email phone to backend server use fetch
function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var data = {
        name: name,
        email: email,
        phone: phone
    };

    fetch("http://localhost:8080/api/attendants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
            alert("Error: " + error);
        });
        //if data is created alert to user that data is created
        alert("Data is created");
        //generate qr code that redirect to user-detail.html
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            //will be changed in future
            text: "user-detail.html",
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        
}





function redirect() {
    window.location.href = "user-detail.html";
}


document.getElementById("qrcode").onclick = redirect;