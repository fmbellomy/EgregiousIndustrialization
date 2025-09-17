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

  function changeStackMaterial(original, replacement) {
    event.replaceInput(
      {mod:'sophisticatedbackpacks'},
      `minecraft:${original}_block`,
      `modern_industrialization:${replacement}_block`,
    );
  }

  changeStackMaterial('iron', 'steel');
  changeStackMaterial('gold', 'aluminum');
  changeStackMaterial('diamond', 'stainless_steel');
  changeStackMaterial('netherite', 'titanium');
});
