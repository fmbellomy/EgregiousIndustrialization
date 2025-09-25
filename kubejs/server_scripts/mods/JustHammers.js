ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:impact_core" },
    "minecraft:redstone",
    "modern_industrialization:steel_plate"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:reinforced_core" },
    "minecraft:redstone_block",
    "modern_industrialization:steel_block"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:reinforced_impact_core" },
    "minecraft:redstone_block",
    "modern_industrialization:aluminum_block"
  );
  event.replaceInput(
    { mod: "justhammers", output: "justhammers:destructor_core" },
    "minecraft:redstone_block",
    "modern_industrialization:stainless_steel_block"
  );
});
