ServerEvents.recipes((event) => {
  event.remove("minecraft:ender_eye");
  // REPLACE FLUID WITH `extended_industrialization:blazing_essence` WHENEVER MI UPDATES!
  event.recipes.modern_industrialization
    .chemical_bath(512, 400)
    .itemIn("minecraft:ender_pearl")
    .fluidIn("1000x minecraft:lava")
    .itemOut("minecraft:ender_eye");

  // diamond tools/armor
  event.remove([
    { input: "minecraft:gold_ingot", output: "#c:armors" },
    { input: "minecraft:diamond", output: "#c:armors" },
    { input: "minecraft:diamond", output: "#c:tools" },
  ]);
  // replace diamond plate recipe
  event.remove({ output: "modern_industrialization:diamond_plate" });
  event.recipes.modern_industrialization
    .compressor(64, 800)
    .itemIn("minecraft:diamond")
    .itemOut("modern_industrialization:diamond_plate")
    .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });

  // armor sets
  // IRON
  event.replaceInput(
    { input: "iron_ingot", output: "#c:armors" },
    "minecraft:iron_ingot",
    "modern_industrialization:iron_plate"
  );
  // GOLD
  event.shaped("minecraft:golden_helmet", ["PPP", "POP", "   "], {
    P: "modern_industrialization:gold_plate",
    O: "minecraft:iron_helmet",
  });
  event.shaped("minecraft:golden_chestplate", ["POP", "PPP", "PPP"], {
    P: "modern_industrialization:gold_plate",
    O: "minecraft:iron_chestplate",
  });
  event.shaped("minecraft:golden_leggings", ["PPP", "POP", "P P"], {
    P: "modern_industrialization:gold_plate",
    O: "minecraft:iron_leggings",
  });
  event.shaped("minecraft:golden_boots", ["P P", "POP", "   "], {
    P: "modern_industrialization:gold_plate",
    O: "minecraft:iron_boots",
  });
  // DIAMOND
  event.shaped("minecraft:diamond_helmet", ["PPP", "POP", "   "], {
    P: "modern_industrialization:diamond_plate",
    O: "minecraft:golden_helmet",
  });
  event.shaped("minecraft:diamond_chestplate", ["POP", "PPP", "PPP"], {
    P: "modern_industrialization:diamond_plate",
    O: "minecraft:golden_chestplate",
  });
  event.shaped("minecraft:diamond_leggings", ["PPP", "POP", "P P"], {
    P: "modern_industrialization:diamond_plate",
    O: "minecraft:golden_leggings",
  });
  event.shaped("minecraft:diamond_boots", ["POP", "P P", "   "], {
    P: "modern_industrialization:diamond_plate",
    O: "minecraft:golden_boots",
  });

  // tools
  event.shaped("minecraft:diamond_sword", [" P ", " P ", " S "], {
    P: "modern_industrialization:diamond_plate",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_pickaxe", ["PPP", " S ", " S "], {
    P: "modern_industrialization:diamond_plate",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_shovel", [" P ", " S ", " S "], {
    P: "modern_industrialization:diamond_plate",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_axe", [" PP", " SP", " S "], {
    P: "modern_industrialization:diamond_plate",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_hoe", [" PP", " S ", " S "], {
    P: "modern_industrialization:diamond_plate",
    S: "minecraft:stick",
  });
  // MIGHT GET REMOVED!!!
  event.shaped("farmersdelight:diamond_knife", [" P ", " S ", "   "], {
    P: "modern_industrialization:diamond_plate",
    S: "minecraft:stick",
  });
  event.shaped("justhammers:diamond_hammer", ["PSP", " S ", " S "], {
    P: "modern_industrialization:diamond_plate",
    S: "modern_industrialization:steel_rod",
  });
  event.shaped("justhammers:diamond_impact_hammer", ["PCP", " S ", " S "], {
    P: "modern_industrialization:diamond_large_plate",
    C: "justhammers:impact_core",
    S: "modern_industrialization:steel_rod",
  });
  event.shaped("justhammers:diamond_reinforced_hammer", ["PCP", " S ", " S "], {
    P: "modern_industrialization:diamond_large_plate",
    C: "justhammers:reinforced_core",
    S: "modern_industrialization:steel_rod",
  });
  event.shaped(
    "justhammers:diamond_reinforced_impact_hammer",
    ["PCP", " S ", " S "],
    {
      P: "modern_industrialization:diamond_large_plate",
      C: "justhammers:reinforced_impact_core",
      S: "modern_industrialization:steel_rod",
    }
  );
  event.shaped("justhammers:diamond_destructor_hammer", ["PCP", " S ", " S "], {
    P: "modern_industrialization:diamond_large_plate",
    C: "justhammers:destructor_core",
    S: "modern_industrialization:steel_rod",
  });
});
