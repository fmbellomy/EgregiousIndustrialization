ServerEvents.recipes ((event) => {
    event.replaceInput( //All drawers will take a bronze gear to make
        {mod:"functionalstorage"},
        "#c:chests/wooden",
        "modern_industrialization:bronze_gear"
    );
    event.replaceInput( //Fluid storage will take a Stainless Steel Tank
        {mod:"functionalstorage"},
        "minecraft:bucket",
        "modern_industrialization:stainless_steel_tank"
    );
    event.replaceInput( //All pistons are replaced with pistons ;p
        {mod:"functionalstorage"},
        "minecraft:piston",
        "modern_industrialization:piston"
    );
    event.replaceInput( //replace the planks for stainless steel plates in Ender Drawers
        {mod:"functionalstorage", output:'functionalstorage:ender_drawer' },
        '#minecraft:planks',
        "modern_industrialization:stainless_steel_plate"
    );
    event.remove( {output: 'functionalstorage:copper_upgrade'}) //All upgrades are MI progression based now, augments are untouched for now
    event.shaped('functionalstorage:copper_upgrade', ["PGP", "GSG", "PGP"], {
        P: 'modern_industrialization:steel_plate',
        G: 'modern_industrialization:steel_gear',
        S: '#functionalstorage:drawer',
    });
    event.remove( {output: 'functionalstorage:gold_upgrade'})
    event.shaped('functionalstorage:gold_upgrade', ["PGP", "GUG", "PGP"], {
        P: 'modern_industrialization:aluminum_plate',
        G: 'modern_industrialization:aluminum_gear',
        U: 'functionalstorage:copper_upgrade',
    });
    event.remove( {output: 'functionalstorage:diamond_upgrade'})
    event.shaped('functionalstorage:diamond_upgrade', ["PGP", "GUG", "PGP"], {
        P: 'modern_industrialization:stainless_steel_plate',
        G: 'modern_industrialization:stainless_steel_gear',
        U: 'functionalstorage:gold_upgrade',
    });
    event.remove( {output: 'functionalstorage:netherite_upgrade'})
    event.shaped('functionalstorage:netherite_upgrade', ["PGP", "GUG", "PGP"], {
        P: 'modern_industrialization:titanium_plate',
        G: 'modern_industrialization:titanium_gear',
        U: 'functionalstorage:diamond_upgrade',
    });
    event.remove({output: 'functionalstorage:storage_controller'}) //Changes both Access Points and Controllers to be more inline with MI
    event.shaped('functionalstorage:storage_controller', ["PAP", "DCD", "PAP"],{
        P:'modern_industrialization:steel_plate',
        A:'modern_industrialization:analog_circuit',
        D:'#functionalstorage:drawer',
        C:'modern_industrialization:configurable_chest',
    });
    event.remove({output: 'functionalstorage:framed_storage_controller'})
    event.shaped('functionalstorage:framed_storage_controller', [" N ", "NDN", " N "],{
        N:'minecraft:iron_nugget',
        D:'functionalstorage:storage_controller',
    });
    event.remove({output: 'functionalstorage:controller_extension'})
    event.shaped('functionalstorage:controller_extension', ["PPP", "DCD", "PPP"],{
        P:'modern_industrialization:steel_plate',
        D:'#functionalstorage:drawer',
        C:'modern_industrialization:configurable_chest',
    });
    event.remove({output: 'functionalstorage:framed_controller_extension'})
    event.shaped('functionalstorage:framed_controller_extension', [" N ", "NDN", " N "],{
        N:'minecraft:iron_nugget',
        D:'functionalstorage:controller_extension',
    });
});