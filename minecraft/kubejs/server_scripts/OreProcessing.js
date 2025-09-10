function washSet(oreMat, washByproductMat) {
  return {
    crushedDust: `modern_industrialization:${oreMat}_crushed_dust`,
    washedCrushedDust: `modern_industrialization:${oreMat}_washed_crushed_dust`,
    dust: `modern_industrialization:${oreMat}_dust`,
    byProduct: `modern_industrialization:${washByproductMat}_dust`,
  };
}
const ORE_PRODUCTS = {
  coal: washSet("coal", "carbon"),
  copper: washSet("copper", "gold"),
  iron: washSet("iron", "nickel"),
  gold: washSet("gold", "silver"),

  thorium: washSet("thorium", "uranium"),
};

ServerEvents.recipes((event) => {
  let items = Item.getList()
    .toArray()
    .map((item) => item.getItem().toString());

  let mats = items
    .filter((item) => item.includes("_ore"))
    .map((item) => {
      item = item
        .replace("deepslate_", "")
        .replace("end_stone_", "")
        .replace("netherrack_", "")
        .replace("nether_", "")
        .replace("_ore", "");
      return item;
    })
    .map((item) => {
      return item.split(":")[1];
    });

  event.remove({
    type: "modern_industrialization:macerator",
    input: "#c:raw_materials",
  });
  mats.forEach((mat) => {
    event.recipes.modern_industrialization.macerator(2, 100);
  });
});
