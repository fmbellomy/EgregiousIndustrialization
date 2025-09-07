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
        .addParts("dust", "crushed_dust");

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
