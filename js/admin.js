// document.getElementById("addInput").addEventListener("click", function(){
//     var newInput = document.createElement("input");
//     newInput.setAttribute("type", "text");
//     newInput.setAttribute("name", "input");
//     newInput.setAttribute("placeholder", "input name");
//     newInput.setAttribute("id", "input");
//     document.getElementById("inputs").appendChild(newInput);
    
//     var newSelect = document.createElement("select");
//     newSelect.setAttribute("name", "inputType");
//     newSelect.setAttribute("id", "inputType");
//     var option1 = document.createElement("option");
//     option1.setAttribute("value", "text");
//     option1.innerHTML = "text";
//     var option2 = document.createElement("option");
//     option2.setAttribute("value", "number");
//     option2.innerHTML = "number";
//     var option3 = document.createElement("option");
//     option3.setAttribute("value", "email");
//     option3.innerHTML = "email";
//     var option4 = document.createElement("option");
//     option4.setAttribute("value", "password");
//     option4.innerHTML = "password";
//     newSelect.appendChild(option1);
//     newSelect.appendChild(option2);
//     newSelect.appendChild(option3);
//     newSelect.appendChild(option4);
//     document.getElementById("inputs").appendChild(newSelect);
//     //generate separator between inputs
//     var newSeparator = document.createElement("hr");
//     newSeparator.setAttribute("id", "separator");
//     document.getElementById("inputs").appendChild(newSeparator);

    
    

// });


document.getElementById("save").addEventListener("click", function(){

    
    var data = {
        "eventName": document.getElementById("area-name").value,
        "date": document.getElementById("area-date").value,
        "eventPlace": document.getElementById("area-place").value,
        "id": document.getElementById("area-id").value,
        "description": document.getElementById("area-desc").value,
        "price": document.getElementById("area-price").value,
    };

    if (data.eventName == "" ||   data.id == "" || data.eventPlace== "") {
        alert("Please fill all the fields");
    } else {
    fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        //if the data sent successfull alert the user
    
    }).then(function(response){
        alert("Data saved");
        return response.json();
       
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(error);
    });
}
});
