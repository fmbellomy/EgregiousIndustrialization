ServerEvents.recipes((event) => {
  event.remove("minecraft:ender_eye");
  // REPLACE FLUID WITH `extended_industrialization:blazing_essence` WHENEVER MI UPDATES!
  event.recipes.modern_industrialization
    .chemical_bath(512, 400)
    .itemIn("minecraft:ender_pearl")
    .fluidIn("1000x minecraft:lava")
    .itemOut("minecraft:ender_eye");
});
