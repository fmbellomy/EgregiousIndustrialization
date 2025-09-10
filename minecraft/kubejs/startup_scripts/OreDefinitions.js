MIMaterialEvents.addMaterials((event) => {
  function makeMetallicOre(name, id, color, blocks, ore_set) {
    if (blocks === undefined) {
      blocks = ["minecraft:stone", "minecraft:deepslate"];
    }

    if (ore_set === undefined) {
      ore_set = "iron";
    }

    event.createMaterial(name, id, color, (builder) => {
      builder
        .hardness("average")
        .materialSet("metallic")
        .addParts("dust", "crushed_dust")
        .customRegularPart("Washed Crushed Dust", "washed_crushed_dust");

      blocks.forEach((block) => {
        builder.ore({ generate: false, ore_set: ore_set }, block);
      });
      builder.rawMetal(ore_set);
    });
  }

  const OVERWORLD = ["minecraft:stone", "minecraft:deepslate"];
  const NETHER = ["minecraft:netherrack"];
  const END = ["minecraft:end_stone"];

  // tetrahedrite vein ores
  makeMetallicOre(
    "Tetrahedrite",
    "tetrahedrite",
    0xd22300,
    END.concat(NETHER),
    "copper"
  );
  makeMetallicOre("Stibnite", "stibnite", 0x2e2e2e, END.concat(NETHER), "iron");

  // chalcopyrite vein ores
  makeMetallicOre(
    "Chalcopyrite",
    "chalcopyrite",
    0x684e1a,
    OVERWORLD.concat(NETHER, END),
    "copper"
  );
  makeMetallicOre(
    "Pyrite",
    "pyrite",
    0x886c1f,
    OVERWORLD.concat(NETHER, END),
    "iron"
  );
  // cassiterite (tin) vein
  makeMetallicOre(
    "Cassiterite",
    "cassiterite",
    0x7e7e7e,
    OVERWORLD.concat(END),
    "gold"
  );
  makeMetallicOre(
    "Asbestos",
    "asbestos",
    0x7c7c7c,
    OVERWORLD.concat(END),
    "gold"
  );
  // magnetite vein
  makeMetallicOre(
    "Magnetite",
    "magnetite",
    0x1b1b1b,
    OVERWORLD.concat(NETHER),
    "iron"
  );

  // nickel vein
  makeMetallicOre(
    "Garnierite",
    "garnierite",
    0x207e2e,
    OVERWORLD.concat(END),
    "iron"
  );
  makeMetallicOre(
    "Pentlandite",
    "pentlandite",
    0x6c6203,
    OVERWORLD.concat(END),
    "iron"
  );
  // diamond vein
  makeMetallicOre("Graphite", "graphite", 0x444647, OVERWORLD, "iron");
  // thorium/emerald/beryllium vein
  makeMetallicOre(
    "Thorium",
    "thorium",
    0x002700,
    OVERWORLD.concat(END),
    "iron"
  );
  // galena
  makeMetallicOre("Galena", "galena", 0x6d416d, OVERWORLD, "iron");

  // pitchblende
  makeMetallicOre(
    "Pitchblende",
    "pitchblende",
    0xb1b100,
    OVERWORLD.concat(END),
    "copper"
  );
  makeMetallicOre(
    "Uraninite",
    "uraninite",
    0x1f1f1f,
    OVERWORLD.concat(END),
    "copper"
  );
  // scheelite
  makeMetallicOre("Scheelite", "scheelite", 0xae7e12, END, "iron");
  // ilmenite
  makeMetallicOre("Ilmenite", "ilmenite", 0x2e2421, END, "iron");
  makeMetallicOre("Chromite", "chromite", 0x170804, END, "copper");
  makeMetallicOre("Uvarovite", "uvarovite", 0xa1e4a1, END, "gold");
});

