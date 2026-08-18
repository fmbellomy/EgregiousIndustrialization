template = """# Configuration file

Config {{
    # If set to False, parameters from this config will not be used. [default: true]
    B:enabled=true
}}


Deposit {{
    # Syntax: targetId -> replacementId
    # With weight: targetId -> replacementId, weight
    S:customReplacements <
    >

    # List of descendants (deposits/geodes) that will attempt to be generated after this (parent) one.
    # Format: threshold% -> descendant, chance% [:group]
    #   <threshold> - minimum percentage of the parent's size that must be reached to begin generating this descendant
    #   <descendant> - ID of the descendant in the following format: deposit:name or geode:name
    #   <chance> - chance of generating the descendant (from 0 to 100%)
    #   <group> - group name (optional parameter). Can contain only letters, digits or underscores [a-zA-Z0-9_].
    # All listed descendants will attempt to be generated in random order.
    # Group descendants to achieve logical "or" behaviour (only one descendant from each group will be generated).
    # Starting position will be chosen within the chunk where the parent's size has reached the threshold value.
    # Examples:
    #    90% -> deposit:diamond, 10%
    #    80% -> deposit:iron, 40% :metals
    #    70% -> geode:amethyst, 20%
    S:descendants <

     >

    # List of ores and their weights for this deposit.
    # Syntax: oreId [, weight]
    #
    # Id is a basic unit (block or item) identifier in <modId:unitName:meta> format.
    # ModId can be omitted for vanilla items. Meta can be omitted too if it equals 0.
    # UnitName must be lowercase, words separated by '_', words order - from particular to general (example: black_iron_ore).
    # Use '*' char or '[]' as meta value to specify all possible values (all block states).
    # To define multiple block states, you can use block properties. The format is <modId:blockName:[prop1=value1, prop2=value2]>
    # Also you may use tags. The format is <#modId:tagPath> (example: #c:ores/copper).
    #
    # Weight is used to define the proportions of the ores.
    # For example, the definition:
    #      #c:ores/gold, 1
    #      #c:ores/iron, 5
    # means that gold and iron will be in the proportion 1 to 5.
    #
    # Prefixing an ore ID with '!' simulates ore placement logic without actually placing ore blocks in the world.
    # This is useful for testing, creating gaps between ore blocks or setting up parent deposits that only generate their descendants around them. (Example: !emerald_ore)
    #
    S:ores <
        {PRIMARY}
        {SECONDARY}
        {TERTIARY}
        {QUATERNARY}
     >

    # Rarity (in chunks). The higher the value, the rarer the generation will be.
    # Example: a value of 1000 means that generation will occur approximately once every 1000 chunks.
    #  [range: 0 ~ 256000, default: 1206]
    I:rarity={RARITY}

    # List of blocks that can be replaced with this ore.
    S:replaceableBlocks <
        {REPLACEABLES}
     >

    # Determines whether this deposit is considered vanilla. [default: false]
    B:vanilla=false

    ##########################################################################################################
    # Dimensions
    #--------------------------------------------------------------------------------------------------------#
    # List of dimensions which this ore can be generated in.
    # Dimension is specified by its registry name (e.g: minecraft:overworld, minecraft:the_nether, minecraft:the_end, etc.)
    # Each dimension must be on a separate line without any delimiters.
    # If the whitelist is set, the blacklist will be ignored.
    ##########################################################################################################

    Dimensions {{
        S:blackList <
         >
        S:whiteList <
            {DIMENSION}
         >
    }}

    ##########################################################################################################
    # Biomes
    #--------------------------------------------------------------------------------------------------------#
    # List of biomes which this ore can be generated in.
    # Biome is specified by its registry name (case-insensitive) or by its tag with '#' prefix.
    # Examples: minecraft:forest, #snowy
    # Each biome must be on a separate line without any delimiters.
    # If the whitelist is set, the blacklist will be ignored.
    # Enclose the biome ID in underscores to specify a surface biome instead of an underground one (example: _minecraft:beach_)
    ##########################################################################################################

    Biomes {{
        S:blackList <
         >
        S:whiteList <
         >
    }}

    ##########################################################################################################
    # Altitude
    #--------------------------------------------------------------------------------------------------------#
    # Altitude bounds within which this ore can be generated.
    # To set a value relative to ground level (including ocean floor), enclose it in underscores (example: _-24_)
    # To set a value relative to global sea level, enclose it in tildes (example: ~-24~)
    # To set a value relative to a surface level (ground or water), enclose it in equal signs (example: =-24=)
    ##########################################################################################################

    Altitude {{
        #  [default: 64]
        S:max={ALTITUDE_MAX}

        #  [default: 16]
        S:min={ALTITUDE_MIN}
    }}

    Miscellaneous {{
        # If set, the altitude will be calculated relative to the generated parent deposit, if any. [default: 0..0]
        S:altitudeOffset=0..0

        # Whether or not the ore blocks can be exposed to air. [default: true]
        B:exposed=true

        # Maximum number of attempts to generate this ore, picking different starting points, until all conditions are met. [range: 1 ~ 1024, default: 16]
        I:maxAttempts=16

        # Ratio of height to width.
        # Values greater than 1 will result in tall shapes, whilst values less than 1 will result in flat shapes.
        #  [range: 0.0 ~ 10.0, default: 1.0]
        S:proportions=1.0

        # If enabled, each ore block will be checked against the given altitude and biome restrictions, rather than the first one. [default: false]
        B:strictBounds=false

        # If enabled, the starting point will be checked only against replaceable blocks, ignoring custom replacements. [default: false]
        B:strictStart=false

        # If enabled, all biome restrictions will be checked against the surface biome rather than the underground biome at the placement position. [default: false]
        B:surfaceBiomes=false
    }}

    ##########################################################################################################
    # Indicator
    #--------------------------------------------------------------------------------------------------------#
    # Above-ground indicator for this deposit
    ##########################################################################################################

    Indicator {{
        # Circles of indicators and their radiuses.
        # Syntax: indicatorId [, circleRadius]
        # The order of the circles is always shuffled.
        # The circles with the same radius will be randomly selected.
        # If the radius is not defined, it will be selected from the minimum available, starting from 1.
        # Examples:
        #   minecraft:cornflower, 2
        #   minecraft:orange_tulip, 4
        #
        S:circles <
            nomansland:pebbles, 2
            nomansland:pebbles, 6
         >

        # Percentage of the indicator shape that will be visible. [range: 0.0 ~ 100.0, default: 60.0]
        S:continuity=75.0

        # Maximum displacement of the indicator shape elements. [range: 0 ~ 16, default: 1]
        I:distortion=1

        # Indicator ID.
        # Possible values:
        #    Block ID (for single-block indicators). Example: minecraft:rose_bush
        #    Placed feature ID (use the /place feature command to see available features). Example: minecraft:birch
        #    Structure ID (used as an anchor). Example: minecraft:desert_pyramid
        #       The structure itself won't be generated by this mod.
        #       Instead, ore will be generated beneath the structure with a probability defined by the threshold parameter.
        #  [default: ]
        S:id=

        # Percentage of the deposit full size required to create an above-ground indicator.
        # If the indicator is a structure - the chance of generating a deposit beneath it. [range: 0.0 ~ 100.0, default: 30.0]
        S:threshold={THRESHOLD}
    }}

    ##########################################################################################################
    # Size
    #--------------------------------------------------------------------------------------------------------#
    # Size limits (in blocks) of this deposit.
    ##########################################################################################################

    Size {{
        #  [range: 1 ~ 256000, default: 1400]
        I:max={SIZE_MAX}

        #  [range: 1 ~ 256000, default: 700]
        I:min={SIZE_MIN}
    }}

}}
"""


