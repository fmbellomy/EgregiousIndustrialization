ServerEvents.recipes((event) => {
  event.shaped("egregiouscore:ore_drilling_plant", ["CGC", "PMP", "GRG"], {
    C: "modern_industrialization:bronze_plate",
    G: "modern_industrialization:bronze_gear",
    P: "modern_industrialization:bronze_machine_casing_pipe",
    M: "modern_industrialization:bronze_machine_casing",
    R: "modern_industrialization:invar_rotary_blade",
  });
});
