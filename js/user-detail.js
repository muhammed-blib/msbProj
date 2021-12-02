

document.getElementById("submitid").addEventListener("mousedown", getDataForUser);
function getDataForUser() { 
    fetch("http://localhost:8080/api/attendants/search/findAttendantByPhone?phone=" + document.getElementById("userphone").value, {
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
                    
                    
                 
                    document.getElementById("name1").innerHTML = data.name;
                    document.getElementById("email").innerHTML = data.email;
                    document.getElementById("phone").innerHTML = data.phone;
                 


            
                }
        

    }).catch(function (error) {

        console.log(error);

    });
}


document.getElementById("submitget").addEventListener("mousedown", getDataForEvents);


function getDataForEvents() {
    fetch("http://localhost:8080/api/events/", {
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa("user" + ":" + "6a78742a-8934-4e64-aa3b-aebf0485bb0c"),
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {    
        console.log(data);
     
        

        
        for (i=0; i<data._embedded.events.length; i++) {
                

                document.getElementById("name").innerHTML += data._embedded.events[i].eventName + "<br>";
                
                document.getElementById("place").innerHTML += data._embedded.events[i].placeEvent + "<br>" ;
                document.getElementById("desc").innerHTML += data._embedded.events[i].description + "<br>";
                document.getElementById("price").innerHTML += data._embedded.events[i].priceEvent + "<br>" ;
                
                
            
            
         }
         
        
           
    }).catch(function (error) {


        alert(error);

    });

}

document.getElementById("submitname").addEventListener("mousedown", getDataForEventsByName);
//type the function getDataForEventsByName
function getDataForEventsByName() {
    fetch("http://localhost:8080/api/events/search/findByEventName?eventName=" + document.getElementById("name").value, {
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa("user" + ":" + "6a78742a-8934-4e64-aa3b-aebf0485bb0c"),
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {    
        console.log(data);
        for (i=0; i<data._embedded.events.length; i++) {
         document.getElementById("name").innerHTML += data._embedded.events[i].eventName;
       
        document.getElementById("place").innerHTML += data._embedded.events[i].placeEvent;  
       
        document.getElementById("desc").innerHTML += data._embedded.events[i].description;
        document.getElementById("price").innerHTML += data._embedded.events[i].priceEvent;
        }
    }).catch(function (error) {

            
            alert(error);
    
        });


}
