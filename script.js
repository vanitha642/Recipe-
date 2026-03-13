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
