function keys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

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

  // this is such a mess, i truly hope i never have to change it
  const layered = (vein) => {
    // get block ids based on dimension and add to generator
    let ores = shallowCopy(vein.ores.map(keys));
    let builder = GTMOGS.VeinGenerator.LayeredVeinGenerator();
    for (let i = 0; i < ores.length; i++) {
      let name = ores[i][0];
      console.log(name);
      let currentOre = vein.ores[i][name];
      console.log(currentOre);
      if (Item.exists(`minecraft:${vein.dim.blockPrefix}${name}_ore`)) {
        ores[i] = `minecraft:${vein.dim.blockPrefix}${name}_ore`;
      } else {
        ores[i] = `modern_industrialization:${vein.dim.blockPrefix}${name}_ore`;
      }
      builder.layer(
        currentOre.minSize,
        currentOre.maxSize,
        ores[i],
        currentOre.weight
      );
    }
    let v = vein.generator(builder);
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
  // cassiterite
  veins.cassiterite = {
    generator: egregiousUniformVein("cassiterite", 100, 10, 120, 30, 36),
    dim: GTMOGS.OVERWORLD,
    ores: [
      { cassiterite: { weight: 3, minSize: 2, maxSize: 4 } },
      { tin: { weight: 1, minSize: 1, maxSize: 3 } },
    ],
    veinType: layered,
  };

  veins.cassiterite_end = {
    generator: egregiousUniformVein("cassiterite_end", 100, 10, 100, 30, 36),
    dim: GTMOGS.END,
    ores: [
      { cassiterite: { weight: 3, minSize: 2, maxSize: 4 } },
      { tin: { weight: 1, minSize: 1, maxSize: 3 } },
    ],
    veinType: layered,
  };

  // redstone
  veins.redstone_deepslate = {
    generator: egregiousUniformVein("redstone_deepslate", 100, -58, 5, 30, 36),
    dim: GTMOGS.OVERWORLD_DEEPSLATE,
    ores: ["redstone", "redstone", "redstone", "ruby"],
    veinType: classic,
  };
  veins.redstone_nether = {
    generator: egregiousUniformVein("redstone_nether", 100, 70, 120, 34, 40),
    dim: GTMOGS.NETHER,
    ores: ["redstone", "redstone", "ruby", "ruby"],
    veinType: classic,
  };

  keys(veins).forEach((key) => {
    let vein = veins[key];
    vein.veinType(vein);
  });

  JsonIO.write("kubejs/assets/gtmogs/lang/en_us.json", GTMOGS.lang);
});
