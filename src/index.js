function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "recipe is here",
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
