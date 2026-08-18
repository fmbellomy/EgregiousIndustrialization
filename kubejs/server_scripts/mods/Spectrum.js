const SPECTRUM_GEMS = [
  "minecraft:amethyst",
  "spectrum:citrine",
  "spectrum:topaz",
  "spectrum:onyx",
  "spectrum:moonstone",
];
ServerEvents.recipes((event) => {
  SPECTRUM_GEMS.forEach((gemType) => {
    let ns = gemType.split(":")[0];
    let gem = gemType.split(":")[1];

    event.recipes.modern_industrialization
      .macerator(2, 100)
      .itemIn(`${gemType}_shard`)
      .itemOut(`2x spectrum:${gem}_powder`);
    event.recipes.modern_industrialization
      .macerator(2, 100)
      .itemIn(`${gemType}_block`)
      .itemOut(`2x spectrum:${gem}_powder`);
    event.recipes.modern_industrialization
      .macerator(2, 100)
      .itemIn(`${gemType}_cluster`)
      .itemOut(`16x spectrum:${gem}_powder`);
    event.recipes.modern_industrialization
      .macerator(2, 100)
      .itemIn(`${ns}:small_${gem}_bud`)
      .itemOut(`4x spectrum:${gem}_powder`);
    event.recipes.modern_industrialization
      .macerator(2, 100)
      .itemIn(`${ns}:medium_${gem}_bud`)
      .itemOut(`6x spectrum:${gem}_powder`);
    event.recipes.modern_industrialization
      .macerator(2, 100)
      .itemIn(`${ns}:large_${gem}_bud`)
      .itemOut(`8x spectrum:${gem}_powder`);
  });
});
