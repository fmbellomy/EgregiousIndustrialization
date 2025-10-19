ServerEvents.recipes((event) => {
    function changeBackpackMaterial(original, replacement, previous) {
        event.remove({ output: `sophisticatedbackpacks:${original}_backpack` });
        event.custom({
            "neoforge:conditions": [
                {
                    type: "sophisticatedcore:item_enabled",
                    itemRegistryName: `sophisticatedbackpacks:${original}_backpack`,
                },
            ],
            type: "sophisticatedbackpacks:backpack_upgrade",
            category: "misc",
            key: {
                B: {
                    item: `sophisticatedbackpacks:${previous}backpack`,
                },
                C: {
                    tag: `c:plates/${replacement}`,
                },
            },
            pattern: ["CCC", "CBC", "CCC"],
            result: {
                count: 1,
                id: `sophisticatedbackpacks:${original}_backpack`,
            },
        });
    }

    event.remove({ output: `sophisticatedbackpacks:copper_backpack` });
    event.remove({ output: `sophisticatedbackpacks:iron_backpack` });
    event.remove({ output: `sophisticatedbackpacks:gold_backpack` });
    event.remove({ output: `sophisticatedbackpacks:diamond_backpack` });
    event.remove({ output: `sophisticatedbackpacks:netherite_backpack` });

    changeBackpackMaterial("copper", "bronze", "");
    changeBackpackMaterial("iron", "steel", "copper_");
    changeBackpackMaterial("gold", "aluminum", "iron_");
    changeBackpackMaterial("diamond", "stainless_steel", "gold_");
    changeBackpackMaterial("netherite", "titanium", "diamond_");

    function changeStackMaterial(original, replacement) {
        event.replaceInput(
            { mod: "sophisticatedbackpacks" },
            `minecraft:${original}_block`,
            `modern_industrialization:${replacement}_block`
        );
    }

    changeStackMaterial("iron", "steel");
    changeStackMaterial("gold", "aluminum");
    changeStackMaterial("diamond", "stainless_steel");
    changeStackMaterial("netherite", "titanium");
});
