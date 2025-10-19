// priority: 10000
ServerEvents.tags("enchantment", (event) => {
    // remove mending from villager trades
    event.remove("minecraft:tradeable", "minecraft:mending");
});

ServerEvents.tags("item", (event) => {
    // FOR SOME REASON!!!
    // calling event.remove("minecraft:enchantable/mining_loot", "justhammers:TYPE_hammer") doesn't do anything.
    // so instead of removing only the ones i don't want, i'm removing ALL from the tag and then re-adding everything but the hammers.
    event.removeAll("minecraft:enchantable/mining_loot");
    event.add("minecraft:enchantable/mining_loot", "ae2:annihilation_plane");
    event.add("minecraft:enchantable/mining_loot", "ae2:certus_quartz_axe");
    event.add("minecraft:enchantable/mining_loot", "ae2:certus_quartz_hoe");
    event.add("minecraft:enchantable/mining_loot", "ae2:certus_quartz_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "ae2:certus_quartz_shovel");
    event.add("minecraft:enchantable/mining_loot", "ae2:fluix_axe");
    event.add("minecraft:enchantable/mining_loot", "ae2:fluix_hoe");
    event.add("minecraft:enchantable/mining_loot", "ae2:fluix_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "ae2:fluix_shovel");
    event.add("minecraft:enchantable/mining_loot", "ae2:nether_quartz_axe");
    event.add("minecraft:enchantable/mining_loot", "ae2:nether_quartz_hoe");
    event.add("minecraft:enchantable/mining_loot", "ae2:nether_quartz_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "ae2:nether_quartz_shovel");
    event.add(
        "minecraft:enchantable/mining_loot",
        "ars_nouveau:enchanters_gauntlet"
    );
    event.add(
        "minecraft:enchantable/mining_loot",
        "farmersdelight:diamond_knife"
    );
    event.add("minecraft:enchantable/mining_loot", "farmersdelight:flint_knife");
    event.add("minecraft:enchantable/mining_loot", "farmersdelight:golden_knife");
    event.add("minecraft:enchantable/mining_loot", "farmersdelight:iron_knife");
    event.add(
        "minecraft:enchantable/mining_loot",
        "farmersdelight:netherite_knife"
    );
    event.add("minecraft:enchantable/mining_loot", "minecraft:diamond_axe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:diamond_hoe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:diamond_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:diamond_shovel");
    event.add("minecraft:enchantable/mining_loot", "minecraft:golden_axe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:golden_hoe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:golden_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:golden_shovel");
    event.add("minecraft:enchantable/mining_loot", "minecraft:iron_axe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:iron_hoe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:iron_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:iron_shovel");
    event.add("minecraft:enchantable/mining_loot", "minecraft:netherite_axe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:netherite_hoe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:netherite_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:netherite_shovel");
    event.add("minecraft:enchantable/mining_loot", "minecraft:stone_axe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:stone_hoe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:stone_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:stone_shovel");
    event.add("minecraft:enchantable/mining_loot", "minecraft:wooden_axe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:wooden_hoe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:wooden_pickaxe");
    event.add("minecraft:enchantable/mining_loot", "minecraft:wooden_shovel");
    event.add(
        "minecraft:enchantable/mining_loot",
        "modern_industrialization:diesel_chainsaw"
    );
    event.add(
        "minecraft:enchantable/mining_loot",
        "modern_industrialization:diesel_mining_drill"
    );
    event.add(
        "minecraft:enchantable/mining_loot",
        "modern_industrialization:steam_mining_drill"
    );
});
