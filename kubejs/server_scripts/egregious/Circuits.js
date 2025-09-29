ServerEvents.recipes((event) => {
  // ANALOG_CIRCUIT, ELECTRONIC_CIRCUIT, DIGITAL_CIRCUIT, PROCESSING_UNIT, QUANTUM_CIRCUIT
  // starting with wafer shenanigans
  let pairs = [
    { lens: "glass", wafer: "soc" },
    { lens: "diamond", wafer: "cpu" },
    { lens: "emerald", wafer: "ram" },
    { lens: "ruby", wafer: "ilc" },
    { lens: "quartz", wafer: "nand" },
    { lens: "certus", wafer: "nor" },
  ];
  /*pairs.forEach((pair) =>
    event.recipes.modern_industrialization
      .laser_engraver(40, 25)
      .itemIn(`kubejs:${pair.lens}_lens`, 0.0)
      .itemIn("modern_industrialization:silicon_wafer")
      .itemOut(`kubejs:${pair.wafer}_wafer`)
  );*/
});
