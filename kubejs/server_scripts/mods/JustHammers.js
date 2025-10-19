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

  event.remove({ mod: "justhammers", output: "#justhammers:hammer" });
  function hammerRecipes(tier, mat1, mat2) {
    event.shaped(`justhammers:${tier}_hammer`, ["PPP", "PPP", " S "], {
      P: mat1,
      S: "modern_industrialization:steel_rod",
    });
    event.shaped(`justhammers:${tier}_impact_hammer`, ["PCP", "PPP", " S "], {
      P: mat2,
      C: "justhammers:impact_core",
      S: "modern_industrialization:steel_rod",
    });
    event.shaped(`justhammers:${tier}_reinforced_hammer`, ["PCP", "PPP", " S "], {
      P: mat2,
      C: "justhammers:reinforced_core",
      S: "modern_industrialization:steel_rod",
    });
    event.shaped(`justhammers:${tier}_reinforced_impact_hammer`, ["PCP", "PPP", " S "], {
      P: mat2,
      C: "justhammers:reinforced_impact_core",
      S: "modern_industrialization:steel_rod",
    });
    event.shaped(`justhammers:${tier}_destructor_hammer`, ["PCP", "PPP", " S "], {
      P: mat2,
      C: "justhammers:destructor_core",
      S: "modern_industrialization:steel_rod",
    });
  }
  hammerRecipes(
    "iron",
    "modern_industrialization:iron_plate",
    "modern_industrialization:iron_large_plate"
  );
  hammerRecipes(
    "diamond",
    "modern_industrialization:diamond_plate",
    "modern_industrialization:diamond_large_plate"
  );
  hammerRecipes(
    "netherite",
    "modern_industrialization:netherite_plate",
    "modern_industrialization:netherite_large_plate"
  );
});
