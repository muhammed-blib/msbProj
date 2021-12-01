







document.getElementById("submit").addEventListener("mousedown", submit);

function submit() {
    var data = {
        "first": document.getElementById("first").value,
        "last": document.getElementById("last").value,
        "email": document.getElementById("email").value,
        "phone": document.getElementById("phone").value,
        "id": document.getElementById("id").value,
    };
    
    if (data.email == "" || data.phone == "" || data.id == "") {
        alert("Please fill all the fields");
    } else {
    fetch("http://localhost:8080/api/attendants", {
        method: "POST",
        headers: {
            
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(data)

    }).then(function (response) {
        if (response.status === 201) {
            
            alert("Successfully added");
          
            
            

            var qrcode = new QRCode(document.getElementById("qrcode"), {
                   //when going to production change to the new url
               text: "user-detail.html",
               width: 128,
               height: 128,
               colorDark: "#000000",
               colorLight: "#ffffff",
               correctLevel: QRCode.CorrectLevel.H
           });
       

        } else {
            alert("Failed to add check the accuracy of the data");
           
        }
    
    
    }).catch(function (error) {
        alert("Failed to add check the accuracy of the data");
    });
}
 }


// document.getElementById("event-sub").addEventListener("mousedown", getData);

// function getData() {
//     fetch("http://localhost:8080/api/events", {
//         method: "GET",
//         headers: {
//             "Authorization": "Basic " + btoa("user" + ":" + "6a78742a-8934-4e64-aa3b-aebf0485bb0c"),
//             "Content-Type": "application/json"
//         }
//     }).then(function (response) {
//         return response.json();
//     }).then(function (data) {    
//         console.log(data);
//         for (i=0; i<data._embedded.events.length; i++) {
//          document.getElementById("name").innerHTML += data._embedded.events[i].eventName;
       
//         document.getElementById("place").innerHTML += data._embedded.events[i].eventPlace;  
//         document.getElementById("start").innerHTML += data._embedded.events[i].startDate;
//         document.getElementById("end").innerHTML += data._embedded.events[i].endDate;
//         document.getElementById("desc").innerHTML += data._embedded.events[i].description;
//         }
//     }).catch(function (error) {


//         console.log(error);


//     });

// }



function redirect() {
    window.location.href = "user-detail.html";
}


document.getElementById("qrcode").onclick = redirect;