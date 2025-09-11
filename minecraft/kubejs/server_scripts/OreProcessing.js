function matSet(oreMat, washByproductMat, smeltsTo) {
  return {
    smeltsTo: smeltsTo,
    crushedDust: `modern_industrialization:${oreMat}_crushed_dust`,
    washedCrushedDust: `modern_industrialization:${oreMat}_washed_crushed_dust`,
    dust: `modern_industrialization:${oreMat}_dust`,
    washByproduct: `modern_industrialization:${washByproductMat}_dust`,
  };
}
const MI = "modern_industrialization";
const ORE_PRODUCTS = {
  // vanilla materials
  coal: matSet("coal", "coal", "minecraft:coal"),
  copper: matSet("copper", "gold", "minecraft:copper_ingot"),
  iron: matSet("iron", "nickel", "minecraft:iron_ingot"),
  gold: matSet("gold", "silver", "minecraft:gold_ingot"),
  quartz: matSet("quartz", "silicon", "minecraft:quartz"),
  diamond: matSet("diamond", "carbon", "minecraft:diamond"),
  emerald: matSet("emerald", "silicon", "minecraft:emerald"),
  redstone: matSet("redstone", "silicon", "minecraft:redstone"),
  lapis: matSet("lapis", "lapis", "minecraft:lapis_lazuli"),

  // base MI materials
  antimony: matSet("antimony", "antimony", `${MI}:antimony_ingot`),
  bauxite: matSet("bauxite", "aluminum"),
  lead: matSet("lead", "lead", `${MI}:lead_ingot`),
  silver: matSet("silver", "silver", `${MI}:silver_ingot`),
  lignite_coal: matSet("lignite_coal", "sulfur", `${MI}:lignite_coal`),
  monazite: matSet("monazite", "neodymium"),
  nickel: matSet("nickel", "iron", `${MI}:nickel_ingot`),
  salt: matSet("salt", "salt"),
  tin: matSet("tin", "tin", `${MI}:tin_ingot`),
  tungsten: matSet("tungsten", "scheelite"),
  uranium: matSet("uranium", "thorium"),
  ruby: matSet("ruby", "chromium"),
  beryllium: matSet("beryllium", "thorium"),
  sulfur: matSet("sulfur", "sulfur"),
  titanium: matSet("titanium", "ilmenite"),
  platinum: matSet("platinum", "platinum"),
  iridium: matSet("iridium", "platinum", `${MI}:iridium_ingot`),
  chromium: matSet("chromium", "chromium"),
  manganese: matSet("manganese", "nickel"),

  // egregious materials
  tetrahedrite: matSet("tetrahedrite", "copper", "minecraft:copper_ingot"), // bathe for antimony
  stibnite: matSet("stibnite", "antimony", `${MI}:antimony_ingot`),
  chalcopyrite: matSet("chalcopyrite", "pyrite", "minecraft:copper_ingot"),
  pyrite: matSet("pyrite", "chalcopyrite", "minecraft:iron_ingot"),
  cassiterite: matSet("cassiterite", "tin", `${MI}:tin_ingot`),
  asbestos: matSet("asbestos", "tin", `${MI}:asbestos_dust`),
  magnetite: matSet("magnetite", "iron", "minecraft:iron_ingot"),
  garnierite: matSet("garnierite", "nickel", `${MI}:nickel_ingot`),
  pentlandite: matSet("pentlandite", "nickel", `${MI}:nickel_ingot`),
  graphite: matSet("graphite", "carbon"),
  thorium: matSet("thorium", "uranium"),
  galena: matSet("galena", "lead", `${MI}:lead_ingot`), // bathe for silver
  pitchblende: matSet("pitchblende", "thorium"), // bathe for uranium
  uraninite: matSet("uraninite", "uranium"),
  scheelite: matSet("scheelite", "scheelite"),
  ilmenite: matSet("ilmenite", "iron"),
  chromite: matSet("chromite", "iron"),
  uvarovite: matSet("uvarovite", "ruby"),
};

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

function keys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

