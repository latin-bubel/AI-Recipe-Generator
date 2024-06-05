function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  //API call
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "cf2c0451b1a5ae2tod3f94f0b95d3fe6";
  let prompt = `Users intructions are: Generate a short recipe containing ${instructionInput.value} `;
  let context =
    "You are a chef passionate about cooking. You value straightforward recipe. You love to write short recipies. Your mission is to generate a recipe making sure to include the needed ingretients, time needed to prepare and cook and easy understandable instructions how to prepare such meal. Make sure to follow user instructions. Generate recipe in basic HTML. At the end of the instruction add a heartwarming text in <strong> element.Sign the recipe at the end with 'AI Chef' with <strong> element. Do not include any &amp element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "blink"> ⏳ Generating the recipe with ${instructionInput.value} 👩‍💻</div>`;

  console.log("generating ");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
