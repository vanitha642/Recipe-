function goBack() {
  window.history.back();
}

const recipes = {
  Dosa: {
    img: "images/dosa.jpg",
    ingredients: ["Rice", "Urad dal", "Salt", "Water","oil/ghee"],
    steps: ["soak 3 cups of rice and 1 cup of dal for 5 hours"," grind them into a smooth batter."," Let this mixture sit overnight in a warm spot to ferment until it becomes bubbly and rises."," When you’re ready to cook, thin the batter with a little water and pour a ladleful onto a hot, greased pan."," Use a circular motion to spread it thin, drizzle a little oil, and cook until the edges turn golden brown."]
  },
  Idli:{
    img: "images/idli.jpg",
    ingredients: ["rice","urad dal","salt","water"],
    steps: ["To make soft idlis, soak 3 cups of idli rice and 1 cup of urad dal for 5 hours", "then grind them into a thick, smooth batter."," Mix in salt and let the batter ferment overnight in a warm place until it doubles in size."," Grease your idli plates with oil and pour the fluffy batter into each mold."," Steam the plates in a pressure cooker or steamer for about 10–12 minutes until a toothpick comes out clean."," Let them cool for a minute before scooping them out to ensure they stay round and soft."]
  },
  Omlette:{
    img: "images/omlette.jpg",
    ingredients:[
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
