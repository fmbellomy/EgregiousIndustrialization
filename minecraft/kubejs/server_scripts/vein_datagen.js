ServerEvents.generateData("before_mods", (_) => {
  const GTMOGS = global.GTMOGS;
  /**
   * @param {string} name
   * @param {int} weight
   * @param {int} minY
   * @param {int} maxY
   * @param {int} minSize
   * @param {int} maxSize
   * @returns {Function<GTMOGS.VeinGenerator>>}
   */
  const egregiousUniformVein = GTMOGS.makeVeinTemplate(
    0.8,
    "uniform",
    0,
    80,
    0.05
  );
  const shallowCopy = (arr) => {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
      copy.push(arr[i]);
    }
    return copy;
  };

  const classic = (vein) => {
    let ores = shallowCopy(vein.ores);
    for (let i = 0; i < ores.length; i++) {
      console.log(ores[i]);
      if (Item.exists(`minecraft:${vein.dim.blockPrefix}${ores[i]}_ore`)) {
        ores[i] = `minecraft:${vein.dim.blockPrefix}${ores[i]}_ore`;
      } else {
        ores[
          i
        ] = `modern_industrialization:${vein.dim.blockPrefix}${ores[i]}_ore`;
      }
    }

    let v = vein.generator(
      GTMOGS.VeinGenerator.ClassicVeinGenerator()
        .setPrimary(4, ores[0])
        .setSecondary(3, ores[1])
        .setBetween(2, ores[2])
        .setSporadic(1, ores[3])
    );
    v(vein.dim);
  };
  const veins = {};
  // tetrahedrite
  veins.tetrahedrite_nether = {
    generator: egregiousUniformVein("tetrahedrite", 50, 80, 120, 28, 36),
    dim: GTMOGS.NETHER,
    ores: ["tetrahedrite", "tetrahedrite", "copper", "stibnite"],
    veinType: classic,
  };
  veins.tetrahedrite_end = {
    generator: egregiousUniformVein("tetrahedrite", 50, 80, 120, 28, 36),
    dim: GTMOGS.END,
    ores: ["tetrahedrite", "tetrahedrite", "copper", "stibnite"],
    veinType: classic,
  };

  // chalcopyrite
  veins.chalcopyrite = {
    generator: egregiousUniformVein("chalcopyrite", 50, 10, 90, 32, 38),
    dim: GTMOGS.OVERWORLD,
    ores: ["chalcopyrite", "copper", "pyrite", "iron"],
    veinType: classic,
  };
  veins.chalcopyrite_deepslate = {
    generator: egregiousUniformVein(
      "deepslate_chalcopyrite",
      50,
      -40,
      0,
      32,
      38
    ),
    dim: GTMOGS.OVERWORLD_DEEPSLATE,
    ores: ["chalcopyrite", "copper", "pyrite", "iron"],
    veinType: classic,
  };

  for (let entry in veins) {
    // only call makeClassicVein on explicitly defined entries, not JS built-ins
    if (veins.hasOwnProperty(entry)) {
      let vein = veins[entry];
      vein.veinType(vein);
    }
  }
  JsonIO.write("kubejs/assets/gtmogs/lang/en_us.json", GTMOGS.lang);
  /*
  let FREAKY_ID = "freaky";
  builder = OreVeinDefinitionBuilder(FREAKY_ID);
  let FREAKY = builder
    .setClusterSize(UniformInt(32, 40))
    .setDensity(0.95)
    .setWeight(100)
    .setLayer("stone")
    .setHeightRange("uniform", -55, 80)
    .setBiomes("#minecraft:is_overworld")
    .setDiscardChance(0.0)
    .setDimensionFilter(["minecraft:overworld"])
    .setGenerator(
      VeinedVeinGenerator(-55, 80)
        .edgeRoundoffBegin(3)
        .maxEdgeRoundoff(0.1)
        .maxRichness(1.0)
        .minRichness(0.7)
        .maxRichnessThreshold(0.175)
        .oreBlock("minecraft:slime_block", 3)
        .oreBlock("minecraft:honey_block", 2)
        .veininessThreshold(0.01)
    )
    .build();

  JsonIO.write(
    "kubejs/data/gtmogs/gtmogs/ore_vein/" + FREAKY_ID + ".json",
    FREAKY
  );

  let RICH_ID = "rich";
  builder = OreVeinDefinitionBuilder(RICH_ID);
  let RICH = builder
    .setClusterSize(UniformInt(32, 40))
    .setDensity(0.95)
    .setWeight(100)
    .setLayer("stone")
    .setHeightRange("uniform", -55, 80)
    .setBiomes("#minecraft:is_overworld")
    .setDiscardChance(0.0)
    .setDimensionFilter(["minecraft:overworld"])
    .setGenerator(
      DikeVeinGenerator(-55, 80)
        .withBlock("minecraft:iron_block", -55, 30, 5)
        .withBlock("minecraft:diamond_block", -40, 0, 1)
        .withBlock("minecraft:lapis_block", -20, 75, 3)
    )
    .build();

  JsonIO.write("kubejs/data/gtmogs/gtmogs/ore_vein/" + RICH_ID + ".json", RICH);

  let LAYERTEST_ID = "layertest";
  builder = OreVeinDefinitionBuilder(LAYERTEST_ID);
  let LAYERTEST = builder
    .setClusterSize(UniformInt(32, 40))
    .setDensity(0.95)
    .setWeight(100)
    .setLayer("stone")
    .setHeightRange("uniform", -55, 80)
    .setBiomes("#minecraft:is_overworld")
    .setDiscardChance(0.0)
    .setDimensionFilter(["minecraft:overworld"])
    .setGenerator(
      LayeredVeinGenerator()
        .layer(2, 4, "minecraft:redstone_block", 3)
        .layer(1, 1, "minecraft:gold_block", 2)
        .layer(1, 1, "minecraft:emerald_block", 1)
    )
    .build();

  JsonIO.write(
    "kubejs/data/gtmogs/gtmogs/ore_vein/" + LAYERTEST_ID + ".json",
    LAYERTEST
  );
  let CUBOIDTEST_ID = "cuboidtest";
  builder = OreVeinDefinitionBuilder(CUBOIDTEST_ID);
  let CUBOIDTEST = builder
    .setClusterSize(UniformInt(32, 40))
    .setDensity(0.95)
    .setWeight(100)
    .setLayer("stone")
    .setHeightRange("uniform", 10, 80)
    .setBiomes("#minecraft:is_overworld")
    .setDiscardChance(0.0)
    .setDimensionFilter(["minecraft:overworld"])
    .setGenerator(
      CuboidVeinGenerator(10, 80)
        .setBottom("minecraft:iron_block")
        .setMiddle("minecraft:mud")
        .setTop("minecraft:sea_lantern")
        .setSpread("minecraft:netherite_block")
    )
    .build();

  JsonIO.write(
    "kubejs/data/gtmogs/gtmogs/ore_vein/" + CUBOIDTEST_ID + ".json",
    CUBOIDTEST
  );
  */
});
