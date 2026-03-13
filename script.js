const recipes = {

pasta: {
title: "Pasta",
ingredients: [
"Pasta",
"Tomato sauce",
"Garlic",
"Olive oil",
"Cheese"
],
instructions: "Boil pasta. Cook garlic in olive oil. Add tomato sauce. Mix pasta with sauce and top with cheese."
},

pizza: {
title: "Pizza",
ingredients: [
"Pizza dough",
"Tomato sauce",
"Cheese",
"Pepperoni"
],
instructions: "Spread sauce on dough. Add cheese and toppings. Bake in oven for 15 minutes."
},

burger: {
title: "Burger",
ingredients: [
"Buns",
"Beef patty",
"Lettuce",
"Tomato",
"Cheese"
],
instructions: "Cook beef patty. Place inside bun with lettuce, tomato, and cheese."
}

};

function showRecipe(recipeName){

const recipe = recipes[recipeName];

document.getElementById("recipeTitle").innerText = recipe.title;

const ingredientsList = document.getElementById("ingredients");
ingredientsList.innerHTML = "";

recipe.ingredients.forEach(item=>{
const li = document.createElement("li");
li.innerText = item;
ingredientsList.appendChild(li);
});

document.getElementById("instructions").innerText = recipe.instructions;

document.getElementById("recipePopup").style.display="block";

}

document.getElementById("closeBtn").onclick=function(){
document.getElementById("recipePopup").style.display="none";
}

document.getElementById("searchBox").addEventListener("keyup",function(){

let search = this.value.toLowerCase();
let cards = document.querySelectorAll(".recipe-card");

cards.forEach(card=>{
let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(search)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Recipe Website</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>🍲 My Recipe Book</h1>
<div class="categories">
  <button onclick="filterRecipes('all')">All</button>
  <button onclick="filterRecipes('breakfast')">Breakfast</button>
  <button onclick="filterRecipes('lunch')">Lunch</button>
  <button onclick="filterRecipes('dinner')">Dinner</button>
</div>
<div class="recipes">

  <div class="recipe-card" data-category="breakfast">
    <img src="images/idli.jpg">
    <h3>Idli</h3>
    <p>Soft South Indian breakfast</p>
  </div>

  <div class="recipe-card" data-category="lunch">
    <img src="images/biryani.jpg">
    <h3>Chicken Biryani</h3>
    <p>Delicious spicy rice dish</p>
  </div>

  <div class="recipe-card" data-category="dinner">
    <img src="images/dosa.jpg">
    <h3>Dosa</h3>
    <p>Crispy dosa with chutney</p>
  </div>

</div>

<input type="text" id="searchBox" placeholder="Search recipes...">
</header>

<section class="recipe-container" id="recipeContainer">

<div class="recipe-card">
<img src="https://source.unsplash.com/300x200/?pasta">
<h3>Pasta</h3>
<button onclick="showRecipe('pasta')">View Recipe</button>
</div>

<div class="recipe-card">
<img src="https://source.unsplash.com/300x200/?pizza">
<h3>Pizza</h3>
<button onclick="showRecipe('pizza')">View Recipe</button>
</div>

<div class="recipe-card">
<img src="https://source.unsplash.com/300x200/?burger">
<h3>Burger</h3>
<button onclick="showRecipe('burger')">View Recipe</button>
</div>

</section>

<div class="popup" id="recipePopup">
<div class="popup-content">

<span id="closeBtn">&times;
