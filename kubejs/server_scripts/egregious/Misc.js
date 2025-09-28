ServerEvents.recipes((event) => {
  // BASIC, ADVANCED, TURBO, HIGHLY_ADVANCED, QUANTUM
  event.replaceInput(
    { output: "advanced_machine_casing" },
    "basic_machine_hull",
    "steel_machine_casing"
  );
  event.replaceInput(
    { output: "turbo_machine_casing" },
    "advanced_machine_hull",
    "advanced_machine_casing"
  );
  event.replaceInput(
    { output: "highly_advanced_machine_casing" },
    "turbo_machine_hull",
    "turbo_machine_casing"
  );
  event.replaceInput(
    { output: "quantum_machine_casing" },
    "highly_advanced_machine_hull",
    "highly_advanced_machine_casing"
  );
});