def make_vein(name: str, format_args, replaceableBlockTag="#minecraft:stone_ore_replaceables", strata=""):
    format_args["REPLACEABLES"] = replaceableBlockTag

    with open(f"config/adlods/Deposits/{name}.cfg", "w") as cfg:
        cfg.write(template.format(**format_args))
        cfg.close()


def mi(s):
    return f"modern_industrialization:{s}"


def mc(s):
    return f"minecraft:{s}"


def make_nether_vein(name, vein_config):
    vein_config["SIZE_MIN"] = round(vein_config["SIZE_MIN"] * 1.5)
    vein_config["SIZE_MAX"] = round(vein_config["SIZE_MAX"] * 1.5)
    vein_config["ALTITUDE_MAX"] = vein_config["ALTITUDE_MAX"] * 2
    vein_config["RARITY"] = round(vein_config["RARITY"] / 3)
    vein_config["DIMENSION"] = mc("the_nether")
    ores = ["PRIMARY", "SECONDARY", "TERTIARY", "QUATERNARY"]
    for ore in ores:
        if len(vein_config[ore]) != 0:
            if vein_config[ore].find("nether_quartz") == -1:
                vein_config[ore] = "modern_industrialization:netherrack_" + \
                    vein_config[ore].split(":")[1]

    make_vein(name + "_nether", vein_config,
              replaceableBlockTag="#c:netherracks")


