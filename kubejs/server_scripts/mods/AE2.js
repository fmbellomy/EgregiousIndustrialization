// base ae2
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {});
ServerEvents.recipes((event) => {
  event.recipes.modern_industrialization
    .packer(8, 200)
    .itemIn("extendedae:entro_crystal")
    .itemIn("extendedae:concurrent_processor_press", 0.0)
    .itemOut("extendedae:concurrent_processor_print");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("extendedae:concurrent_processor_print")
    .itemIn("ae2:printed_silicon")
    .fluidIn("90x modern_industrialization:molten_redstone")
    .itemOut("extendedae:concurrent_processor");
  event.recipes.modern_industrialization
    .packer(8, 200)
    .itemIn("advanced_ae:quantum_alloy")
    .itemIn("advanced_ae:quantum_processor_press", 0.0)
    .itemOut("advanced_ae:printed_quantum_processor");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("advanced_ae:printed_quantum_processor")
    .itemIn("ae2:printed_silicon")
    .fluidIn("90x modern_industrialization:molten_redstone")
    .itemOut("advanced_ae:quantum_processor");
  event.remove("ae2:silicon");
  event.replaceInput(
    "ae2:chest",
    "minecraft:air",
    "modern_industrialization:advanced_machine_hull"
  );
  event.remove({ output: "ae2:chest" });
  event.shaped("ae2:chest", ["GTG", "CHC", "ABA"], {
    G: "#c:glass_blocks/cheap",
    T: "ae2:terminal",
    C: "ae2:fluix_glass_cable",
    H: "modern_industrialization:advanced_machine_hull",
    A: "modern_industrialization:electronic_circuit",
    B: "modern_industrialization:silicon_battery",
  });
  event.remove({ output: "ae2:drive" });
  event.shaped("ae2:drive", ["AWA", "PHP", "AWA"], {
    W: "#modern_industrialization:me_wires",
    H: "modern_industrialization:advanced_machine_hull",
    A: "modern_industrialization:aluminum_plate",
    P: "ae2:engineering_processor",
  });
  event.remove({ output: "ae2:controller" });
  event.shaped("ae2:controller", ["ACA", "CMC", "AEA"], {
    A: "modern_industrialization:aluminum_plate",
    E: "modern_industrialization:electronic_circuit",
    C: "#modern_industrialization:me_wires",
    M: "modern_industrialization:advanced_machine_hull",
  });
  event.remove({ output: "ae2:interface" });
  event.shaped("ae2:interface", ["   ", "FHA", " M "], {
    M: "modern_industrialization:motor",
    F: "ae2:formation_core",
    H: "modern_industrialization:advanced_machine_hull",
    A: "ae2:annihilation_core",
  });
  event.remove({ output: "ae2:pattern_provider" });
  event.shaped("ae2:pattern_provider", ["   ", "FHA", " P "], {
    P: "modern_industrialization:piston",
    F: "ae2:formation_core",
    H: "modern_industrialization:advanced_machine_hull",
    A: "ae2:annihilation_core",
  });
  event.remove({ output: "ae2:crafting_unit" });
  event.shaped("ae2:crafting_unit", ["AWA", "MCM", "AWA"], {
    A: "modern_industrialization:aluminum_plate",
    W: "#modern_industrialization:me_wires",
    M: "modern_industrialization:advanced_machine_hull",
    C: "modern_industrialization:digital_circuit",
  });
  event.replaceInput(
    { mod: "ae2" },
    "minecraft:iron_ingot",
    "modern_industrialization:aluminum_plate"
  );
  event.replaceInput(
    { mod: "ae2" },
    "minecraft:copper_ingot",
    "modern_industrialization:copper_plate"
  );
  event.replaceInput(
    { output: "ae2:storage_bus" },
    "minecraft:piston",
    "modern_industrialization:piston"
  );
  event.remove({
    input: "#minecraft:wool",
    output: "ae2:fluix_covered_cable",
  });
  event.remove({
    input: "minecraft:redstone",
    output: "ae2:fluix_smart_cable",
  });
  event.remove({
    input: "minecraft:redstone",
    output: "ae2:fluix_smart_dense_cable",
  });

  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("4x ae2:fluix_glass_cable")
    .fluidIn("30x modern_industrialization:synthetic_rubber")
    .itemOut("4x ae2:fluix_covered_cable");
  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("4x ae2:fluix_glass_cable")
    .fluidIn("8x modern_industrialization:styrene_butadiene_rubber")
    .itemOut("4x ae2:fluix_covered_cable");
  event.recipes.modern_industrialization
    .assembler(8, 40)
    .itemIn("8x ae2:fluix_covered_cable")
    .itemIn("minecraft:redstone")
    .itemIn("minecraft:glowstone_dust")
    .itemOut("8x ae2:fluix_smart_cable");
  event.recipes.modern_industrialization
    .assembler(8, 40)
    .itemIn("8x ae2:fluix_covered_dense_cable")
    .itemIn("minecraft:redstone")
    .itemIn("minecraft:glowstone_dust")
    .itemOut("8x ae2:fluix_smart_dense_cable");
});

