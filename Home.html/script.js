// ===== GLOBAL STATES =====
let menuOpen = false;
let profileOpen = false;

// ===== SHOW/HIDE FORMS =====
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

// ===== SIGNUP =====
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

// ===== LOGIN =====
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    alert("Login successful!");

    // store logged user
    localStorage.setItem("loggedUser", user);

    window.location.href = "home.html";
  } else {
    alert("Invalid username or password");
  }
}

// ===== FORGOT PASSWORD =====
function forgotPassword() {
  let user = document.getElementById("forgotUser").value;
  let pass = localStorage.getItem(user);

  if (pass) {
    alert("Your password is: " + pass);
  } else {
    alert("User not found!");
  }
}

// ===== SIDEBAR TOGGLE =====
function openMenu() {
  let menu = document.getElementById("sidebar");

  if (menuOpen) {
    menu.style.left = "-260px";
    menuOpen = false;
  } else {
    menu.style.left = "0px";
    menuOpen = true;

    // close profile
    document.getElementById("profilePanel").style.right = "-270px";
    profileOpen = false;
  }
}

// ===== PROFILE TOGGLE =====
function openProfile() {
  let panel = document.getElementById("profilePanel");

  if (profileOpen) {
    panel.style.right = "-270px";
    profileOpen = false;
  } else {
    panel.style.right = "0px";
    profileOpen = true;

    // close menu
    document.getElementById("sidebar").style.left = "-260px";
    menuOpen = false;
  }

  // show user
  let user = localStorage.getItem("loggedUser");
  document.getElementById("userDisplay").innerText = user || "Guest";
}

// ===== CLICK OUTSIDE CLOSE =====
document.addEventListener("click", function(e) {
  let menu = document.getElementById("sidebar");
  let profile = document.getElementById("profilePanel");

  if (menu && !menu.contains(e.target) && !e.target.classList.contains("menu-icon")) {
    menu.style.left = "-260px";
    menuOpen = false;
  }

  if (profile && !profile.contains(e.target) && !e.target.classList.contains("profile-icon")) {
    profile.style.right = "-270px";
    profileOpen = false;
  }
});

// ===== OPEN RECIPE =====
function openRecipe(name) {
  localStorage.setItem("recipe", name);
  window.location.href = "recipe.html";
}


// =====================================
// 🔥 NEW FEATURE: FILTER RECIPES
// =====================================
function filterRecipes(category) {
  const recipes = document.querySelectorAll(".recipe-card");

  recipes.forEach(recipe => {
    if (category === "all") {
      recipe.style.display = "block";
    } else {
      if (recipe.dataset.category === category) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    }
  });
}
function logout() {
  // remove logged user
  localStorage.removeItem("loggedUser");

  alert("Logged out successfully!");
  // redirect to login page
  window.location.href = "index.html"; // change if your login file name is different
}

