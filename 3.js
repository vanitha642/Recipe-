function goBack() {
  window.history.back();
}

const recipes = {
  Dosa: {
    img: "images/dosa.jpg",
    ingredients: ["Rice", "Urad dal", "Salt", "Water"],
    steps: ["soak 3 cups of rice and 1 cup of dal for 5 hours,"" grind them into a smooth batter."" Let this mixture sit overnight in a warm spot to ferment until it becomes bubbly and rises."" When you’re ready to cook, thin the batter with a little water and pour a ladleful onto a hot, greased pan."" Use a circular motion to spread it thin, drizzle a little oil, and cook until the edges turn golden brown."]
  },
  Biryani: {
    img: "images/biryani.jpg",
    ingredients: ["Rice", "Chicken", "Spices"],
    steps: ["Cook rice", "Prepare masala", "Layer & cook"]
  }
};

// Get recipe
let recipeName = localStorage.getItem("recipe");

// Fix if null
if (!recipeName) {
  recipeName = "Dosa";
}

// Clear old data
document.getElementById("ingredients").innerHTML = "";
document.getElementById("steps").innerHTML = "";

// Load data
if (recipes[recipeName]) {

  document.getElementById("recipeTitle").innerText = recipeName;
  document.getElementById("recipeImg").src = recipes[recipeName].img;

  recipes[recipeName].ingredients.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    document.getElementById("ingredients").appendChild(li);
  });

  recipes[recipeName].steps.forEach(step => {
    let li = document.createElement("li");
    li.innerText = step;
    document.getElementById("steps").appendChild(li);
  });

} else {
  document.getElementById("recipeTitle").innerText = "Recipe Not Found ❌";
}