// ADVANCED AE NUKING
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("advanced_ae:quantum_helmet[ae2:stored_energy=2.0E8d]");
  event.remove("advanced_ae:quantum_chestplate[ae2:stored_energy=3.0E8d]");
  event.remove("advanced_ae:quantum_leggings[ae2:stored_energy=2.5E8d]");
  event.remove("advanced_ae:quantum_boots[ae2:stored_energy=2.0E8d]");
  event.remove("advanced_ae:quantum_helmet");
  event.remove("advanced_ae:quantum_chestplate");
  event.remove("advanced_ae:quantum_leggings");
  event.remove("advanced_ae:quantum_boots");
  event.remove("advanced_ae:quantum_upgrade_base");
  event.remove("advanced_ae:walk_speed_card");
  event.remove("advanced_ae:sprint_speed_card");
  event.remove("advanced_ae:step_assist_card");
  event.remove("advanced_ae:jump_height_card");
  event.remove("advanced_ae:lava_immunity_card");
  event.remove("advanced_ae:flight_card");
  event.remove("advanced_ae:water_breathing_card");
  event.remove("advanced_ae:auto_feeding_card");
  event.remove("advanced_ae:luck_card");
  event.remove("advanced_ae:swim_speed_card");
  event.remove("advanced_ae:attack_speed_card");
  event.remove("advanced_ae:strength_card");
  event.remove("advanced_ae:regeneration_card");
  event.remove("advanced_ae:evasion_card");
  event.remove("advanced_ae:hp_buffer_card");
  event.remove("advanced_ae:magnet_card");
  event.remove("advanced_ae:auto_stock_card");
  event.remove("advanced_ae:reach_card");
  event.remove("advanced_ae:night_vision_card");
  event.remove("advanced_ae:flight_drift_card");
  event.remove("advanced_ae:recharging_card");
  event.remove("advanced_ae:portable_workbench_card");
  event.remove("advanced_ae:pick_craft_card");
  event.remove("advanced_ae:adv_pattern_provider");
  event.remove("advanced_ae:adv_pattern_provider_upgrade");
  event.remove("advanced_ae:adv_pattern_provider_capacity_upgrade");
  event.remove("advanced_ae:small_adv_pattern_provider");
  event.remove("advanced_ae:adv_pattern_provider_part");
  event.remove("advanced_ae:small_adv_pattern_provider_part");
});
ServerEvents.recipes((event) => {
  event.remove({ output: "advanced_ae:quantum_helmet" });
  event.remove({ output: "advanced_ae:quantum_chestplate" });
  event.remove({ output: "advanced_ae:quantum_leggings" });
  event.remove({ output: "advanced_ae:quantum_boots" });
  event.remove({ output: "advanced_ae:quantum_upgrade_base" });
  event.remove({ input: "advanced_ae:quantum_upgrade_base" });
  event.remove({ output: "advanced_ae:adv_pattern_provider" });
  event.remove({ output: "advanced_ae:adv_pattern_provider_upgrade" });
  event.remove({ output: "advanced_ae:adv_pattern_provider_capacity_upgrade" });

  event.remove({ output: "advanced_ae:small_adv_pattern_provider" });
  event.remove({ output: "advanced_ae:adv_pattern_provider_part" });
  event.remove({ output: "advanced_ae:small_adv_pattern_provider_part" });
});

