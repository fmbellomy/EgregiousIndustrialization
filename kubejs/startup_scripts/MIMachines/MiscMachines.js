let EXTRUDER;
MIMachineEvents.registerRecipeTypes((event) => {
  EXTRUDER = event.register("extruder").withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
  event.craftingSingleBlock(
    "Extruder",
    "extruder",
    EXTRUDER,
    ["electric"],
    187,
    event.progressBar(ANCHOR_X + 34, ANCHOR_Y + 16 - 4, "wiremill"),
    event.efficiencyBar(ANCHOR_X - 2, ANCHOR_Y + 56),
    event.energyBar(ANCHOR_X - 22, ANCHOR_Y + 15 - 1),
    2,
    1,
    0,
    0,
    16,
    (items) =>
      items
        .addSlots(ANCHOR_X + 10, ANCHOR_Y + 7, 1, 2)
        .addSlot(ANCHOR_X + 63, ANCHOR_Y + 15),
    (fluids) => {},
    true,
    true,
    false
  );
});
