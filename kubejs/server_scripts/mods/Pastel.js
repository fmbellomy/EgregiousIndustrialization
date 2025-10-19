const PASTEL_GEMS = [
    "minecraft:amethyst",
    "pastel:citrine",
    "pastel:topaz",
    "pastel:onyx",
    "pastel:moonstone",
];
ServerEvents.recipes((event) => {
    PASTEL_GEMS.forEach((gemType) => {
        let ns = gemType.split(":")[0];
        let gem = gemType.split(":")[1];

        event.recipes.modern_industrialization
            .macerator(2, 100)
            .itemIn(`${gemType}_shard`)
            .itemOut(`2x pastel:${gem}_powder`);
        event.recipes.modern_industrialization
            .macerator(2, 100)
            .itemIn(`${gemType}_block`)
            .itemOut(`2x pastel:${gem}_powder`);
        event.recipes.modern_industrialization
            .macerator(2, 100)
            .itemIn(`${gemType}_cluster`)
            .itemOut(`16x pastel:${gem}_powder`);
        event.recipes.modern_industrialization
            .macerator(2, 100)
            .itemIn(`${ns}:small_${gem}_bud`)
            .itemOut(`4x pastel:${gem}_powder`);
        event.recipes.modern_industrialization
            .macerator(2, 100)
            .itemIn(`${ns}:medium_${gem}_bud`)
            .itemOut(`6x pastel:${gem}_powder`);
        event.recipes.modern_industrialization
            .macerator(2, 100)
            .itemIn(`${ns}:large_${gem}_bud`)
            .itemOut(`8x pastel:${gem}_powder`);
    });
});