def make_deepslate_vein(name, vein_config):
    vein_config["SIZE_MIN"] = round(vein_config["SIZE_MIN"] * 1.25)
    vein_config["SIZE_MAX"] = round(vein_config["SIZE_MAX"] * 1.25)
    vein_config["ALTITUDE_MAX"] = min(vein_config["ALTITUDE_MAX"] - 50, 0)
    vein_config["ALTITUDE_MIN"] = max(vein_config["ALTITUDE_MIN"] - 50, -59)
    vein_config["RARITY"] = round(vein_config["RARITY"] / 2)
    vein_config["DIMENSION"] = mc("overworld")
    ores = ["PRIMARY", "SECONDARY", "TERTIARY", "QUATERNARY"]
    for ore in ores:
        if len(vein_config[ore]) != 0:
            parts = vein_config[ore].split(":")
            vein_config[ore] = parts[0] + ":deepslate_" + parts[1]
    make_vein(name + "_deepslate", vein_config,
              "#minecraft:deepslate_ore_replaceables")


TETRAHEDRITE = {
    'SIZE_MIN': 2500,
    'SIZE_MAX': 3000,
    'ALTITUDE_MIN': 16,
    'ALTITUDE_MAX': 64,
    'PRIMARY': mi('tetrahedrite_ore') + ", 5",
    'SECONDARY': mi('stibnite_ore') + ", 4",
    'TERTIARY': mc('copper_ore') + ", 2",
    'QUATERNARY': mc('iron_ore') + ", 1",
    'RARITY': 12,
    'THRESHOLD': 30,
    'DIMENSION': mc('overworld')
}
make_vein("tetrahedrite", TETRAHEDRITE)
make_nether_vein("tetrahedrite", TETRAHEDRITE)

