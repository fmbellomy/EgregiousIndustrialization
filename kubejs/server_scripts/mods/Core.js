ServerEvents.recipes((event) => {
  event.shaped("egregiouscore:ore_drilling_plant", ["CGC", "PMP", "GRG"], {
    C: "modern_industrialization:electronic_circuit",
    G: "modern_industrialization:steel_gear",
    P: "modern_industrialization:steel_machine_casing_pipe",
    M: "modern_industrialization:basic_machine_hull",
    R: "modern_industrialization:invar_rotary_blade",
  });
});
