MIMaterialEvents.addMaterials((event) => {
  event.createMaterial(
    "Silicon Carbide",
    "silicon_carbide",
    0x424544,
    (builder) => {
      builder
        .hardness("soft")
        .materialSet("metallic")
        .addParts("dust", "ingot", "plate")
        .defaultRecipes();
    }
  );
});

MIMaterialEvents.modifyMaterial("annealed_copper", (event) => {
  event.builder.addParts("fine_wire");
});
MIMaterialEvents.modifyMaterial("cupronickel", (event) => {
  event.builder.addParts("fine_wire");
});
