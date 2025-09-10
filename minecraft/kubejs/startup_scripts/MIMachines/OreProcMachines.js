let ORE_WASHER;
let CHEMICAL_BATH;
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
});

// these are totally magic numbers but i'm anchoring the entire GUI on the item input slot.
MIMachineEvents.registerMachines((event) => {
  const ANCHOR_X = 40;
  const ANCHOR_Y = 30;
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
    true,
    true,
    false
  );
  event.craftingSingleBlock(
    "Chemical Bath",
    "chemical_bath",
    CHEMICAL_BATH,
    ["bronze", "steel", "electric"],
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
    true,
    false
  );
});
