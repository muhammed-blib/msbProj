
function validateLogin() {
    
    var userName = document.getElementsByClassName("username")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
   
    if (userName == "" || password == "") {
        
        alert("Please enter the user name and password");
        
    }
    if (userName == "adminForMsb" && password == "adminForMsb") {
        console.log("Login Successful");
        window.location.href = "admin.html";
       

    }
    if (userName == "user" && password == "user") {
        console.log("Login Successful");
        window.location.href = "user.html";
       

    }
    else {
        document.getElementsByClassName("message")[0].innerHTML = "Invalid username or password";
          
        setTimeout(function () {
            document.getElementsByClassName("message")[0].innerHTML = "";
        }, 2000);


    } 

}
document.getElementById("submitBtn").addEventListener("click", validateLogin);