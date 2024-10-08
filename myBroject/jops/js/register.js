
var userNameField = document.getElementById("floatingUserName");
var emailField = document.getElementById("floatingEmail");
var passwordField = document.getElementById("floatingPassword");
var confirmPasswordField = document.getElementById("floatingConfirmPassword");
var registerButton = document.getElementById("floatingRegister");
var goToLoginButton = document.getElementById("GoToLoginScreen");


goToLoginButton.addEventListener("click", function() {
    window.location.href = "login.html";
});


function registerUser(event) {
    event.preventDefault();

   
    if (!userNameField.value || !emailField.value || !passwordField.value || !confirmPasswordField.value) {
        alert("All fields are required!");
        return;
    }

   
    if (passwordField.value !== confirmPasswordField.value) {
        alert("Passwords do not match!");
        return;
    }

   
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        alert("Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    var users = JSON.parse(localStorage.getItem("users")) || [];


    var emailExists = users.some(function(user) {
        return user.email === emailField.value;
    });

    if (emailExists) {
        alert("This email is already registered!");
        return;
    }

  
    var newUser = {
        username: userNameField.value,
        email: emailField.value,
        password: passwordField.value,
        booking: [],
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");


    userNameField.value = "";
    emailField.value = "";
    passwordField.value = "";
    confirmPasswordField.value = "";
}


registerButton.addEventListener("click", registerUser);
