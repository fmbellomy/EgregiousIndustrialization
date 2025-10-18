ServerEvents.recipes((e) => {
  const { pyrolyse_oven } = e.recipes.industrialization_overdrive;
  const { distillation_tower, fluid_extractor, distillery } =
    e.recipes.modern_industrialization;

  let distillation = (input, outs) => {
    let dt = distillation_tower(36, 200).fluidIn(input);
    outs.forEach((out) => {
      dt.fluidOut(out);
      distillery(10, 200).fluidIn(input).fluidOut(out);
    });
  };
  // pyrolyse gaming
  pyrolyse_oven(16, 300)
    .itemIn("16x minecraft:coal")
    .fluidOut("8000x modern_industrialization:creosote")
    .itemOut("16x modern_industrialization:coke");
  pyrolyse_oven(16, 300)
    .itemIn("12x minecraft:coal")
    .fluidOut("3000x modern_industrialization:coal_tar")
    .itemOut("2x modern_industrialization:carbon_dust");
  pyrolyse_oven(16, 600)
    .itemIn("16x #minecraft:logs_that_burn")
    .fluidOut("2000x modern_industrialization:wood_tar")
    .itemOut("20x minecraft:charcoal");
  pyrolyse_oven(16, 300)
    .itemIn("16x #minecraft:logs_that_burn")
    .fluidOut("8000x modern_industrialization:creosote")
    .itemOut("20x minecraft:charcoal");
  pyrolyse_oven(8, 600)
    .itemIn("16x #minecraft:logs_that_burn")
    .fluidOut("4000x modern_industrialization:charcoal_byproducts")
    .itemOut("20x minecraft:charcoal");

  distillation("1000x modern_industrialization:charcoal_byproducts", [
    "400x modern_industrialization:wood_tar",
    "200x modern_industrialization:benzene",
    "200x modern_industrialization:creosote",
    "150x minecraft:water",
    "50x modern_industrialization:ethanol",
  ]);
  distillation("1000x modern_industrialization:wood_tar", [
    "500x modern_industrialization:benzene",
    "300x modern_industrialization:creosote",
    "100x modern_industrialization:phenol",
    "100x modern_industrialization:toluene",
  ]);
  distillation("1000x modern_industrialization:coal_tar", [
    "500x modern_industrialization:creosote",
    "300x modern_industrialization:sulfuric_acid",
    "200x modern_industrialization:phenol",
  ]);

  fluid_extractor(4, 200)
    .itemIn("minecraft:charcoal")
    .fluidOut("100x modern_industrialization:benzene");
});
