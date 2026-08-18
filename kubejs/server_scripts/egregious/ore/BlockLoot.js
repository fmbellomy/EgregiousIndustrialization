LootJS.lootTables((event) => {
  // toBeReplaced is usually the same thing as the material, but things like lapis->lapis_lazuli are exceptions
  function replaceWithRaw(namespace, mat, toBeReplaced) {
    if (toBeReplaced === undefined) {
      toBeReplaced = mat;
    }
    let raw = LootEntry.of(`modern_industrialization:raw_${mat}`);
    event
      .getBlockTable(`${namespace}:${mat}_ore`)
      .modifyItemEntry((itemEntry) => {
        return LootEntry.of(raw.item);
      });
    event
      .getBlockTable(`${namespace}:deepslate_${mat}_ore`)

      .modifyItemEntry((itemEntry) => {
        return LootEntry.of(raw.item);
      });
  }
  replaceWithRaw("minecraft", "diamond");
  replaceWithRaw("minecraft", "emerald");
  replaceWithRaw("minecraft", "redstone");
  replaceWithRaw("minecraft", "coal");
  replaceWithRaw("minecraft", "lapis", "lapis_lazuli");
  let MINamespace = "modern_industrialization";
  replaceWithRaw(MINamespace, "salt", "salt_dust");
  replaceWithRaw(MINamespace, "sulfur", "sulfur_dust");
  replaceWithRaw(MINamespace, "monazite", "monazite_dust");
  replaceWithRaw(MINamespace, "bauxite", "bauxite_dust");
  replaceWithRaw(MINamespace, "lignite_coal");

  // a special case for nether quartz ore
  event
    .getBlockTable("minecraft:nether_quartz_ore")
    .modifyItemEntry((itemEntry) => {
      return LootEntry.of("modern_industrialization:raw_quartz");
    });
});
