ServerEvents.recipes((event) => {
  event.remove({ mod: "immersive_aircraft" });

  // components
  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("6x #minecraft:planks")
    .itemIn("3x modern_industrialization:stainless_steel_rod")
    .fluidIn("200x modern_industrialization:polyethylene")
    .itemOut("immersive_aircraft:hull");

  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("5x modern_industrialization:stainless_steel_plate")
    .itemIn("2x modern_industrialization:copper_rod")
    .itemIn("6x modern_industrialization:piston")
    .itemIn("2x modern_industrialization:rubber_sheet")
    .fluidIn("100x modern_industrialization:lubricant")
    .itemOut("immersive_aircraft:engine");

  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("2x #minecraft:planks")
    .itemIn("4x modern_industrialization:stainless_steel_rod")
    .itemIn("2x #minecraft:wool")
    .fluidIn("2000x modern_industrialization:nylon")
    .itemOut("immersive_aircraft:sail");

  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("2x modern_industrialization:stainless_steel_rotor")
    .itemIn("modern_industrialization:stainless_steel_rod")
    .itemIn("modern_industrialization:stainless_steel_ring")
    .fluidIn("100x modern_industrialization:lubricant")
    .itemOut("immersive_aircraft:propeller");

  event.recipes.modern_industrialization
    .assembler(8, 100)
    .itemIn("modern_industrialization:bronze_boiler")
    .itemIn("modern_industrialization:advanced_motor")
    .itemIn("4x modern_industrialization:fluid_pipe")
    .itemIn("modern_industrialization:air_intake")
    .itemIn("4x modern_industrialization:copper_curved_plate")
    .itemOut("immersive_aircraft:boiler");

  // upgrades
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("immersive_aircraft:propeller")
    .itemIn("4x modern_industrialization:annealed_copper_plate")
    .itemOut("immersive_aircraft:enhanced_propeller");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("immersive_aircraft:engine")
    .itemIn("2x modern_industrialization:stainless_steel_curved_plate")
    .itemIn("modern_industrialization:advanced_motor")
    .itemOut("immersive_aircraft:eco_engine");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("2x immersive_aircraft:engine")
    .itemIn("4x modern_industrialization:stainless_steel_curved_plate")
    .itemIn("modern_industrialization:large_advanced_motor")
    .itemIn("8x minecraft:blaze_rod")
    .itemOut("immersive_aircraft:nether_engine");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:steel_boiler")
    .itemIn("modern_industrialization:advanced_motor")
    .itemIn("4x modern_industrialization:fluid_pipe")
    .itemIn("modern_industrialization:air_intake")
    .itemIn("4x modern_industrialization:stainless_steel_curved_plate")
    .itemOut("immersive_aircraft:steel_boiler");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("2x modern_industrialization:invar_gear")
    .itemIn("2x modern_industrialization:copper_gear")
    .itemOut("immersive_aircraft:industrial_gears");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("4x modern_industrialization:item_pipe")
    .itemIn("4x modern_industrialization:fluid_pipe")
    .itemIn("8x modern_industrialization:stainless_steel_curved_plate")
    .fluidIn("100x modern_industrialization:soldering_alloy")
    .itemOut("immersive_aircraft:sturdy_pipes");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("minecraft:compass")
    .itemIn("2x modern_industrialization:stainless_steel_plate")
    .itemIn("modern_industrialization:redstone_battery")
    .itemOut("immersive_aircraft:gyroscope");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("minecraft:compass")
    .itemIn("2x modern_industrialization:gold_plate")
    .itemIn("minecraft:glass_pane")
    .itemIn("2x minecraft:glowstone_dust")
    .itemIn("modern_industrialization:electronic_circuit")
    .itemOut("immersive_aircraft:gyroscope_hud");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("minecraft:compass")
    .itemIn("3x modern_industrialization:stainless_steel_plate")
    .itemIn("2x modern_industrialization:analog_circuit")
    .itemIn("modern_industrialization:stainless_steel_ring")
    .itemOut("immersive_aircraft:gyroscope_dials");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("3x immersive_aircraft:hull")
    .itemIn("6x modern_industrialization:titanium_plate")
    .fluidIn("250x modern_industrialization:polyethylene")
    .itemOut("immersive_aircraft:hull_reinforcement");
  event.recipes.modern_industrialization
    .assembler(8, 200)
    .itemIn("modern_industrialization:stainless_steel_rod")
    .itemIn("modern_industrialization:steel_ring")
    .itemIn("32x modern_industrialization:rubber_sheet")
    .fluidIn("25x modern_industrialization:lubricant")
    .itemOut("immersive_aircraft:improved_landing_gear");

  // weapons
  event.recipes.modern_industrialization
    .assembler(8, 400)
    .itemIn("4x modern_industrialization:item_pipe")
    .itemIn("immersive_aircraft:industrial_gears")
    .itemIn("2x modern_industrialization:advanced_motor")
    .itemOut("immersive_aircraft:rotary_cannon");
  event.recipes.modern_industrialization
    .assembler(8, 400)
    .itemIn("4x modern_industrialization:bronze_curved_plate")
    .itemIn("3x minecraft:glass_pane")
    .itemOut("immersive_aircraft:telescope");
  event.recipes.modern_industrialization
    .assembler(8, 400)
    .itemIn("2x modern_industrialization:stainless_steel_gear")
    .itemIn("2x modern_industrialization:stainless_steel_plate")
    .itemIn("2x modern_industrialization:motor")
    .itemOut("immersive_aircraft:bomb_bay");
  event.recipes.modern_industrialization
    .assembler(8, 400)
    .itemIn("2x #minecraft:logs")
    .itemIn("2x modern_industrialization:stainless_steel_rod")
    .itemIn("2x minecraft:string")
    .itemOut("immersive_aircraft:heavy_crossbow");

  // aircraft
  event.recipes.modern_industrialization
    .assembler(8, 600)
    .itemIn("3x immersive_aircraft:hull")
    .itemIn("1x immersive_aircraft:engine")
    .itemIn("1x immersive_aircraft:propeller")
    .itemOut("immersive_aircraft:biplane");
  event.recipes.modern_industrialization
    .assembler(8, 600)
    .itemIn("6x immersive_aircraft:sail")
    .itemIn("2x immersive_aircraft:hull")
    .itemIn("immersive_aircraft:engine")
    .itemOut("immersive_aircraft:airship");
  event.recipes.modern_industrialization
    .assembler(8, 600)
    .itemIn("immersive_aircraft:airship")
    .itemIn("4x minecraft:chest")
    .itemIn("immersive_aircraft:hull")
    .fluidIn("100x modern_industrialization:acrylic_glue")
    .itemOut("immersive_aircraft:cargo_airship");
  event.recipes.modern_industrialization
    .assembler(8, 600)
    .itemIn("2x immersive_aircraft:hull")
    .itemIn("2x immersive_aircraft:sail")
    .itemIn("immersive_aircraft:propeller")
    .itemOut("immersive_aircraft:gyrodyne");
  event.recipes.modern_industrialization
    .assembler(8, 600)
    .itemIn("2x immersive_aircraft:hull")
    .itemIn("immersive_aircraft:engine")
    .itemIn("4x immersive_aircraft:propeller")
    .itemOut("immersive_aircraft:quadrocopter");
  event.recipes.modern_industrialization
    .assembler(8, 600)
    .itemIn("immersive_aircraft:biplane")
    .itemIn("3x immersive_aircraft:hull")
    .itemIn("6x minecraft:bamboo_block")
    .itemIn("immersive_aircraft:engine")
    .itemOut("immersive_aircraft:bamboo_hopper");
  event.recipes.modern_industrialization;
});
