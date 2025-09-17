// CREATE ORE VEINS
let GTMOGS = {};
GTMOGS.IntProvider = {};
GTMOGS.VeinGenerator = {};
/**
 *
 * @param {integer} minInclusive
 * @param {integer} maxInclusive
 */
GTMOGS.IntProvider.BiasedToBottomInt = (minInclusive, maxInclusive) => {
  return {
    min_inclusive: minInclusive,
    max_inclusive: maxInclusive,
    type: "minecraft:biased_to_bottom",
  };
};
/**
 *
 * @param {BiasedToBottomInt | ClampedInt | ClampedNormalInt | UniformInt | ConstantInt} source
 * @param {integer} minInclusive
 * @param {integer} maxInclusive
 */
GTMOGS.IntProvider.ClampedInt = (source, minInclusive, maxInclusive) => {
  return {
    min_inclusive: minInclusive,
    max_inclusive: maxInclusive,
    source: source,
    type: "minecraft:clamped",
  };
};
/**
 *
 * @param {float} mean
 * @param {float} deviation
 * @param {integer} minInclusive
 * @param {integer} maxInclusive
 */
GTMOGS.IntProvider.ClampedNormalInt = (
  mean,
  deviation,
  minInclusive,
  maxInclusive
) => {
  return {
    min_inclusive: minInclusive,
    max_inclusive: maxInclusive,
    mean: mean,
    deviation: deviation,
    type: "minecraft:clamped_normal",
  };
};
/**
 *
 * @param {integer} constant
 */
GTMOGS.IntProvider.ConstantInt = (constant) => {
  return {
    constant: constant,
    type: "minecraft:constant",
  };
};
/**
 *
 * @param {integer} minInclusive
 * @param {integer} maxInclusive
 */
GTMOGS.IntProvider.UniformInt = (minInclusive, maxInclusive) => {
  return {
    min_inclusive: minInclusive,
    max_inclusive: maxInclusive,
    type: "minecraft:uniform",
  };
};

GTMOGS.VeinGenerator.DikeVeinGenerator = (minY, maxY) => {
  return {
    type: "gtmogs:dike",
    min_y: minY,
    max_y: maxY,
    blocks: [],
    /**
     * @param {string} block
     * @param {integer} minY
     * @param {integer} maxY
     * @param {integer} weight
     */
    withBlock(block, minY, maxY, weight) {
      this.blocks.push({
        block: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
        min_y: minY,
        max_y: maxY,
        weight: weight,
      });
      return this;
    },
    build() {
      return {
        type: this.type,
        blocks: this.blocks,
        min_y: this.min_y,
        max_y: this.max_y,
      };
    },
  };
};

GTMOGS.VeinGenerator.CuboidVeinGenerator = (minY, maxY) => {
  return {
    type: "gtmogs:cuboid",
    min_y: minY,
    max_y: maxY,
    setBottom(block) {
      this.bottom = {
        layers: 2,
        targets: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
      };
      return this;
    },
    setMiddle(block) {
      this.middle = {
        layers: 3,
        targets: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
      };
      return this;
    },
    setTop(block) {
      this.top = {
        layers: 2,
        targets: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
      };
      return this;
    },
    setSpread(block) {
      this.spread = {
        targets: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
      };
      return this;
    },
    build() {
      return {
        type: this.type,
        min_y: this.min_y,
        max_y: this.max_y,
        bottom: this.bottom,
        middle: this.middle,
        top: this.top,
        spread: this.spread,
      };
    },
  };
};

GTMOGS.VeinGenerator.VeinedVeinGenerator = (minY, maxY) => {
  return {
    type: "gtmogs:veined",
    filler_block: {
      // I haven't seen the filler block be anything else,
      // and I don't think I care enough to add support for anything else either.
      Name: "minecraft:air",
    },
    max_y: maxY,
    min_y: minY,
    ore_blocks: [],
    rare_blocks: [],

    /**
     *
     * @param {integer} begin
     */
    edgeRoundoffBegin(begin) {
      this.edge_roundoff_begin = begin;
      return this;
    },

    /**
     *
     * @param {float} max
     */
    maxEdgeRoundoff(max) {
      this.max_edge_roundoff = max;
      return this;
    },
    /**
     *
     * @param {float} max
     */
    maxRichness(max) {
      this.max_richness = max;
      return this;
    },
    maxRichnessThreshold(max) {
      this.max_richness_threshold = max;
      return this;
    },
    /**
     *
     * @param {float} min
     */
    minRichness(min) {
      this.min_richness = min;
      return this;
    },
    /**
     *
     * @param {string} block
     * @param {integer} weight
     */
    oreBlock(block, weight) {
      this.ore_blocks.push({
        block: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
        weight: weight,
      });
      return this;
    },
    rareBlockChance(chance) {
      this.rare_block_chance = chance;
      return this;
    },
    /**
     *
     * @param {string} block
     * @param {integer} weight
     */
    rareBlock(block, weight) {
      this.rare_blocks.push({
        block: [
          {
            state: { Name: block },
            target: { predicate_type: "minecraft:always_true" },
          },
        ],
        weight: weight,
      });
      return this;
    },
    /**
     *
     * @param {float} threshold
     */
    veininessThreshold(threshold) {
      this.veininess_threshold = threshold;
      return this;
    },

    build() {
      return {
        type: this.type,
        edge_roundoff_begin: this.edge_roundoff_begin,
        filler_block: this.filler_block,
        max_edge_roundoff: this.max_edge_roundoff,
        max_y: this.max_y,
        min_y: this.min_y,
        min_richness: this.min_richness,
        max_richness: this.max_richness,
        max_richness_threshold: this.max_richness_threshold,
        ore_blocks: this.ore_blocks,
        rare_block_chance: this.rare_block_chance,
        rare_blocks: this.rare_blocks,
        veininess_threshold: this.veininess_threshold,
      };
    },
  };
};

