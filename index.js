function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template();
  document.getElementsByTagName("main").innerHTML += result;
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template();
  document.getElementsByTagName("main").innerHTML += result;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
  document.getElementsByTagName("main").innerHTML += result;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
