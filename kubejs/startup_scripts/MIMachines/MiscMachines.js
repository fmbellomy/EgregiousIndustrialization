let EXTRUDER;
let FLUID_EXTRACTOR;
let PYROLYSE_OVEN;
MIMachineEvents.registerRecipeTypes((event) => {
  EXTRUDER = event.register("extruder").withItemInputs().withItemOutputs();
  FLUID_EXTRACTOR = event
    .register("fluid_extractor")
    .withItemInputs()
    .withFluidOutputs();
  PYROLYSE_OVEN = event
    .register("pyrolyse_oven")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs()
    .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
  let ANCHOR_X = 40;
  let ANCHOR_Y = 30;
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
  event.craftingSingleBlock(
    "Fluid Extractor",
    "fluid_extractor",
    FLUID_EXTRACTOR,
    ["electric"],
    187,
    event.progressBar(ANCHOR_X + 34, ANCHOR_Y + 16 - 4, "arrow"),
    event.efficiencyBar(ANCHOR_X - 2, ANCHOR_Y + 56),
    event.energyBar(ANCHOR_X - 22, ANCHOR_Y + 15 - 1),
    1,
    0,
    0,
    1,
    16,
    (items) => items.addSlot(ANCHOR_X + 10, ANCHOR_Y + 15),
    (fluids) => fluids.addSlot(ANCHOR_X + 63, ANCHOR_Y + 15),

    true,
    true,
    true
  );
  let gasSingleBlocks = [
    {
      tier: "LV",
      internal: "lv",
      eut: 32,
      euBuffer: 2048,
      fluidStorage: 16000,
    },
    {
      tier: "MV",
      internal: "mv",
      eut: 32 * 4,
      euBuffer: 2048 * 4,
      fluidStorage: 16000 * 2,
    },
    {
      tier: "HV",
      internal: "hv",
      eut: 32 * 16,
      euBuffer: 2048 * 16,
      fluidStorage: 16000 * 4,
    },
  ];
  gasSingleBlocks.forEach((gen) => {
    event.simpleGeneratorSingleBlock(
      `${gen.tier} Gas Turbine`, // the generator english name
      `${gen.internal}_gas_turbine`, // its internal name/id
      gen.internal, // the cable tier it can connect to (eg: lv, mv, hv, ev, superconductor)
      gen.eut, // its maximum energy generation rate (eu/tick)
      gen.euBuffer, // its internal energy storage (eu)
      gen.fluidStorage, // its fluid storage (mB), this is optional if it doesn't consume fluids (default is 0)
      (builder) => {
        builder
          // WARNING: THE VALUES THAT SHOW UP IN THE RECIPE VIEWER FOR THESE ARE IN EgregiousCore, NOT HERE
          .fluid("modern_industrialization:benzene", 800)
          .fluid("modern_industrialization:methane", 500)
          .fluid("modern_industrialization:naphtha", 120)
          .fluid("modern_industrialization:phenol", 360)
          .fluid("modern_industrialization:toluene", 400);
      },
      // ---- SAME AS FOR A SINGLE BLOCK CRAFTING MACHINE ----
      gen.internal, // the casing
      "gas_turbine", // the folder of the model
      // front overlay?, top overlay?, side overlay?
      false,
      false,
      true
    );
  });

  const pyrolyseHatch = event.hatchOf(
    "item_input",
    "item_output",
    "fluid_input",
    "fluid_output",
    "energy_input"
  );
  const heatproofMember = event.memberOfBlock(
    "modern_industrialization:heatproof_machine_casing"
  );
  const cupronickelCoilMember = event.memberOfBlock(
    "modern_industrialization:cupronickel_coil"
  );
  const pyrolyseShape = event
    .layeredShape("heatproof_machine_casing", [
      ["HHH", "HHH", "HHH"],
      ["CCC", "C C", "CCC"],
      ["CCC", "C C", "CCC"],
      ["HHH", "H#H", "HHH"],
    ])
    .key("H", heatproofMember, pyrolyseHatch)
    .key("C", cupronickelCoilMember, event.noHatch())
    .build();
  event.simpleElectricCraftingMultiBlock(
    /* GENERAL PARAMETERS */
    // English name, internal name, recipe type, multiblock shape
    "Pyrolyse Oven",
    "pyrolyse_oven",
    PYROLYSE_OVEN,
    pyrolyseShape,
    /* REI DISPLAY CONFIGURATION */
    // REI progress bar
    event.progressBar(77, 33, "arrow"),
    // REI item inputs, item outputs, fluid inputs, fluid outputs
    (itemInputs) => itemInputs.addSlots(56, 35, 1, 2),
    (itemOutputs) => itemOutputs.addSlot(102, 35),
    (fluidInputs) => fluidInputs.addSlot(36, 35),
    (fluidOutputs) => fluidOutputs.addSlot(122, 35),
    /* MODEL CONFIGUATION */
    // casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
    "heatproof_machine_casing",
    "pyrolyse_oven",
    true,
    false,
    false
  );
});
