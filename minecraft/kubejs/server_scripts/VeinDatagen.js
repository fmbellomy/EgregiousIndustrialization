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
  const egregiousUniformVein = GTMOGS.makeVeinTemplate(0.75, "uniform", 0.75);
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
    let target;
    if (vein.dim == GTMOGS.END) {
      target = { predicate_type: "minecraft:tag_match", tag: "c:end_stones" };
    }
    let v = vein.generator(
      GTMOGS.VeinGenerator.ClassicVeinGenerator()
        .setPrimary(4, ores[0], target)
        .setSecondary(3, ores[1], target)
        .setBetween(2, ores[2], target)
        .setSporadic(1, ores[3], target)
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
      let currentOre = vein.ores[i][name];
      if (Item.exists(`minecraft:${vein.dim.blockPrefix}${name}_ore`)) {
        ores[i] = `minecraft:${vein.dim.blockPrefix}${name}_ore`;
      } else {
        ores[i] = `modern_industrialization:${vein.dim.blockPrefix}${name}_ore`;
      }
      let target;
      if (vein.dim == GTMOGS.END) {
        target = { predicate_type: "minecraft:tag_match", tag: "c:end_stones" };
      }
      builder.layer(
        currentOre.minSize,
        currentOre.maxSize,
        ores[i],
        currentOre.weight,
        target
      );
    }
    let v = vein.generator(builder);
    v(vein.dim);
  };
  const veins = {};
  // tetrahedrite
  veins.tetrahedrite = {
    generator: egregiousUniformVein("tetrahedrite", 50, 65, 120, 28, 36),
    dim: GTMOGS.OVERWORLD,
    ores: ["tetrahedrite", "tetrahedrite", "copper", "stibnite"],
    veinType: classic,
  };
  veins.tetrahedrite_nether = {
    generator: egregiousUniformVein("tetrahedrite", 20, 80, 120, 28, 36),
    dim: GTMOGS.NETHER,
    ores: ["tetrahedrite", "tetrahedrite", "copper", "stibnite"],
    veinType: classic,
  };

  // chalcopyrite
  veins.chalcopyrite = {
    generator: egregiousUniformVein("chalcopyrite", 75, 40, 220, 32, 38),
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
    generator: egregiousUniformVein("cassiterite", 60, 250, 450, 30, 36),
    dim: GTMOGS.OVERWORLD,
    ores: [
      { cassiterite: { weight: 3, minSize: 2, maxSize: 4 } },
      { tin: { weight: 1, minSize: 1, maxSize: 3 } },
      { asbestos: { weight: 1, minSize: 1, maxSize: 2 } },
    ],
    veinType: layered,
  };

  veins.cassiterite_nether = {
    generator: egregiousUniformVein("cassiterite", 50, 80, 120, 30, 36),
    dim: GTMOGS.NETHER,
    ores: [
      { cassiterite: { weight: 3, minSize: 2, maxSize: 4 } },
      { tin: { weight: 1, minSize: 1, maxSize: 3 } },
      { asbestos: { weight: 1, minSize: 1, maxSize: 2 } },
    ],
    veinType: layered,
  };

  // tin
  veins.tin = {
    generator: egregiousUniformVein("tin", 50, 20, 100, 10, 36),
    dim: GTMOGS.OVERWORLD,
    ores: ["tin", "tin", "cassiterite", "tin"],
    veinType: classic,
  };

  // redstone
  veins.redstone_deepslate = {
    generator: egregiousUniformVein("deepslate_redstone", 50, -55, -10, 30, 36),
    dim: GTMOGS.OVERWORLD_DEEPSLATE,
    ores: ["redstone", "redstone", "redstone", "ruby"],
    veinType: classic,
  };
  veins.redstone_nether = {
    generator: egregiousUniformVein("redstone", 50, 70, 120, 34, 40),
    dim: GTMOGS.NETHER,
    ores: ["redstone", "redstone", "ruby", "ruby"],
    veinType: classic,
  };
  // pentlandite
  veins.pentlandite = {
    generator: egregiousUniformVein("pentlandite", 40, 30, 140, 25, 29),
    dim: GTMOGS.OVERWORLD,
    ores: [
      { pentlandite: { weight: 3, minSize: 2, maxSize: 4 } },
      { garnierite: { weight: 2, minSize: 2, maxSize: 3 } },
      { nickel: { weight: 1, minSize: 2, maxSize: 3 } },
    ],
    veinType: layered,
  };
  veins.pentlandite_nether = {
    generator: egregiousUniformVein("pentlandite", 50, 25, 65, 30, 36),
    dim: GTMOGS.NETHER,
    ores: [
      { pentlandite: { weight: 3, minSize: 2, maxSize: 4 } },
      { garnierite: { weight: 2, minSize: 2, maxSize: 4 } },
      { nickel: { weight: 1, minSize: 2, maxSize: 4 } },
    ],
    veinType: layered,
  };

  veins.galena = {
    generator: egregiousUniformVein("galena", 35, 5, 100, 28, 34),
    dim: GTMOGS.OVERWORLD,
    ores: ["galena", "galena", "silver", "lead"],
    veinType: classic,
  };
  veins.pitchblende = {
    generator: egregiousUniformVein("pitchblende", 25, 15, 80, 24, 28),
    dim: GTMOGS.OVERWORLD,
    ores: ["pitchblende", "pitchblende", "uraninite", "uranium"],
    veinType: classic,
  };
  veins.pitchblende_nether = {
    generator: egregiousUniformVein("pitchblende", 25, 70, 120, 32, 40),
    dim: GTMOGS.NETHER,
    ores: ["pitchblende", "pitchblende", "uraninite", "uranium"],
    veinType: classic,
  };
  veins.coal = {
    generator: egregiousUniformVein("coal", 55, 80, 200, 32, 40),
    dim: GTMOGS.OVERWORLD,
    ores: ["coal", "coal", "coal", "lignite_coal"],
    veinType: classic,
  };
  veins.lignite_coal = {
    generator: egregiousUniformVein("lignite_coal", 30, 5, 250, 32, 40),
    dim: GTMOGS.OVERWORLD,
    ores: ["lignite_coal", "lignite_coal", "lignite_coal", "coal"],
    veinType: classic,
  };
  veins.diamond = {
    generator: egregiousUniformVein("diamond", 30, -60, -20, 28, 32),
    dim: GTMOGS.OVERWORLD_DEEPSLATE,
    ores: ["graphite", "graphite", "diamond", "coal"],
    veinType: classic,
  };
  veins.ilmenite = {
    generator: egregiousUniformVein("ilmenite", 50, 5, 45, 36, 40),
    dim: GTMOGS.NETHER,
    ores: ["ilmenite", "chromite", "uvarovite", "ilmenite"],
    veinType: classic,
  };
  veins.magnetite = {
    generator: egregiousUniformVein("magnetite", 75, 100, 300, 36, 40),
    dim: GTMOGS.OVERWORLD,
    ores: ["magnetite", "magnetite", "iron", "gold"],
    veinType: classic,
  };
  veins.magnetite_nether = {
    generator: egregiousUniformVein("magnetite", 50, 70, 120, 34, 40),
    dim: GTMOGS.NETHER,
    ores: ["magnetite", "magnetite", "iron", "gold"],
    veinType: classic,
  };
  veins.scheelite = {
    generator: egregiousUniformVein("scheelite", 50, 65, 120, 36, 40),
    dim: GTMOGS.NETHER,
    ores: ["scheelite", "scheelite", "scheelite", "tungsten"],
    veinType: classic,
  };
  veins.sheldonite = {
    generator: egregiousUniformVein("sheldonite", 25, 5, 45, 36, 40),
    dim: GTMOGS.NETHER,
    ores: ["sheldonite", "platinum", "sheldonite", "iridium"],
    veinType: classic,
  };
  keys(veins).forEach((key) => {
    let vein = veins[key];
    vein.veinType(vein);
  });

  JsonIO.write("kubejs/assets/gtmogs/lang/en_us.json", GTMOGS.lang);
});
