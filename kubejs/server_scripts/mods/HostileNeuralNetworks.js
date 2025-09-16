let hnnNukes = [
  "hostilenetworks:loot_fabricator",
  "hostilenetworks:sim_chamber",
  "hostilenetworks:deep_learner",
  {
    mod: "hostile_neural_industrialization",
    input: "hostilenetworks:sim_chamber",
  },
  {
    mod: "hostile_neural_industrialization",
    input: "hostilenetworks:loot_fabricator",
  },
];
ItemEvents.rightClicked((event) => {
  if (event.item.id === "hostilenetworks:overworld_prediction") {
    event.player.addXP(10);
    event.item.count--;
  }
  if (event.item.id === "hostilenetworks:nether_prediction") {
    event.player.addXP(20);
    event.item.count--;
  }
  if (event.item.id === "hostilenetworks:end_prediction") {
    event.player.addXP(25);
    event.item.count--;
  }
});
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  hnnNukes.forEach((item) => {
    event.remove(item);
  });
});
ServerEvents.recipes((event) => {
  event.remove({ output: "hostilenetworks:loot_fabricator" });
  event.remove({ output: "hostilenetworks:sim_chamber" });
  event.remove({ output: "hostilenetworks:deep_learner" });
  event.remove({ output: "hostilenetworks:blank_data_model" });
  event.remove({
    output: "hostile_neural_industrialization:electric_simulation_chamber",
  });
  event.remove({
    output: "hostile_neural_industrialization:large_simulation_chamber",
  });
  event.remove({
    output: "hostile_neural_industrialization:mono_loot_fabricator",
  });
  event.remove({
    output: "hostile_neural_industrialization:large_loot_fabricator",
  });

  event.remove({ output: "hostilenetworks:prediction_matrix" });

  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("5x minecraft:glass")
    .itemIn("4x ae2:certus_quartz_dust")
    .itemOut("5x ae2:quartz_glass");
  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("ae2:quartz_glass")
    .itemIn("minecraft:glowstone_dust")
    .itemOut("ae2:quartz_vibrant_glass");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("2x modern_industrialization:aluminum_plate")
    .itemIn("ae2:ender_dust")
    .itemIn("modern_industrialization:capacitor")
    .itemIn("ae2:quartz_vibrant_glass")
    .fluidIn("180x modern_industrialization:molten_redstone")
    .itemOut("16x hostilenetworks:prediction_matrix");

  event.remove({
    output: "hostile_neural_industrialization:prediction_machine_casing",
  });

  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:advanced_machine_hull")
    .itemIn("2x modern_industrialization:electronic_circuit")
    .itemIn("ae2:quartz_glass")
    .itemIn("2x minecraft:glowstone_dust")
    .itemOut("hostile_neural_industrialization:electric_simulation_chamber");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:advanced_machine_hull")
    .itemIn("2x modern_industrialization:electronic_circuit")
    .itemIn("ae2:quartz_glass")
    .itemIn("2x minecraft:redstone")
    .itemOut("hostile_neural_industrialization:mono_loot_fabricator");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:clean_stainless_steel_machine_casing")
    .itemIn("2x modern_industrialization:emerald_dust")
    .fluidIn("25x modern_industrialization:polyvinyl_chloride")
    .itemOut("hostile_neural_industrialization:prediction_machine_casing");
  event.recipes.modern_industrialization
    .assembler(8, 300)
    .itemIn("hostile_neural_industrialization:mono_loot_fabricator")
    .itemIn("hostile_neural_industrialization:prediction_machine_casing")
    .itemIn("2x modern_industrialization:digital_circuit")
    .fluidIn("100x modern_industrialization:soldering_alloy")
    .itemOut("hostile_neural_industrialization:large_loot_fabricator");
  event.recipes.modern_industrialization
    .assembler(8, 300)
    .itemIn("hostile_neural_industrialization:electric_simulation_chamber")
    .itemIn("hostile_neural_industrialization:prediction_machine_casing")
    .itemIn("2x modern_industrialization:digital_circuit")
    .fluidIn("100x modern_industrialization:soldering_alloy")
    .itemOut("hostile_neural_industrialization:large_simulation_chamber");
  // crafting recipes for the models...

  event
    .shaped("minecraft:wither_skeleton_skull", ["AA ", "AB ", "   "], {
      A: "minecraft:skeleton_skull",
      B: "hostilenetworks:nether_prediction",
    })
    .noMirror()
    .noShrink();

  event.shaped("hostilenetworks:blank_data_model", ["BBA", "DCA", "BBA"], {
    A: "modern_industrialization:gold_fine_wire",
    B: "modern_industrialization:silicon_plate",
    C: "modern_industrialization:analog_circuit",
    D: "ae2:fluix_dust",
  });
});

// here's hoping that monifactory's script just works here...
// Crafting recipes for the models
ServerEvents.recipes((event) => {
  let dataModelData = [
    ["blaze", "minecraft:blaze_powder", "nether", true],
    ["creeper", "minecraft:gunpowder", "overworld", true],
    ["enderman", "minecraft:ender_pearl", "end", true],
    ["ghast", "minecraft:ghast_tear", "nether", true],
    ["guardian", "minecraft:prismarine_shard", "overworld", true],
    ["shulker", "minecraft:diamond", "end", true],
    ["skeleton", "minecraft:bone", "overworld", false],
    ["slime", "minecraft:slime_ball", "overworld", false],
    ["spider", "minecraft:spider_eye", "overworld", true],
    ["witch", "minecraft:glass_bottle", "overworld", true],
    ["wither", "minecraft:nether_star", "nether", false],
    ["wither_skeleton", "minecraft:wither_skeleton_skull", "nether", true],
    ["zombie", "minecraft:rotten_flesh", "overworld", false],
    ["drowned", "minecraft:sponge", "overworld", false],
    // animals for food
    ["pig", "minecraft:porkchop", "overworld", false],
    ["cow", "minecraft:beef", "overworld", false],
    ["sheep", "minecraft:mutton", "overworld", false],
    ["chicken", "minecraft:chicken", "overworld", false],
    ["rabbit", "minecraft:rabbit", "overworld", false],
  ];

  dataModelData.forEach((modeldata) => {
    // Is this hacky? Yes. Do i care? No.
    let recipeIngredients = ["hostilenetworks:blank_data_model", modeldata[1]];

    if (modeldata[3]) {
      recipeIngredients.push(`7x hostilenetworks:${modeldata[2]}_prediction`);
    }

    event.shapeless(
      Item.of(
        `hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:${modeldata[0]}",hostilenetworks:data=6]`
      ),
      recipeIngredients
    );
  });
});