function makeVanillaNetherOre(ore, ore_set) {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.ore(
      { generate: false, ore_set: ore_set },
      "minecraft:netherrack"
    );
  });
}
function makeVanillaEndOre(ore, ore_set) {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.ore(
      { generate: false, ore_set: ore_set },
      "minecraft:end_stone"
    );
  });
}
function makeVanillaStoneOre(ore, ore_set) {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.ore({ generate: false, ore_set: ore_set }, "minecraft:stone");
  });
}
function makeVanillaDeepslateOre(ore, ore_set) {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.ore(
      { generate: false, ore_set: ore_set },
      "minecraft:deepslate"
    );
  });
}
const vanilla_end = ["iron", "copper", "gold"];
const vanilla_nether = ["iron", "copper", "gold"];

vanilla_end.map((ore) => makeVanillaEndOre(ore, ore));
vanilla_nether.map((ore) => makeVanillaNetherOre(ore, ore));

makeVanillaEndOre("tin", "iron");
makeVanillaEndOre("nickel", "iron");
// redstone
MIMaterialEvents.modifyMaterial("redstone", (event) => {
  event.builder
    .ore({ generate: false, ore_set: "iron" }, "minecraft:netherrack")
    .setMainPart("ingot")
    .rawMetal("iron");
});
// lapis
MIMaterialEvents.modifyMaterial("lapis", (event) => {
  event.builder.setMainPart("ingot").rawMetal("copper");
});
// diamond
MIMaterialEvents.modifyMaterial("diamond", (event) => {
  event.builder.setMainPart("ingot").rawMetal("gold");
});
// coal
MIMaterialEvents.modifyMaterial("coal", (event) => {
  event.builder.setMainPart("ingot").rawMetal("iron");
});
// beryllium
MIMaterialEvents.modifyMaterial("beryllium", (event) => {
  event.builder
    .ore({ generate: false, ore_set: "gold" }, "minecraft:stone")
    .ore({ generate: false, ore_set: "gold" }, "minecraft:end_stone")
    .rawMetal("gold")
    .customRegularPart("Washed Crushed Dust", "washed_crushed_dust")
    .addParts("crushed_dust");
});
// silver
MIMaterialEvents.modifyMaterial("silver", (event) => {
  event.builder
    .ore({ generate: false, ore_set: "gold" }, "minecraft:stone")
    .customRegularPart("Washed Crushed Dust", "washed_crushed_dust");
});
// ruby is a weird one
MIMaterialEvents.modifyMaterial("ruby", (event) => {
  event.builder
    .ore(
      { generate: false, ore_set: "copper", min_xp: 0, max_xp: 0 },
      "minecraft:deepslate"
    )
    .ore(
      { generate: false, ore_set: "copper", min_xp: 0, max_xp: 0 },
      "minecraft:netherrack"
    )
    .addParts("crushed_dust")
    .rawMetal("copper");
});
// uranium
MIMaterialEvents.modifyMaterial("uranium", (event) => {
  event.builder.ore(
    { generate: false, ore_set: "copper" },
    "minecraft:end_stone"
  );
});
MIMaterialEvents.modifyMaterial("tungsten", (event) => {
  event.builder.ore(
    { generate: false, ore_set: "gold" },
    "minecraft:end_stone"
  );
});

const washedVanillaOres = [
  "iron",
  "copper",
  "gold",
  "coal",
  "lapis",
  "redstone",
  "diamond",
  "emerald",
];
washedVanillaOres.forEach((ore) => {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.customRegularPart(
      "Washed Crushed Dust",
      "washed_crushed_dust"
    );
  });
});
const washedMIOres = [
  "antimony",
  "bauxite",
  "lead",
  "lignite_coal",
  "monazite",
  "nickel",
  "salt",
  "tin",
  "tungsten",
  "uranium",
  "ruby",
  "platinum",
  "iridium",
];

washedMIOres.forEach((ore) => {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.customRegularPart(
      "Washed Crushed Dust",
      "washed_crushed_dust"
    );
  });
});
