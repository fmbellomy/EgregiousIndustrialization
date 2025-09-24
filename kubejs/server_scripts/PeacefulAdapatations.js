ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:fermented_spider_eye" });
  // this should be moved to a keg or something later whenever we have that
  event.recipes.modern_industrialization
    .mixer(2, 100)
    .itemIn("minecraft:apple")
    .itemIn("minecraft:sugar")
    .itemIn("minecraft:brown_mushroom")
    .itemOut("minecraft:fermented_spider_eye");
});
