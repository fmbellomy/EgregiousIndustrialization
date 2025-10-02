ServerEvents.recipes((e) => {
  const { pyrolyse_oven, distillation_tower } =
    e.recipes.modern_industrialization;
  // pyrolyse gaming
  pyrolyse_oven(16, 300)
    .itemIn("16x minecraft:coal")
    .fluidOut("8000x modern_industrialization:creosote")
    .itemOut("16x modern_industrialization:coke");
  pyrolyse_oven(16, 300)
    .itemIn("12x minecraft:coal")
    .fluidOut("3000x modern_industrialization:coal_tar")
    .itemOut("2x modern_industrialization:carbon_dust");
  pyrolyse_oven(16, 60)
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
  // dt gaming
  distillation_tower(36, 200)
    .fluidIn("1000x modern_industrialization:charcoal_byproducts")
    .fluidOut("400x modern_industrialization:wood_tar")
    .fluidOut("200x modern_industrialization:benzene")
    .fluidOut("200x modern_industrialization:creosote")
    .fluidOut("150x minecraft:water")
    .fluidOut("50x modern_industrialization:ethanol");
  distillation_tower(36, 200)
    .fluidIn("1000x modern_industrialization:wood_tar")
    .fluidOut("500x modern_industrialization:benzene")
    .fluidOut("300x modern_industrialization:creosote")
    .fluidOut("100x modern_industrialization:phenol")
    .fluidOut("100x modern_industrialization:toluene");
  distillation_tower(36, 200)
    .fluidIn("1000x modern_industrialization:coal_tar")
    .fluidOut("500x modern_industrialization:creosote")
    .fluidOut("300x modern_industrialization:sulfuric_acid")
    .fluidOut("200x modern_industrialization:phenol");
});