// EXTENDED AE
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("extendedae:quartz_blend");
  event.remove("extendedae:silicon_block");
  event.remove("extendedae:infinity_cobblestone_cell");
});
ServerEvents.recipes((event) => {
  event.remove({ output: "extendedae:quartz_blend" });
  event.remove("extendedae:silicon_block");
  event.recipes.modern_industrialization
    .macerator(2, 100)
    .itemIn("extendedae:entro_crystal")
    .itemOut("extendedae:entro_dust");

  event.remove({
    type: "extendedae:crystal_fixer",
    output: "ae2:flawless_budding_quartz",
  });
  // infinite cells
  event.replaceInput(
    { output: "extendedae:infinity_water_cell" },
    "minecraft:diamond",
    "modern_industrialization:advanced_pump"
  );
  event.replaceInput(
    { output: "extendedae:infinity_water_cell" },
    "ae2:cell_component_16k",
    "advanced_ae:quantum_storage_component"
  );
  event.replaceInput(
    { output: "extendedae:infinity_water_cell" },
    "minecraft:water_bucket",
    "modern_industrialization:titanium_tank"
  );
  event.remove("extendedae:infinity_cobblestone_cell");

  // extended ae2 machines

  event.replaceInput(
    { mod: "extendedae", output: "extendedae:pattern_provider_upgrade" },
    "#c:ingots",
    "modern_industrialization:analog_circuit"
  );
  event.replaceInput(
    { mod: "extendedae", output: "extendedae:machine_frame" },
    "minecraft:copper_ingot",
    "modern_industrialization:sodium_battery"
  );
  event.replaceInput(
    { mod: "extendedae", output: "extendedae:machine_frame" },
    "ae2:quartz_glass",
    "modern_industrialization:turbo_machine_hull"
  );
  event.replaceInput(
    { mod: "extendedae", output: "extendedae:machine_frame" },
    "minecraft:iron_ingot",
    "modern_industrialization:aluminum_plate"
  );
  event.replaceInput(
    { mod: "extendedae", output: "extendedae:machine_frame" },
    "extendedae:entro_ingot",
    "modern_industrialization:entro_plate"
  );
  event.replaceInput(
    { mod: "extendedae", output: "extendedae:assembler_matrix_frame" },
    "minecraft:lapis_lazuli",
    "modern_industrialization:electronic_circuit"
  );
  event.replaceInput(
    { mod: "extendedae", output: "extendedae:assembler_matrix_frame" },
    "minecraft:quartz",
    "modern_industrialization:aluminum_plate"
  );
  // apparently you can't just use replaceInput on extendedae recipes. kill me.
  event.remove({ id: "extendedae:assembler/ex_pattern_provider" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          tag: "ae2:pattern_provider",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:capacity_card",
        },
      },
      {
        amount: 1,
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
      {
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        amount: 6,
        ingredient: {
          tag: "ae2:glass_cable",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_pattern_provider",
    },
  });
  event.remove({ id: "extendedae:assembler/ex_interface" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          tag: "ae2:interface",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:capacity_card",
        },
      },
      {
        amount: 1,
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
      {
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        amount: 6,
        ingredient: {
          tag: "ae2:glass_cable",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_interface",
    },
  });
  event.remove({ id: "extendedae:assembler/oversize_interface" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          tag: "extendedae:extended_interface",
        },
      },
      {
        ingredient: {
          item: "extendedae:ingredient_buffer",
        },
      },
      {
        amount: 2,
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
      {
        amount: 4,
        ingredient: {
          item: "ae2:annihilation_core",
        },
      },
      {
        amount: 4,
        ingredient: {
          item: "ae2:formation_core",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:oversize_interface",
    },
  });

  event.remove({ id: "extendedae:assembler/ex_inscriber" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          item: "ae2:inscriber",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:capacity_card",
        },
      },
      {
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_inscriber",
    },
  });
  event.remove({ id: "extendedae:assembler/ex_drive" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          item: "ae2:drive",
        },
      },
      {
        amount: 2,
        ingredient: {
          tag: "ae2:glass_cable",
        },
      },
      {
        ingredient: {
          item: "ae2:capacity_card",
        },
      },
      {
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_drive",
    },
  });
  event.remove({ id: "extendedae:assembler/ex_export_bus" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          item: "ae2:export_bus",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:speed_card",
        },
      },
      {
        amount: 2,
        ingredient: {
          item: "minecraft:piston",
        },
      },
      {
        ingredient: {
          item: "ae2:formation_core",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_export_bus_part",
    },
  });
  event.remove({ id: "extendedae:assembler/ex_import_bus" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          item: "ae2:import_bus",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:speed_card",
        },
      },
      {
        amount: 2,
        ingredient: {
          item: "minecraft:piston",
        },
      },
      {
        ingredient: {
          item: "ae2:annihilation_core",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_export_bus_part",
    },
  });
  event.remove("extendedae:assembler/ex_charger");
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          item: "ae2:charger",
        },
      },
      {
        ingredient: {
          item: "ae2:capacity_card",
        },
      },
      {
        amount: 2,
        ingredient: {
          item: "modern_industrialization:sodium_battery",
        },
      },
      {
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_charger",
    },
  });
  event.remove({ id: "extendedae:assembler/ex_molecular_assembler" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 4,
        ingredient: {
          item: "ae2:molecular_assembler",
        },
      },
      {
        amount: 4,
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        amount: 4,
        ingredient: {
          tag: "c:dusts/fluix",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:engineering_processor",
        },
      },
      {
        ingredient: {
          item: "ae2:speed_card",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:digital_circuit",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_molecular_assembler",
    },
  });
  event.remove({ id: "extendedae:assembler/ex_io_port" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        ingredient: {
          item: "ae2:io_port",
        },
      },
      {
        amount: 4,
        ingredient: {
          item: "ae2:speed_card",
        },
      },
      {
        amount: 3,
        ingredient: {
          item: "ae2:logic_processor",
        },
      },
      {
        amount: 2,
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:large_advanced_motor",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:ex_io_port",
    },
  });
  event.remove({ id: "extendedae:assembler/wireless_hub" });
  event.custom({
    type: "extendedae:crystal_assembler",
    input_items: [
      {
        amount: 2,
        ingredient: {
          item: "extendedae:wireless_connect",
        },
      },
      {
        ingredient: {
          item: "modern_industrialization:highly_advanced_machine_hull",
        },
      },
      {
        amount: 8,
        ingredient: {
          tag: "ae2:smart_cable",
        },
      },
      {
        amount: 4,
        ingredient: {
          item: "extendedae:concurrent_processor",
        },
      },
      {
        ingredient: {
          item: "ae2:quantum_link",
        },
      },
      {
        amount: 2,
        ingredient: {
          item: "modern_industrialization:cadmium_battery",
        },
      },
    ],
    output: {
      count: 1,
      id: "extendedae:wireless_hub",
    },
  });
});
