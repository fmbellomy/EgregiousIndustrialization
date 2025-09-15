function unique(a) {
  var prims = { boolean: {}, number: {}, string: {} },
    objs = [];

  return a.filter(function (item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item)
        ? false
        : (prims[type][item] = true);
    else return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
}
let items = Item.getList()
  .toArray()
  .map((item) => item.getItem().toString());

let namespacedMats = items
  .filter((item) => item.includes("_ore"))
  .map((item) => {
    item = item
      .replace("deepslate_", "")
      .replace("end_stone_", "")
      .replace("netherrack_", "")
      .replace("nether_", "")
      .replace("_ore", "");
    return item;
  });
namespacedMats = namespacedMats.concat([
  "modern_industrialization:chromium",
  "modern_industrialization:manganese",
]);

ServerEvents.tags("item", (event) => {
  event.add("c:gems", "minecraft:coal");
  event.add("c:gems/coal", "minecraft:coal");
  event.add("c:gems", "modern_industrialization:lignite_coal");
  event.add("c:gems/lignite_coal", "modern_industrialization:lignite_coal");

  namespacedMats.forEach((mat) => {
    let namespace = mat.split(":")[0];
    let matName = mat.split(":")[1];
    let rawOre = `${namespace}:raw_${matName}`;
    event.add("c:raw_materials", rawOre);
    event.add(`c:raw_materials/${matName}`, rawOre);
    event.add("malum:prospectors_treasure", rawOre);
    event.add("malum:void_soulstone_material", rawOre);

    let block = `${rawOre}_block`;
    event.add("c:storage_blocks", block);
    event.add(`c:storage_blocks/raw_${matName}`, block);
    event.add("malum:prospectors_treasure", block);
    event.add("minecraft:incorrect_for_gold_tool", block);
    event.add("minecraft:incorrect_for_wooden_tool", block);
    event.add("minecraft:mineable/pickaxe", block);
    event.add("minecraft:needs_stone_tool", block);

    if (namespace === "minecraft") {
      namespace = "modern_industrialization";
    }
    let crushedDust = `${namespace}:${matName}_crushed_dust`;
    let washedCrushedDust = `${namespace}:${matName}_washed_crushed_dust`;
    event.add("egregious:crushed_dust", crushedDust);
    event.add(`egregious:crushed_dusts/${matName}`, crushedDust);
    event.add("egregious:washed_crushed_dust", washedCrushedDust);
    event.add(`egregious:washed_crushed_dusts/${matName}`, washedCrushedDust);

    let stoneOre = `${namespace}:${matName}_ore`;
    event.add("c:ores", stoneOre);
    event.add("c:ores_in_ground/stone", stoneOre);
    event.add(`c:ores/${matName}`, stoneOre);
    event.add("malum:prospectors_treasure", stoneOre);
    event.add("minecraft:incorrect_for_gold_tool", stoneOre);
    event.add("minecraft:incorrect_for_wooden_tool", stoneOre);
    event.add("minecraft:mineable/pickaxe", stoneOre);
    event.add("minecraft:needs_stone_tool", stoneOre);

    let orePrefixes = ["deepslate", "netherrack", "end_stone"];
    orePrefixes.forEach((prefix) => {
      let ore = `${namespace}:${prefix}_${matName}_ore`;
      event.add("c:ores", ore);
      event.add(`c:ores_in_ground/${prefix}`, ore);
      event.add(`c:ores/${matName}`, ore);
      event.add("malum:prospectors_treasure", ore);
      event.add("minecraft:incorrect_for_gold_tool", ore);
      event.add("minecraft:incorrect_for_wooden_tool", ore);
      event.add("minecraft:mineable/pickaxe", ore);
      event.add("minecraft:needs_stone_tool", ore);
    });
  });
});
ServerEvents.tags("block", (event) => {
  unique(namespacedMats).forEach((mat) => {
    let namespace = mat.split(":")[0];
    let matName = mat.split(":")[1];
    let rawOre = `${namespace}:raw_${matName}`;
    let block = `${rawOre}_block`;
    event.add("c:storage_blocks", block);
    event.add("c:storage_blocks/raw_" + matName, block);
    event.add("malum:prospectors_treasure", block);
    event.add("minecraft:incorrect_for_gold_tool", block);
    event.add("minecraft:incorrect_for_wooden_tool", block);
    event.add("minecraft:mineable/pickaxe", block);
    event.add("minecraft:needs_stone_tool", block);
  });
});
