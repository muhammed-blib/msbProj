




document.getElementById("submitid").addEventListener("mousedown", getDataForUser);
function getDataForUser() { 
    fetch("http://localhost:8080/api/attendants/" + document.getElementById("userid").value, {
        method: "GET",
        headers: {
             "Authorization": "Basic " + btoa("user" + ":" + "6a78742a-8934-4e64-aa3b-aebf0485bb0c"),
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        
               
                
                if (data.length == 0 || data.email == "" || data.phone == "" || data.id == ""){
                    alert("No data in the database please enter a data");
                }
                else {
                    
                    
                 
                    document.getElementById("email").innerHTML = data.email;
                    document.getElementById("first").innerHTML = data.first;
                    document.getElementById("last").innerHTML = data.last;
                    document.getElementById("email").innerHTML = data.email;
                    document.getElementById("phone").innerHTML = data.phone;
                    document.getElementById("id").innerHTML = data.id;


            
                }
        

    }).catch(function (error) {

        console.log(error);

    });
}



document.getElementById("submitget").addEventListener("mousedown", getDataForEvents);

function getDataForEvents() {
    fetch("http://localhost:8080/api/events", {
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa("user" + ":" + "6a78742a-8934-4e64-aa3b-aebf0485bb0c"),
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {    
        console.log(data);
        for (i=0; i<data._embedded.events.length; i++) {
         document.getElementById("name").innerHTML += data._embedded.events[i].eventName;
       
        document.getElementById("place").innerHTML += data._embedded.events[i].eventPlace;  
        document.getElementById("id").innerHTML += data._embedded.events[i].id; 
        document.getElementById("desc").innerHTML += data._embedded.events[i].description;
        document.getElementById("price").innerHTML += data._embedded.events[i].price;
        }
    }).catch(function (error) {


        console.log(error);


    });

}