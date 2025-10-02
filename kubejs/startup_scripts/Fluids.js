MIRegistrationEvents.registerFluids((event) => {
  event.register(
    "Uraninite Slush",
    "uraninite_slush",
    0x1b1b1b,
    "water",
    false,
    "medium"
  );
  event.register("Coal Tar", "coal_tar", 0x161616, "lava", false, "full");
  event.register(
    "Charcoal Byproducts",
    "charcoal_byproducts",
    0x673c1f,
    "lava",
    false,
    "full"
  );
  event.register("Wood Tar", "wood_tar", 0x34241a, "water", false, "full");
  event.register("Phenol", "phenol", 0x643d23, "lava", false, "full");
});
