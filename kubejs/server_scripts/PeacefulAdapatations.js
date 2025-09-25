ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:fermented_spider_eye" });
  // this should be moved to a keg or something later whenever we have that
  event.recipes.modern_industrialization
    .mixer(2, 100)
    .itemIn("minecraft:apple")
    .itemIn("minecraft:sugar")
    .itemIn("minecraft:brown_mushroom")
    .itemOut("minecraft:fermented_spider_eye");

  // make ender pearls obtainable in peaceful pre-HNN
  event.recipes.modern_industrialization
    .mixer(8, 100)
    .itemIn("modern_industrialization:uraninite_crushed_dust")
    .fluidIn("1000x minecraft:water")
    .fluidOut("1000x modern_industrialization:uraninite_slush");
  // this recipe is pretty expensive and takes a long time to run- because you should really be rushing HNN as fast as possible and not using this long term.
  event.recipes.modern_industrialization
    .chemical_bath(32, 600)
    .itemIn("minecraft:emerald")
    .fluidIn("4000x modern_industrialization:uraninite_slush")
    .itemOut("minecraft:ender_pearl");
});