GTMOGS.VeinGenerator.LayeredVeinGenerator = () => {
  return {
    type: "gtmogs:layer",
    layer_patterns: [[]],
    /**
     *
     * @param {integer} maxSize
     * @param {integer} minSize
     * @param {string} block
     * @param {integer} weight
     */
    layer(minSize, maxSize, block, weight, target) {
      if (target == undefined) {
        target = { predicate_type: "minecraft:always_true" };
      }
      this.layer_patterns[0].push({
        max_size: maxSize,
        min_size: minSize,
        targets: [
          [
            {
              state: {
                Name: block,
              },
              target: target,
            },
          ],
        ],
        weight: weight,
      });
      return this;
    },
    build() {
      return {
        type: this.type,
        layer_patterns: this.layer_patterns,
      };
    },
  };
};
function makeLayer(layers, block, target) {
  if (target == undefined) {
    target = { predicate_type: "minecraft:always_true" };
  }
  return {
    layers: layers,
    targets: [
      {
        target: target,
        state: { Name: block },
      },
    ],
  };
}

GTMOGS.VeinGenerator.ClassicVeinGenerator = () => {
  return {
    type: "gtmogs:classic",
    y_radius: 6,

    /**
     *
     * @param {integer} layers
     * @param {string} block
     * @returns {ClassicVeinGenerator}
     */
    setPrimary(layers, block, target) {
      this.primary = makeLayer(layers, block, target);
      return this;
    },
    /**
     *
     * @param {integer} layers
     * @param {string} block
     * @returns {ClassicVeinGenerator}
     */
    setSecondary(layers, block, target) {
      this.secondary = makeLayer(layers, block, target);
      return this;
    },
    /**
     *
     * @param {integer} layers
     * @param {string} block
     * @returns {ClassicVeinGenerator}
     */
    setBetween(layers, block, target) {
      this.between = makeLayer(layers, block, target);
      return this;
    },
    /**
     *
     * @param {integer} layers
     * @param {string} block
     * @returns {ClassicVeinGenerator}
     */
    setSporadic(layers, block, target) {
      this.sporadic = makeLayer(layers, block, target);
      return this;
    },
    /**
     *
     * @param {integer} layers
     * @param {string} block
     * @returns {ClassicVeinGenerator}
     */
    setYRadius(yRadius) {
      this.y_radius = yRadius;
      return this;
    },
    build() {
      return {
        type: this.type,
        primary: this.primary,
        secondary: this.secondary,
        between: this.between,
        sporadic: this.sporadic,
      };
    },
  };
};

function HeightRangeUniform(low, high) {
  return {
    max_inclusive: high,
    min_inclusive: low,
  };
}

//
//
//  THE BIG BUILDER ITSELF
//
//
/**
 *
 * @param {string} id
 * @returns
 */
