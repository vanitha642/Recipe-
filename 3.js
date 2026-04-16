function goBack() {
  window.history.back();
}

// Recipe Data
const recipes = {
  Dosa: {
    img: "images/dosa.jpg",
    ingredients: [
      "Rice",
      "Urad dal",
      "Salt",
      "Water"
    ],
    steps: [
      "Soak rice and dal",
      "Grind into batter",
      "Ferment overnight",
      "Cook on pan"
    ]
  },

  Biryani: {
    img: "images/biryani.jpg",
    ingredients: [
      "Rice",
      "Chicken",
      "Spices",
      "Onions"
    ],
    steps: [
      "Cook rice",
      "Prepare masala",
      "Layer rice and chicken",
      "Cook on low flame"
    ]
  },

  Noodles: {
    img: "images/noodles.jpg",
    ingredients: [
      "Noodles",
      "Vegetables",
      "Sauce"
    ],
    steps: [
      "Boil noodles",
      "Fry vegetables",
      "Mix sauces",
      "Combine everything"
    ]
  }
};

// Load Recipe
let recipeName = localStorage.getItem("recipe");

if (recipes[recipeName]) {
  document.getElementById("recipeTitle").innerText = recipeName;
  document.getElementById("recipeImg").src = recipes[recipeName].img;

  let ing = recipes[recipeName].ingredients;
  let steps = recipes[recipeName].steps;

  ing.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    document.getElementById("ingredients").appendChild(li);
  });

  steps.forEach(step => {
    let li = document.createElement("li");
    li.innerText = step;
    document.getElementById("steps").appendChild(li);
  });
}

