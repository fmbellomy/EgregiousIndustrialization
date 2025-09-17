ServerEvents.recipes ((event) => {
    event.replaceInput(
        {mod:"sophisticatedbackpacks"},
        "minecraft:copper_ingot",
        'modern_industrialization:bronze_plate'
    );
    event.replaceInput(
        {mod:"sophisticatedbackpacks"},
        'minecraft:iron_ingot',
        'modern_industrialization:steel_plate'
    );
    event.replaceInput(
        {mod:"sophisticatedbackpacks"},
        'minecraft:gold_ingot',
        'modern_industrialization:aluminum_plate'
    );
    event.replaceInput(
        {mod:"sophisticatedbackpacks"},
        "minecraft:diamond",
        'modern_industrialization:stainless_steel_plate'
    );
    event.remove( {output: 'sophisticatedbackpacks:iron_backpack'})
    event.shaped('sophisticatedbackpacks:iron_backpack', ["SSS", "SBS", "SSS"], {
        S: 'modern_industrialization:steel_plate',
        B: 'sophisticatedbackpacks:copper_backpack',
    });
       event.remove( {output: 'sophisticatedbackpacks:netherite_backpack'})
    event.shaped('sophisticatedbackpacks:netherite_backpack', ["TTT", "TBT", "TTT"], {
        T: 'modern_industrialization:titanium_plate',
        B: 'sophisticatedbackpacks:diamond_backpack',
    });
});