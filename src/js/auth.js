const registerButton = document.getElementById("tab-register")
const loginButton = document.getElementById("tab-login")
const registerForm = document.getElementById("pills-register")
const loginForm = document.getElementById("pills-login")

registerButton.addEventListener("click", function() {
    loginForm.classList.remove("show", "active");
    registerForm.classList.add("show", "active");
    registerButton.classList.add("active");
    loginButton.classList.remove("active");
});

loginButton.addEventListener("click", function() {
    loginForm.classList.add("show", "active");
    registerForm.classList.remove("show", "active");
    registerButton.classList.remove("active");
    loginButton.classList.add("active");
});