CHALCOPYRITE = {
    'SIZE_MIN': 3000,
    'SIZE_MAX': 3500,
    'ALTITUDE_MIN': 28,
    'ALTITUDE_MAX': 120,
    'PRIMARY': mi('chalcopyrite_ore') + ", 5",
    'SECONDARY': mc('copper_ore') + ", 4",
    'TERTIARY': mi('pyrite_ore') + ", 2",
    'QUATERNARY': mc('iron_ore') + ", 1",
    'RARITY': 12,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("chalcopyrite", CHALCOPYRITE)
make_deepslate_vein("chalcopyrite", CHALCOPYRITE)

CASSITERITE = {
    'SIZE_MIN': 3000,
    'SIZE_MAX': 3500,
    'ALTITUDE_MIN': 28,
    'ALTITUDE_MAX': 80,
    'PRIMARY': mi('cassiterite_ore') + ", 4",
    'SECONDARY': mi('tin_ore') + ", 3",
    'TERTIARY': mi('asbestos_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 13,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("cassiterite", CASSITERITE)
make_nether_vein("cassiterite", CASSITERITE)

TIN = {
    'SIZE_MIN': 2000,
    'SIZE_MAX': 2500,
    'ALTITUDE_MIN': 8,
    'ALTITUDE_MAX': 52,
    'PRIMARY': mi('tin_ore') + ", 6",
    'SECONDARY': mi('cassiterite_ore') + ", 2",
    'TERTIARY': mi('tin_ore') + ", 2",
    'QUATERNARY': "",
    'RARITY': 18,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("tin", TIN)

REDSTONE = {
    'SIZE_MIN': 3000,
    'SIZE_MAX': 3500,
    'ALTITUDE_MIN': 5,
    'ALTITUDE_MAX': 30,
    'PRIMARY': mc('redstone_ore') + ", 6",
    'SECONDARY': mi('ruby_ore') + ", 2",
    'TERTIARY': mc('redstone_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 15,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_deepslate_vein("redstone", REDSTONE)
make_nether_vein("redstone", REDSTONE)

PENTLANDITE = {
    'SIZE_MIN': 1500,
    'SIZE_MAX': 2000,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 40,
    'PRIMARY': mi('pentlandite_ore') + ", 4",
    'SECONDARY': mi('garnierite_ore') + ", 2",
    'TERTIARY': mi('nickel_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 20,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("pentlandite", PENTLANDITE)
make_nether_vein("pentlandite", PENTLANDITE)

GALENA = {
    'SIZE_MIN': 2500,
    'SIZE_MAX': 2800,
    'ALTITUDE_MIN': 5,
    'ALTITUDE_MAX': 45,
    'PRIMARY': mi('galena_ore') + ", 5",
    'SECONDARY': mi('lead_ore') + ", 2",
    'TERTIARY': mi('silver_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 25,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("galena", GALENA)

PITCHBLENDE = {
    'SIZE_MIN': 4000,
    'SIZE_MAX': 4500,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 25,
    'PRIMARY': mi('pitchblende_ore') + ", 5",
    'SECONDARY': mi('uraninite_ore') + ", 2",
    'TERTIARY': mi('uranium_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 60,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("pitchblende", PITCHBLENDE)
make_nether_vein("pitchblende", PITCHBLENDE)

COAL = {
    'SIZE_MIN': 5000,
    'SIZE_MAX': 6000,
    'ALTITUDE_MIN': 40,
    'ALTITUDE_MAX': 100,
    'PRIMARY': mc('coal_ore') + ", 5",
    'SECONDARY': mi('lignite_coal_ore') + ", 2",
    'TERTIARY': mi('graphite_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 15,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("coal", COAL)

LIGNITE_COAL = {
    'SIZE_MIN': 7000,
    'SIZE_MAX': 8000,
    'ALTITUDE_MIN': 40,
    'ALTITUDE_MAX': 100,
    'PRIMARY': mi('lignite_coal_ore') + ", 5",
    'SECONDARY': mi('sulfur_ore') + ", 2",
    'TERTIARY': mc('coal_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 15,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("lignite_coal", LIGNITE_COAL)

SULFUR = {
    'SIZE_MIN': 2000,
    'SIZE_MAX': 2500,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 40,
    'PRIMARY': mi('sulfur_ore') + ", 5",
    'SECONDARY': mi('pyrite_ore') + ", 2",
    'TERTIARY': mc('pentlandite_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 30,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_nether_vein("sulfur", SULFUR)

DIAMOND = {
    'SIZE_MIN': 500,
    'SIZE_MAX': 750,
    'ALTITUDE_MIN': 5,
    'ALTITUDE_MAX': 10,
    'PRIMARY': mc('diamond_ore') + ", 4",
    'SECONDARY': mi('graphite_ore') + ", 3",
    'TERTIARY': mc('coal_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 25,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_deepslate_vein("diamond", DIAMOND)

BAUXITE = {
    'SIZE_MIN': 4000,
    'SIZE_MAX': 5500,
    'ALTITUDE_MIN': 20,
    'ALTITUDE_MAX': 50,
    'PRIMARY': mi('bauxite_ore') + ", 5",
    'SECONDARY': mc('iron_ore') + ", 2",
    'TERTIARY': mi('ilmenite_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 25,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("bauxite", BAUXITE)
make_nether_vein("bauxite", BAUXITE)

ILMENITE = {
    'SIZE_MIN': 5000,
    'SIZE_MAX': 5500,
    'ALTITUDE_MIN': 20,
    'ALTITUDE_MAX': 50,
    'PRIMARY': mi('ilmenite_ore') + ", 5",
    'SECONDARY': mi('chromite_ore') + ", 2",
    'TERTIARY': mi('uvarovite_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 40,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_nether_vein("ilmenite", ILMENITE)

MAGNETITE = {
    'SIZE_MIN': 4000,
    'SIZE_MAX': 5500,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 60,
    'PRIMARY': mi('magnetite_ore') + ", 5",
    'SECONDARY': mc('iron_ore') + ", 2",
    'TERTIARY': mc('gold_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 15,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("magnetite", MAGNETITE)
make_nether_vein("magnetite", MAGNETITE)

SCHEELITE = {
    'SIZE_MIN': 2500,
    'SIZE_MAX': 3000,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 30,
    'PRIMARY': mi('scheelite_ore') + ", 5",
    'SECONDARY': mi('tungsten_ore') + ", 2",
    'TERTIARY': mi('tungsten_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 60,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_nether_vein("scheelite", SCHEELITE)

SHELDONITE = {
    'SIZE_MIN': 2500,
    'SIZE_MAX': 3000,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 60,
    'PRIMARY': mi('sheldonite_ore') + ", 10",
    'SECONDARY': mi('platinum_ore') + ", 8",
    'TERTIARY': mi('irdium_ore') + ", 2",
    'QUATERNARY': "",
    'RARITY': 60,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_nether_vein("scheelite", SHELDONITE)

BERYLLIUM = {
    'SIZE_MIN': 2000,
    'SIZE_MAX': 2500,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 45,
    'PRIMARY': mi('beryllium_ore') + ", 5",
    'SECONDARY': mc('emerald_ore') + ", 3",
    'TERTIARY': mi('thorium_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 50,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_deepslate_vein("beryllium", BERYLLIUM)
make_nether_vein("beryllium", BERYLLIUM)

LAPIS = {
    'SIZE_MIN': 3000,
    'SIZE_MAX': 3500,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 30,
    'PRIMARY': mc('lapis_ore') + ", 5",
    'SECONDARY': mi('sodalite_ore') + ", 2",
    'TERTIARY': mi('lazurite_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 25,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_vein("lapis", LAPIS)

QUARTZ = {
    'SIZE_MIN': 3000,
    'SIZE_MAX': 3500,
    'ALTITUDE_MIN': 10,
    'ALTITUDE_MAX': 50,
    'PRIMARY': mc('nether_quartz_ore') + ", 5",
    'SECONDARY': mi('certus_quartz_ore') + ", 2",
    'TERTIARY': mc('nether_quartz_ore') + ", 1",
    'QUATERNARY': "",
    'RARITY': 20,
    'THRESHOLD': 20,
    'DIMENSION': mc('overworld')
}
make_nether_vein("quartz", QUARTZ)
