ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "justhammers" },
    "minecraft:stick",
    "modern_industrialization:steel_rod"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:impact_core" },
    "minecraft:redstone",
    "modern_industrialization:bronze_plate"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:reinforced_core" },
    "minecraft:redstone_block",
    "modern_industrialization:bronze_block"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:reinforced_impact_core" },
    "minecraft:redstone_block",
    "modern_industrialization:steel_block"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:destructor_core" },
    "minecraft:redstone_block",
    "modern_industrialization:steel_block"
  );
});
