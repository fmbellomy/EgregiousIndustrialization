ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "farmersdelight:cutting" }, (recipe) => {
    let input = "" + recipe.originalRecipeIngredients[0].first;
    input = input.split(" ")[0] + "x " + input.split(" ")[1];
    let output = "" + recipe.originalRecipeResult;
    if (Item.getItem(output.split(" ")[1]).hasTag("c:stripped_woods")) {
      console.log("returning!");
      return;
    }
    if (Item.getItem(output.split(" ")[1]).hasTag("c:stripped_logs")) {
      console.log("returning!");
      return;
    }
    output = output.split(" ")[0] + "x " + output.split(" ")[1];
    console.log(recipe.id);
    console.log(input);
    console.log(output);
    event.recipes.modern_industrialization
      .cutting_machine(2, 40)
      .itemIn(input)
      .fluidIn("1x modern_industrialization:lubricant")
      .itemOut(output);
  });
});
