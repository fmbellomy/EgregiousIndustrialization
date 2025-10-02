function itemStack(itemName, quantity, namespace) {
  if (!namespace) {
    namespace = "modern_industrialization";
  }
  if (quantity > 1) {
    return `${quantity}x ${namespace}:${itemName}`;
  } else {
    return `${namespace}:${itemName}`;
  }
}
ServerEvents.recipes((event) => {
  const { assembler } = event.recipes.modern_industrialization;

  assembler(8, 100)
    .itemOut(itemStack("analog_circuit_board", 2))
    .itemIn(itemStack("rubber_sheet", 2))
    .itemIn("#c:plates/copper")
    .id(
      "modern_industrialization:assembler_generated/electric_age/circuit/craft/lv_circuit_board"
    );

  assembler(8, 200)
    .itemOut(itemStack("electronic_circuit_board", 2))
    .itemIn(itemStack("electrum_cable", 6))
    .itemIn(itemStack("redstone_battery", 1))
    .itemIn(itemStack("analog_circuit_board", 2))
    .itemIn("4x #c:plates/aluminum")
    .id(
      "modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit_board"
    );

  assembler(16, 400)
    .itemOut(itemStack("digital_circuit_board", 2))
    .itemIn(itemStack("aluminum_cable", 9))
    .itemIn(itemStack("silicon_battery", 2))
    .itemIn(itemStack("electronic_circuit_board", 2))
    .itemIn(itemStack("stainless_steel_plate", 6))
    .fluidIn("750x modern_industrialization:polyethylene")
    .id(
      "modern_industrialization:electric_age/circuit/assembler/digital_circuit_board"
    );

  assembler(8, 200)
    .itemOut(itemStack("diode", 2))
    .itemIn("1x #c:plates/silicon")
    .itemIn("3x #c:glass_blocks")
    .itemIn(itemStack("electrum_fine_wire", 3))
    .itemIn("1x #c:plates/steel")
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/diode"
    );

  assembler(8, 200)
    .itemOut(itemStack("diode", 4))
    .itemIn(itemStack("silicon_n_doped_plate", 1))
    .itemIn("3x #c:glass_blocks")
    .itemIn(itemStack("electrum_fine_wire", 3))
    .itemIn("1x #c:plates/steel")
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/diode_doped"
    );

  assembler(8, 200)
    .itemOut("3x modern_industrialization:transistor")
    .itemIn("3x #c:plates/silicon")
    .itemIn("1x modern_industrialization:electrum_fine_wire")
    .itemIn("3x #c:plates/steel")
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/transistor"
    );

  assembler(8, 200)
    .itemOut(itemStack("transistor", 6))
    .itemIn(itemStack("silicon_p_doped_plate", 2))
    .itemIn(itemStack("silicon_n_doped_plate", 1))
    .itemIn(itemStack("electrum_fine_wire", 1))
    .itemIn("3x #c:plates/steel")
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/transistor_doped"
    );

  assembler(8, 200)
    .itemOut(itemStack("motor", 3))
    .itemIn(itemStack("steel_rod_magnetic", 2))
    .itemIn("4x #c:rods/steel")
    .itemIn(itemStack("tin_cable", 4))
    .itemIn(itemStack("copper_wire", 8))
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/motor"
    );

  assembler(8, 200)
    .itemOut(itemStack("large_motor", 3))
    .itemIn(itemStack("electronic_circuit", 2))
    .itemIn("4x #c:rods/aluminum")
    .itemIn(itemStack("motor", 10))
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/large_motor"
    );

  assembler(8, 200)
    .itemOut(itemStack("advanced_motor", 3))
    .itemIn(itemStack("stainless_steel_rod_magnetic", 2))
    .itemIn("4x #c:rods/stainless_steel")
    .itemIn(itemStack("aluminum_cable", 4))
    .itemIn(itemStack("annealed_copper_wire", 8))
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/advanced_motor"
    );

  assembler(8, 200)
    .itemOut(itemStack("large_advanced_motor", 3))
    .itemIn(itemStack("processing_unit", 2))
    .itemIn("4x #c:rods/titanium")
    .itemIn(itemStack("advanced_motor", 10))
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/large_advanced_motor"
    );

  assembler(8, 200)
    .itemOut(itemStack("pump", 3))
    .itemIn("6x #modern_industrialization:fluid_pipes")
    .itemIn(itemStack("tin_rotor", 6))
    .itemIn(itemStack("motor", 2))
    .fluidIn("100x modern_industrialization:soldering_alloy")
    .id("modern_industrialization:electric_age/component/assembler/pump");

  assembler(8, 200)
    .itemOut(itemStack("large_pump", 3))
    .itemIn(itemStack("electronic_circuit", 3))
    .itemIn(itemStack("aluminum_rotor", 6))
    .itemIn(itemStack("large_motor", 2))
    .itemIn(itemStack("pump", 6))
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/large_pump"
    );

  assembler(8, 200)
    .itemOut(itemStack("advanced_pump", 3))
    .itemIn("6x #modern_industrialization:fluid_pipes")
    .itemIn(itemStack("stainless_steel_rotor", 6))
    .itemIn(itemStack("advanced_motor", 2))
    .fluidIn("200x modern_industrialization:soldering_alloy")
    .id(
      "modern_industrialization:electric_age/component/assembler/advanced_pump"
    );

  assembler(8, 200)
    .itemOut(itemStack("large_advanced_pump", 3))
    .itemIn(itemStack("processing_unit", 3))
    .itemIn(itemStack("titanium_rotor", 6))
    .itemIn(itemStack("large_advanced_motor", 2))
    .itemIn(itemStack("advanced_pump", 6))
    .id(
      "modern_industrialization:assembler_generated/electric_age/component/craft/large_advanced_pump"
    );
});
