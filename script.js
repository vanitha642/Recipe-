function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user !== "" && pass !== "") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
    } else {
        alert("Please enter details");
    }
}

function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if(sidebar.style.left === "0px") {
        sidebar.style.left = "-200px";
    } else {
        sidebar.style.left = "0px";
    }
}

function filterRecipes(category) {
    let recipes = document.querySelectorAll(".recipe-card");

    recipes.forEach(function(card) {
        if(category === "all") {
            card.style.display = "inline-block";
        } else if(card.classList.contains(category)) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }
    });
}
