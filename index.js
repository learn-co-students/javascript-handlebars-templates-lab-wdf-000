function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + "</li>")
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById('recipe-template').innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)

}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}
