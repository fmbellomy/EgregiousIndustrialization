ServerEvents.recipes((event) => {
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
    "modern_industrialization:steel_ore_washer",
    ["PRP", "GCG", "PPP"],
    {
      R: "modern_industrialization:bronze_rotor",
      G: "modern_industrialization:bronze_gear",
      C: "modern_industrialization:steel_machine_casing",
      P: "#modern_industrialization:fluid_pipes",
    }
  );

  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:bronze_rotor")
    .itemIn("2x modern_industrialization:bronze_gear")
    .itemIn("modern_industrialization:steel_machine_casing")
    .itemIn("5x #modern_industrialization:fluid_pipes")
    .itemOut("modern_industrialization:steel_ore_washer");

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