GTMOGS.OreVeinDefinitionBuilder = (id) => {
  this.id = id;
  /**
   * @param {string} biomes
   * @returns
   */
  function setBiomes(biomes) {
    this.biomes = biomes;
    return this;
  }
  /**
   * @param {BiasedToBottomInt | ClampedInt | ClampedNormalInt | UniformInt | ConstantInt} clusterSize
   * @returns {OreVeinDefinitionBuilder}
   * @member
   */
  function setClusterSize(clusterSize) {
    this.cluster_size = clusterSize;
    return this;
  }
  /**
   * @param {float} density
   * @returns {OreVeinDefinitionBuilder}
   */
  function setDensity(density) {
    this.density = density;
    return this;
  }
  /**
   * @param {Array<String>} dimensionFilter
   * @returns {OreVeinDefinitionBuilder}
   */
  function setDimensionFilter(dimensionFilter) {
    this.dimension_filter = dimensionFilter;
    return this;
  }
  /**
   * @param {float} discardChance
   * @returns {OreVeinDefinitionBuilder}
   */
  function setDiscardChance(discardChance) {
    this.discard_chance_on_air_exposure = discardChance;
    return this;
  }
  /**
   * @param {"uniform" | "trapezoid"} type
   * @param {integer} low
   * @param {integer} high
   * @returns {OreVeinDefinitionBuilder}
   */
  function setHeightRange(type, low, high) {
    this.height_range = {
      height: {
        type: `minecraft:${type}`,
        max_inclusive: { absolute: high },
        min_inclusive: { absolute: low },
      },
    };
    return this;
  }
  /**
   * @param {ClassicVeinGenerator | VeinedVeinGenerator | DikeVeinGenerator} generator
   * @returns
   */
  function setGenerator(generator) {
    this.generator = generator.build();
    return this;
  }

  /**
   * @param {"stone" | "deepslate" | "netherrack" | "endstone"} layer
   * @returns {OreVeinDefinitionBuilder}
   */
  function setLayer(layer) {
    this.layer = layer;
    return this;
  }
  /**
   * @param {integer} weight
   * @returns {OreVeinDefinitionBuilder}
   */
  function setWeight(weight) {
    this.weight = weight;
    return this;
  }
  /**
   * @returns {OreVeinDefinition}
   */
  function build() {
    return {
      biomes: this.biomes,
      cluster_size: this.cluster_size,
      density: this.density,
      dimension_filter: this.dimension_filter,
      discard_chance_on_air_exposure: this.discard_chance_on_air_exposure,
      generator: this.generator,
      height_range: this.height_range,
      layer: this.layer,
      weight: this.weight,
    };
  }
  let builder = {
    setClusterSize: setClusterSize,
    setDensity: setDensity,
    setWeight: setWeight,
    setLayer: setLayer,
    setDiscardChance: setDiscardChance,
    setHeightRange: setHeightRange,
    setBiomes: setBiomes,
    setDimensionFilter: setDimensionFilter,
    setGenerator: setGenerator,
    build: build,
  };
  return builder;
};

GTMOGS.lang = {};

const titleCase = (s) =>
  s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );

GTMOGS.END = {
  name: "end",
  biomeTag: "#minecraft:is_end",
  dimFilter: ["minecraft:the_end"],
  layer: "endstone",
  blockPrefix: "end_stone_",
};
GTMOGS.NETHER = {
  name: "nether",
  biomeTag: "#minecraft:is_nether",
  dimFilter: ["minecraft:the_nether"],
  layer: "netherrack",
  blockPrefix: "netherrack_",
};
GTMOGS.OVERWORLD = {
  name: "overworld",
  biomeTag: "#minecraft:is_overworld",
  dimFilter: ["minecraft:overworld"],
  layer: "stone",
  blockPrefix: "",
};
GTMOGS.OVERWORLD_MOUNTAIN = {
  name: "overworld",
  biomeTag: "#c:is_mountain/peak",
  dimFilter: ["minecraft:overworld"],
  layer: "stone",
  blockPrefix: "",
};
GTMOGS.OVERWORLD_DEEPSLATE = {
  name: "overworld",
  biomeTag: "#minecraft:is_overworld",
  dimFilter: ["minecraft:overworld"],
  layer: "deepslate",
  blockPrefix: "deepslate_",
};
GTMOGS.DIMENSIONS = [
  GTMOGS.OVERWORLD,
  GTMOGS.OVERWORLD_DEEPSLATE,
  GTMOGS.NETHER,
  GTMOGS.END,
];

/**
 *
 * @param {float} density
 * @param {"uniform" | "trapezoid"} heightRangeType
 * @param {float} discardChance
 *
 * @returns
 */
// i LOVE partial application
GTMOGS.makeVeinTemplate = (density, heightRangeType, discardChance) => {
  return (name, weight, minY, maxY, minSize, maxSize) => {
    return (veinGenerator) => {
      return (dim) => {
        let vein = GTMOGS.OreVeinDefinitionBuilder(name)
          .setClusterSize(GTMOGS.IntProvider.UniformInt(minSize, maxSize))
          .setDensity(density)
          .setWeight(weight)
          .setLayer(dim.layer)
          .setHeightRange(heightRangeType, minY, maxY)
          .setBiomes(dim.biomeTag)
          .setDiscardChance(discardChance)
          .setDimensionFilter(dim.dimFilter)
          .setGenerator(veinGenerator)
          .build();

        let id = `${dim.name}_${name}`;
        let displayName = name;
        if (dim.name !== "overworld") {
          displayName = id;
        }

        GTMOGS.lang[`ore_vein.gtmogs.${id}`] = titleCase(displayName);
        JsonIO.write(`config/openloader/packs/egregiousdata/data/gtmogs/gtmogs/ore_vein/${id}.json`, vein);
      };
    };
  };
};

global.GTMOGS = GTMOGS;
