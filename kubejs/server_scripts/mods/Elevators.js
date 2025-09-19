ServerEvents.recipes((event) => {
  event.remove({ input: "minecraft:ender_pearl", mod: "elevatorid" });
  event.shaped("elevatorid:elevator_white", ["PPP", "PEP", "PPP"], {
    P: "modern_industrialization:iron_plate",
    E: "minecraft:ender_pearl",
  });
});
