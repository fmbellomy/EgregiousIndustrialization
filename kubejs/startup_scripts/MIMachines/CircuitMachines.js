let CIRCUIT_ASSEMBLER;
let LASER_ENGRAVER;
MIMachineEvents.registerRecipeTypes((event) => {
  CIRCUIT_ASSEMBLER = event
    .register("circuit_assembler")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs();
  // if i were truly copying gtnh at every step of the way, i would have made this thing have fluid inputs
  LASER_ENGRAVER = event
    .register("laser_engraver")
    .withItemInputs()
    .withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
  let ANCHOR_X = 40;
  let ANCHOR_Y = 30;
  event.craftingSingleBlock(
    /* GENERAL PARAMETERS FIRST */
    // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
    "Circuit Assembler",
    "circuit_assembler",
    CIRCUIT_ASSEMBLER,
    ["electric"],
    /* GUI CONFIGURATION */
    // Background height (or -1 for default value), progress bar, efficiency bar, energy bar
    186,
    event.progressBar(105, 45, "circuit"),
    event.efficiencyBar(48, 86),
    event.energyBar(14, 44),
    /* SLOT CONFIGURATION */
    // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
    9,
    3,
    1,
    0,
    // Capacity for fluid slots (unused here)
    16,
    // Slot positions: items and fluids.
    // Explanation: 3x3 grid of item slots starting at position (42, 27), then 1x3 grid of item slots starting at position (139, 27).
    (items) => items.addSlots(42, 27, 3, 3).addSlots(139, 27, 1, 3),
    (fluids) => fluids.addSlot(108, 27), // i am completely guessing for this position but we'll see
    /* MODEL CONFIGURATION */
    // front overlay?, top overlay?, side overlay?
    true,
    true,
    false
  );
  event.craftingSingleBlock(
    /* GENERAL PARAMETERS FIRST */
    // English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
    "Laser Engraver",
    "laser_engraver",
    LASER_ENGRAVER,
    ["electric"],
    187,
    event.progressBar(ANCHOR_X + 31 - 1, ANCHOR_Y + 16 - 4, "arrow"),
    event.efficiencyBar(ANCHOR_X - 2, ANCHOR_Y + 56),
    // similar to above, the energy bar needs to be offset by (0,-1)
    event.energyBar(ANCHOR_X - 22, ANCHOR_Y + 15 - 1),
    2,
    1,
    0,
    0,
    16,
    (items) =>
      items
        .addSlots(ANCHOR_X + 10, ANCHOR_Y + 10, 1, 2)
        .addSlot(ANCHOR_X + 63, ANCHOR_Y + 15),
    (fluids) => {},
    true,
    false,
    false
  );
});
