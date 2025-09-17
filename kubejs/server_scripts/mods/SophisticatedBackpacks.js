ServerEvents.recipes((event) => {
  function changeBackpackMaterial(original, replacement, previous) {
    event.remove({ output: `sophisticatedbackpacks:${original}_backpack` });
    event.shaped(
      `sophisticatedbackpacks:${original}_backpack`,
      ["TTT", "TBT", "TTT"],
      {
        T: `modern_industrialization:${replacement}_plate`,
        B: `sophisticatedbackpacks:${previous}backpack`,
      }
    );
  }

  changeBackpackMaterial("copper", "bronze", "");
  changeBackpackMaterial("iron", "steel", "copper_");
  changeBackpackMaterial("gold", "aluminum", "iron_");
  changeBackpackMaterial("diamond", "stainless_steel", "gold_");
  changeBackpackMaterial("netherite", "titanium", "diamond_");
});
