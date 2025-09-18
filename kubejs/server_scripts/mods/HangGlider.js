ServerEvents.recipes((event) => {
  event.remove("hangglider:hang_glider");
  event.remove("hangglider:reinforced_hang_glider");
  event.remove("hangglider:glider_framework");
  event.remove("hangglider:glider_wing");
  event.shaped("hangglider:glider_framework", [" C ", "R R", "BRB"], {
    C: "modern_industrialization:bronze_ring",
    R: "modern_industrialization:bronze_rod",
    B: "modern_industrialization:bronze_bolt",
  });
  event.shaped("hangglider:glider_wing", ["  R", " RL", "RLL"], {
    R: "modern_industrialization:bronze_rod",
    L: "minecraft:leather",
  });
  event.shaped("hangglider:glider_wing", ["R  ", "LR ", "LLR"], {
    R: "modern_industrialization:bronze_rod",
    L: "minecraft:leather",
  });
  event.shaped("hangglider:hang_glider", ["   ", "WFW", "RCR"], {
    R: "modern_industrialization:bronze_rod",
    C: "modern_industrialization:bronze_ring",
    W: "hangglider:glider_wing",
    F: "hangglider:glider_framework",
  });
  event.shaped("hangglider:reinforced_hang_glider", ["B B", "PHP", "B B"], {
    B: "modern_industrialization:steel_bolt",
    P: "modern_industrialization:steel_plate",
    H: "hangglider:hang_glider",
  });
});
