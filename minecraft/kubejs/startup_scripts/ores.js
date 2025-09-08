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
  makeMetallicOre(
    "Cassiterite",
    "cassiterite",
    0x7e7e7e,
    OVERWORLD.concat(END),
    "gold"
  );
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
// redstone
MIMaterialEvents.modifyMaterial("redstone", (event) => {
  event.builder.ore(
    { generate: false, ore_set: "iron", min_xp: 2, max_xp: 8 },
    "minecraft:netherrack"
  );
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
washedVanillaOres.forEach((ore) => {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.customRegularPart(
      "Washed Crushed Dust",
      "washed_crushed_dust"
    );
  });
});
washedMIOres.forEach((ore) => {
  MIMaterialEvents.modifyMaterial(ore, (event) => {
    event.builder.customRegularPart(
      "Washed Crushed Dust",
      "washed_crushed_dust"
    );
  });
});
