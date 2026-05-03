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
    ingredients: ["eggs-2","salt","black pepper","butter/oil","fillings(optional)-cheese,onions,tomatoes whatever you want "],
    steps: ["To make a classic omelette, whisk two or three eggs in a bowl with a pinch of salt and pepper until well blended."," Heat a teaspoon of butter or oil in a non-stick frying pan over medium-low heat until it bubbles."," Pour in the eggs and let them sit for a few seconds,"," then gently push the cooked edges toward the center so the raw egg flows underneath."," Once the top is set but still slightly moist, add cheese or vegetables to one half."," Carefully fold the omelette over the filling and slide it onto a plate to serve immediately while warm and fluffy."]
  },
  Upma:{
    img:"images/upma.jpg",
    ingredients:["rava/sooji-1/2 cup","water","oil","mustered seeds","chanadal","curry leaves","green chilli","ginger","onions","salt","coriander"],
    steps:["To make simple upma, roast one cup of rava (semolina) in a pan until it smells nutty, then set it aside."," Heat oil in the same pan and sauté mustard seeds, dal, ginger, and green chillies, adding onions and veggies if you like."," Pour in two and a half cups of water, add salt, and bring it to a rolling boil."," Slowly pour the roasted rava into the boiling water while stirring constantly to prevent any lumps from forming."," Cover and cook on low heat for two minutes until the water is absorbed and the upma is soft and fluffy."]
  },
  Breadtoast:{
    img: "images/breadtoast.jpg",
    ingredients: ["bread:2-4 slices","butter:1-2 tsp ","softened jam/peanut butter/cheese(optional)"],
    steps: ["To make a perfect bread toast, start by spreading a thin layer of butter or margarine on both sides of your bread slices."," Heat a flat pan or tawa over medium-low heat and place the bread on it once the pan is warm."," Press down gently with a spatula to ensure even contact and cook for about two minutes until the bottom is golden brown."," Flip the slice over and toast the other side until it reaches your desired level of crunchiness."," For extra flavor, you can sprinkle a little cinnamon sugar or garlic powder while it's still hot on the pan."]
  },
  Oats:{
    img: "images/oats.jpg",
    ingredients: ["Rolled oats or quick oats - 1/2 cup","water or milk - 1 cup","salt - pinch","sugar/honey - 1tsp"],
    steps: ["Bring one cup of milk or water to a gentle boil in a small pot."," Stir in half a cup of oats and a pinch of salt,then reduce the heat to low."," Simmer the mixture for about 5 minutes, stirring occasionally, until the oats are soft and creamy."," Remove the pot from the heat and let it sit covered for a minute to thicken further."," Pour it into a bowl and top with honey, fruits, or nuts for a healthy and filling breakfast."]
  },
  Sandwich:{
    img: "images/sandwich.jpg",
    ingredients: ["bread (white, wheat, or multigrain),"," fats/spreads (butter, mayo, cream cheese, green chutney),"," proteins (cheese, ham, turkey, boiled eggs),"," vegetables (sliced cucumber, tomato, onion, capsicum)."],
    steps: ["start by spreading butter, chutney, or mayonnaise on two slices of fresh bread."," Layer your favorite fillings like sliced cucumbers, tomatoes, and onions or a slice of cheese on one piece."," Sprinkle a pinch of salt and pepper over the vegetables to enhance the flavor before closing it with the second slice."," You can serve it fresh as a cold sandwich or grill it on a warm pan with a little butter until it’s crispy and golden."," Cut it diagonally into triangles for an easy-to-eat snack that is both filling and delicious."]
  },
  Pancake:{
    img: "images/pancake.jpg",
    ingredients: [
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
