ServerEvents.recipes((event) => {
  // silicon carbide
  event.recipes.modern_industrialization
    .mixer(8, 100)
    .itemIn("modern_industrialization:carbon_dust")
    .itemIn("modern_industrialization:silicon_dust")
    .itemOut("2x modern_industrialization:silicon_carbide_dust");
  event.smelting(
    "modern_industrialization:silicon_carbide_ingot",
    "modern_industrialization:silicon_carbide_dust"
  );
  event.blasting(
    "modern_industrialization:silicon_carbide_ingot",
    "modern_industrialization:silicon_carbide_dust"
  );

  // TODO: IRIDIUM DRILL/HEAD

  // replace battery alloy dust mixer recipe
  event.remove({
    mod: "modern_industrialization",
    output: "modern_industrialization:battery_alloy_dust",
    input: "modern_industrialization:lead_dust",
  });
  event.recipes.modern_industrialization
    .mixer(2, 100)
    .itemIn("2x modern_industrialization:lead_dust")
    .itemIn("modern_industrialization:antimony_dust")
    .itemOut("3x modern_industrialization:battery_alloy_dust");

  // sifters
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("2x minecraft:iron_ingot")
    .itemOut("8x minecraft:iron_bars");
  event.shaped("modern_industrialization:steel_sifter", ["BBB", "GCG", "PRP"], {
    R: "modern_industrialization:bronze_rotor",
    B: "minecraft:iron_bars",
    G: "modern_industrialization:bronze_gear",
    C: "modern_industrialization:steel_machine_casing",
    P: "#modern_industrialization:item_pipes",
  });
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:bronze_rotor")
    .itemIn("3x minecraft:iron_bars")
    .itemIn("2x modern_industrialization:bronze_gear")
    .itemIn("modern_industrialization:steel_machine_casing")
    .itemIn("2x #modern_industrialization:item_pipes")
    .itemOut("modern_industrialization:steel_sifter");
  event.shaped(
    "modern_industrialization:electric_sifter",
    ["BBB", "GCG", "PRP"],
    {
      R: "modern_industrialization:analog_circuit",
      B: "minecraft:iron_bars",
      G: "modern_industrialization:tin_rotor",
      C: "modern_industrialization:basic_machine_hull",
      P: "modern_industrialization:motor",
    }
  );
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:analog_circuit")
    .itemIn("3x minecraft:iron_bars")
    .itemIn("2x modern_industrialization:tin_rotor")
    .itemIn("modern_industrialization:basic_machine_hull")
    .itemIn("2x modern_industrialization:motor")
    .itemOut("modern_industrialization:electric_sifter");

  // ore washers
  event.shaped(
    "modern_industrialization:bronze_ore_washer",
    ["PRP", "GCG", "PPP"],
    {
      R: "modern_industrialization:copper_rotor",
      G: "modern_industrialization:copper_gear",
      C: "modern_industrialization:bronze_machine_casing",
      P: "#modern_industrialization:fluid_pipes",
    }
  );

  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:copper_rotor")
    .itemIn("2x modern_industrialization:copper_gear")
    .itemIn("modern_industrialization:bronze_machine_casing")
    .itemIn("5x #modern_industrialization:fluid_pipes")
    .itemOut("modern_industrialization:bronze_ore_washer");

  event.shaped(
    "modern_industrialization:electric_ore_washer",
    ["URU", "PCP", "PAP"],
    {
      U: "modern_industrialization:pump",
      R: "modern_industrialization:tin_rotor",
      C: "modern_industrialization:basic_machine_hull",
      P: "#modern_industrialization:fluid_pipes",
      A: "modern_industrialization:analog_circuit",
    }
  );

  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("2x modern_industrialization:pump")
    .itemIn("modern_industrialization:tin_rotor")
    .itemIn("modern_industrialization:basic_machine_hull")
    .itemIn("2x #modern_industrialization:fluid_pipes")
    .itemIn("modern_industrialization:analog_circuit")
    .itemOut("modern_industrialization:electric_ore_washer");

  // chemical bath
  event.shaped(
    "modern_industrialization:chemical_bath",
    ["BMB", "GCG", "MRM"],
    {
      R: "modern_industrialization:electronic_circuit",
      B: "modern_industrialization:pump",
      M: "modern_industrialization:motor",
      G: "#modern_industrialization:fluid_pipes",
      C: "modern_industrialization:basic_machine_hull",
    }
  );
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("2x modern_industrialization:pump")
    .itemIn("3x modern_industrialization:motor")
    .itemIn("2x #modern_industrialization:fluid_pipes")
    .itemIn("modern_industrialization:basic_machine_hull")
    .itemIn("modern_industrialization:electronic_circuit")
    .itemOut("modern_industrialization:chemical_bath");

  // laser engraver
  event.shaped(
    "modern_industrialization:laser_engraver",
    ["DLD", "CHC", "EPE"],
    {
      E: "modern_industrialization:electronic_circuit",
      D: "modern_industrialization:diode",
      L: "kubejs:glass_lens",
      C: "modern_industrialization:electrum_cable",
      H: "modern_industrialization:basic_machine_hull",
      P: "minecraft:prismarine_crystals",
    }
  );
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:basic_machine_hull")
    .itemIn("2x modern_industrialization:electronic_circuit")
    .itemIn("2x modern_industrialization:diode")
    .itemIn("kubejs:glass_lens")
    .itemIn("2x modern_industrialization:electrum_cable")
    .itemIn("minecraft:prismarine_crystals")
    .itemOut("modern_industrialization:laser_engraver");

  // circuit assembler
  event.shaped(
    "modern_industrialization:circuit_assembler",
    ["RPR", "MHM", "EPE"],
    {
      E: "modern_industrialization:electronic_circuit",
      R: "modern_industrialization:robot_arm",
      M: "modern_industrialization:large_motor",
      H: "modern_industrialization:basic_machine_hull",
      P: "modern_industrialization:large_pump",
    }
  );
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:basic_machine_hull")
    .itemIn("2x modern_industrialization:electronic_circuit")
    .itemIn("2x modern_industrialization:large_pump")
    .itemIn("2x modern_industrialization:robot_arm")
    .itemIn("2x modern_industrialization:large_motor")
    .itemOut("modern_industrialization:circuit_assembler");

  //Steel upgrade for custom ore washer
  event.shapeless("modern_industrialization:steel_ore_washer", [
    "modern_industrialization:bronze_ore_washer",
    "modern_industrialization:steel_upgrade",
  ]);
  event.recipes.modern_industrialization
    .unpacker(2, 100)
    .itemIn("modern_industrialization:steel_ore_washer")
    .itemOut("modern_industrialization:bronze_ore_washer")
    .itemOut("modern_industrialization:steel_upgrade");
  event.recipes.modern_industrialization
    .packer(2, 100)
    .itemIn("modern_industrialization:bronze_ore_washer")
    .itemIn("modern_industrialization:steel_upgrade")
    .itemOut("modern_industrialization:steel_ore_washer");
});
