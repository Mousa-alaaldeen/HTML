var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginSubmit = document.getElementById("loginSubmit");

function loginUser(event) {
    event.preventDefault(); 

    if (loginEmail.value === "" || loginPassword.value === "") {
        alert("Both fields are required!");
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var validUser = users.find(function(user) {
        return user.email === loginEmail.value && user.password === loginPassword.value;
    });

    if (validUser) {
        alert("Login successful!");

       
        localStorage.setItem("isLoggedIn", "true");
        
        window.location.href = "home.html";  
    } else {
        alert("Invalid email or password!");
    }

    loginEmail.value = "";
    loginPassword.value = "";
}

loginSubmit.addEventListener("click", loginUser);

window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");

   
    if (isLoggedIn === "true") {
        window.location.href = "home.html";  
    }
};

var registerButton = document.getElementById("register");

registerButton.addEventListener("click", function(event) {
    event.preventDefault();  

  
    window.location.href = "register.html"; 
});

