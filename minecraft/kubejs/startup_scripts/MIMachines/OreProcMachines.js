let ORE_WASHER;
let CHEMICAL_BATH;
let SIFTER;
MIMachineEvents.registerRecipeTypes((event) => {
  ORE_WASHER = event
    .register("ore_washer")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs();

  CHEMICAL_BATH = event
    .register("chemical_bath")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs();
  SIFTER = event.register("sifter").withItemInputs().withItemOutputs();
});

// these are totally magic numbers but i'm anchoring the entire GUI on the item input slot.
MIMachineEvents.registerMachines((event) => {
  let ANCHOR_X = 40;
  let ANCHOR_Y = 30;
  event.craftingSingleBlock(
    "Ore Washer",
    "ore_washer",
    ORE_WASHER,
    ["bronze", "steel", "electric"],
    187,
    // arrow progress bar should be offset by (1,-4) from krita measurement for some reason...
    event.progressBar(ANCHOR_X + 31 - 1, ANCHOR_Y + 16 - 4, "extract"),
    event.efficiencyBar(ANCHOR_X - 2, ANCHOR_Y + 56),
    // similar to above, the energy bar needs to be offset by (0,-1)
    event.energyBar(ANCHOR_X - 22, ANCHOR_Y + 15 - 1),
    1,
    2,
    1,
    0,
    16,
    (items) =>
      items
        .addSlot(ANCHOR_X, ANCHOR_Y)
        .addSlots(ANCHOR_X + 63, ANCHOR_Y + 15, 2, 1),
    (fluids) => fluids.addSlot(ANCHOR_X, ANCHOR_Y + 29),
    true, // front overlay
    false, // top overlay
    true // side overlay
  );
  event.craftingSingleBlock(
    "Chemical Bath",
    "chemical_bath",
    CHEMICAL_BATH,
    ["electric"],
    187,
    event.progressBar(ANCHOR_X + 31 - 1, ANCHOR_Y + 16 - 4, "arrow"),
    event.efficiencyBar(ANCHOR_X - 2, ANCHOR_Y + 56),
    // similar to above, the energy bar needs to be offset by (0,-1)
    event.energyBar(ANCHOR_X - 22, ANCHOR_Y + 15 - 1),
    1,
    2,
    1,
    0,
    16,
    (items) =>
      items
        .addSlot(ANCHOR_X, ANCHOR_Y)
        .addSlots(ANCHOR_X + 63, ANCHOR_Y + 15, 2, 1),
    (fluids) => fluids.addSlot(ANCHOR_X, ANCHOR_Y + 29),
    true,
    false,
    true
  );

  ANCHOR_Y = 48;
  event.craftingSingleBlock(
    "Sifter",
    "sifter",
    SIFTER,
    ["steel", "electric"],
    190,
    event.progressBar(ANCHOR_X + 29 - 1, ANCHOR_Y - 3, "arrow"),
    event.efficiencyBar(ANCHOR_X - 4, ANCHOR_Y + 42),
    // similar to above, the energy bar needs to be offset by (0,-1)
    event.energyBar(ANCHOR_X - 27, ANCHOR_Y),
    1,
    9,
    0,
    0,
    16,
    (items) =>
      items
        .addSlot(ANCHOR_X, ANCHOR_Y)
        .addSlots(ANCHOR_X + 59, ANCHOR_Y - 18, 3, 3),
    (fluids) => {},
    true,
    true,
    false
  );
});