ServerEvents.recipes((event) => {
  let items = Item.getList()
    .toArray()
    .map((item) => item.getItem().toString());

  let namespacedMats = items
    .filter((item) => item.includes("_ore") && !item.includes("washer"))
    .map((item) => {
      item = item
        .replace("deepslate_", "")
        .replace("end_stone_", "")
        .replace("netherrack_", "")
        .replace("nether_", "")
        .replace("_ore", "");
      return item;
    });
  event.remove({
    type: "modern_industrialization:macerator",
    input: "#c:raw_materials",
  });
  event.remove({
    type: "minecraft:blasting",
    input: "#c:raw_materials",
  });
  event.remove({
    type: "minecraft:smelting",
    input: "#c:raw_materials",
  });
  event.remove({
    type: "minecraft:blasting",
    input: "#c:dusts",
  });
  event.remove({
    type: "minecraft:smelting",
    input: "#c:dusts",
  });
  event.remove({
    type: "minecraft:blasting",
    input: "#c:ores",
  });
  event.remove({
    type: "minecraft:smelting",
    input: "#c:ores",
  });
  event.remove({
    type: "minecraft:blasting",
    input: "#egregious:crushed_dust",
  });
  event.remove({
    type: "minecraft:smelting",
    input: "#egregious:crushed_dust",
  });

  event.remove({
    type: "modern_industrialization:macerator",
    input: "#c:ores",
  });
  event.remove({
    type: "modern_industrialization:forge_hammer",
    input: "#c:ores",
  });
  event.remove({
    type: "modern_industrialization:forge_hammer",
    input: "#c:raw_materials",
  });
  // chromium and manganese are special cases that don't actually have ore blocks
  let chromiumSet = ORE_PRODUCTS.chromium;
  event.recipes.modern_industrialization
    .ore_washer(2, 200)
    .itemIn(chromiumSet.crushedDust)
    .fluidIn("minecraft:water")
    .itemOut(chromiumSet.washedCrushedDust)
    .itemOut(chromiumSet.washByproduct, 0.1);
  let manganeseSet = ORE_PRODUCTS.manganese;
  event.recipes.modern_industrialization
    .ore_washer(2, 200)
    .itemIn(manganeseSet.crushedDust)
    .fluidIn("minecraft:water")
    .itemOut(manganeseSet.washedCrushedDust)
    .itemOut(manganeseSet.washByproduct, 0.1);

  let seen = [];
  namespacedMats.forEach((nsMat) => {
    let namespace = nsMat.split(":")[0];
    if (namespace === "malum") {
      return;
    }
    let mat = nsMat.split(":")[1];
    if (seen.indexOf(mat) != -1) {
      return;
    }
    seen.push(mat);
    console.log(mat);
    let set = ORE_PRODUCTS[mat];
    switch (mat) {
      // abusing switch case fallthrough like a real gamer
      case "iron":
      case "gold":
      case "copper":
        event.recipes.modern_industrialization
          .macerator(2, 100)
          .itemIn(`minecraft:raw_${mat}`)
          .itemOut(set.crushedDust)
          .itemOut(set.crushedDust, 0.25);
        break;
      default:
        event.recipes.modern_industrialization
          .macerator(2, 100)
          .itemIn(`modern_industrialization:raw_${mat}`)
          .itemOut(set.crushedDust)
          .itemOut(set.crushedDust, 0.25);
        break;
    }
    event.recipes.modern_industrialization
      .ore_washer(2, 200)
      .itemIn(set.crushedDust)
      .fluidIn("minecraft:water")
      .itemOut(set.washedCrushedDust)
      .itemOut(set.washByproduct, 0.1);
    /* DISABLED UNTIL MI UPDATES AND EI ACTUALLY WORKS
    event.recipes.modern_industrialization
      .ore_washer(2, 80)
      .itemIn(set.crushedDust)
      .fluidIn("extendedindustrialization:distilled_water")
      .itemOut(set.washByproduct, 0.25);
      */
    if (mat !== "redstone") {
      event.recipes.modern_industrialization
        .macerator(2, 100)
        .itemIn(set.washedCrushedDust)
        .itemOut(set.dust)
        .itemOut(set.dust, 0.25);
    } else {
      event.recipes.modern_industrialization
        .macerator(2, 100)
        .itemIn(set.washedCrushedDust)
        .itemOut("minecraft:redstone")
        .itemOut("minecraft:redstone", 0.25);
    }

    let smeltNamespace = "modern_industrialization";
    if (mat == "iron" || mat == "gold" || mat == "copper") {
      smeltNamespace = "minecraft";
    }
    if (set.smeltsTo !== undefined) {
      if (set.smeltsTo.indexOf("ingot") !== -1) {
        event.smelting(set.smeltsTo, set.washedCrushedDust);
        event.smelting(set.smeltsTo, set.crushedDust);
        event.smelting(set.smeltsTo, set.dust);
        event.smelting(set.smeltsTo, `${smeltNamespace}:raw_${mat}`);

        event.blasting(set.smeltsTo, set.washedCrushedDust);
        event.blasting(set.smeltsTo, set.crushedDust);
        event.blasting(set.smeltsTo, set.dust);
        event.blasting(set.smeltsTo, `${smeltNamespace}:raw_${mat}`);
      } else {
        event.smelting(set.smeltsTo, `${smeltNamespace}:raw_${mat}`);
        event.blasting(set.smeltsTo, `${smeltNamespace}:raw_${mat}`);
      }
    }
  });

  event.replaceInput(
    {
      type: "modern_industrialization:chemical_reactor",
    },
    "modern_industrialization:chromium_crushed_dust",
    "modern_industrialization:chromium_washed_crushed_dust"
  );

  event.replaceInput(
    {
      type: "modern_industrialization:chemical_reactor",
    },
    "modern_industrialization:manganese_crushed_dust",
    "modern_industrialization:manganese_washed_crushed_dust"
  );
});
