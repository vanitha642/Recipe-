function login(){

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="admin" && password=="1234"){
window.location.href="home.html";
}
else{
alert("Invalid Login");
}

}
// Show Sections
function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
  document.getElementById("forgotBox").style.display = "none";
}

function showForgot() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("forgotBox").style.display = "block";
}

function showLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("forgotBox").style.display = "none";
}

// ✅ Signup Function
function signup() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;

  if (user === "" || pass === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem(user, pass);
  alert("Account created successfully!");
  showLogin();
}

// ✅ Login Function
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    alert("Login successful!");
    window.location.href = "home.html"; // redirect
  } else {
    alert("Invalid username or password");
  }
}

// ✅ Forgot Password
function forgotPassword() {
  let user = document.getElementById("forgotUser").value;
  let pass = localStorage.getItem(user);

  if (pass) {
    alert("Your password is: " + pass);
  } else {
    alert("User not found!");
  }
}
