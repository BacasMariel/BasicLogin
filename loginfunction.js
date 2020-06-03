var loginForm = document.getElementById("login-form");
var loginButton = document.getElementById("button");
var loginMsg = document.getElementById("login-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = loginForm.username.value;
    var password = loginForm.password.value;

    if (username === "user" && password === "user") {
        loginMsg.style.display = "block"; 
        setTimeout(function(){ loginMsg.style.display = "none"; }, 2000);
    } 
    else if(username === "admin" && password === "admin"){
        loginMsg.style.display = "block"; 
        setTimeout(function(){ loginMsg.style.display = "none"; }, 2000);
    }
    else {
        alert("Credentials are incorrect");
    }
})