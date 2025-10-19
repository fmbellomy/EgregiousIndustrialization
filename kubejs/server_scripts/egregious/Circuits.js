ServerEvents.tags("item", (event) => {
    event.add("egregious:resistor", "modern_industrialization:resistor");
    event.add("egregious:resistor", "kubejs:smd_resistor");
    event.add("egregious:inductor", "modern_industrialization:inductor");
    event.add("egregious:inductor", "kubejs:smd_inductor");
    event.add("egregious:capacitor", "modern_industrialization:capacitor");
    event.add("egregious:capacitor", "kubejs:smd_capacitor");
    event.add("egregious:diode", "modern_industrialization:diode");
    event.add("egregious:diode", "kubejs:smd_diode");
    event.add("egregious:transistor", "modern_industrialization:transistor");
    event.add("egregious:transistor", "kubejs:smd_transistor");
});
ServerEvents.recipes((event) => {
    // starting with wafer shenanigans
    ["resistor", "inductor", "capacitor", "diode", "transistor"].forEach(
        (comp) => {
            event.replaceInput(
                { output: "modern_industrialization:analog_circuit" },
                `modern_industrialization:${comp}`,
                `#egregious:${comp}`
            );
            event.replaceInput(
                { output: "modern_industrialization:electronic_circuit" },
                `modern_industrialization:${comp}`,
                `#egregious:${comp}`
            );
        }
    );

    // we do need to make boules craftable sooner, so here's a recipe doable in MV

    event.recipes.modern_industrialization
        .blast_furnace(32, 3600)
        .itemIn("64x modern_industrialization:silicon_dust")
        .itemIn("modern_industrialization:antimony_tiny_dust")
        .fluidIn("4000x modern_industrialization:oxygen")
        .itemOut("modern_industrialization:monocrystalline_silicon");

    [("glass", "diamond", "emerald", "quartz")].forEach((gem) => {
    // a whole two minutes for each lens since they're super cheap and you don't need very many
        event.recipes.modern_industrialization
            .cutting_machine(32, 120 * 20)
            .itemIn(`minecraft:${gem}`)
            .itemOut(`kubejs:${gem}_lens`)
            .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });
    });
    event.recipes.modern_industrialization
        .cutting_machine(32, 120 * 20)
        .itemIn(`modern_industrialization:ruby`)
        .itemOut(`kubejs:ruby_lens`)
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });

    event.recipes.modern_industrialization
        .cutting_machine(32, 120 * 20)
        .itemIn(`ae2:certus_quartz_crystal`)
        .itemOut(`kubejs:certus_lens`)
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });

    let lensRecipes = [
        { lens: "ruby", wafer: "ilc", tier: "mv", eu: 16 },
        { lens: "glass", wafer: "soc", tier: "mv", eu: 16 },
        { lens: "diamond", wafer: "cpu", tier: "hv", eu: 24 },
        { lens: "emerald", wafer: "ram", tier: "hv", eu: 24 },
        { lens: "quartz", wafer: "nand", tier: "ev", eu: 32 },
        { lens: "certus", wafer: "nor", tier: "ev", eu: 32 },
    ];
    lensRecipes.forEach((pair) =>
        event.recipes.modern_industrialization
            .laser_engraver(pair.eu, 500)
            .itemIn(`kubejs:${pair.lens}_lens`, 0.0)
            .itemIn("modern_industrialization:silicon_wafer")
            .itemOut(`kubejs:${pair.wafer}_wafer`)
            .registeredCondition({ "mi_tweaks:voltage": { voltage: pair.tier } })
    );

    let chipRecipes = [
        { chip: "ilc", tier: "mv", eu: 8, outputQuantity: 16 },
        { chip: "cpu", tier: "mv", eu: 8, outputQuantity: 16 },
        { chip: "soc", tier: "hv", eu: 16, outputQuantity: 12 },
        { chip: "ram", tier: "hv", eu: 16, outputQuantity: 12 },
        { chip: "nand", tier: "ev", eu: 48, outputQuantity: 8 },
        { chip: "nor", tier: "ev", eu: 48, outputQuantity: 8 },
    ];
    chipRecipes.forEach((recipe) => {
        event.recipes.modern_industrialization
            .cutting_machine(recipe.eu, 150)
            .fluidIn("50x modern_industrialization:lubricant")
            .itemIn(`kubejs:${recipe.chip}_wafer`)
            .itemOut(`${recipe.outputQuantity}x kubejs:${recipe.chip}_chip`);
    });

    // SMD Recipes

    event.recipes.modern_industrialization
        .assembler(24, 200)
        .itemIn("modern_industrialization:rubber_sheet")
        .itemIn("modern_industrialization:aluminum_plate")
        .fluidIn("50x modern_industrialization:polyethylene")
        .itemOut("8x kubejs:smd_capacitor")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });
    event.recipes.modern_industrialization
        .assembler(24, 200)
        .itemIn("modern_industrialization:carbon_dust")
        .itemIn("4x modern_industrialization:electrum_fine_wire")
        .fluidIn("100x modern_industrialization:polyethylene")
        .itemOut("16x kubejs:smd_resistor")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });
    event.recipes.modern_industrialization
        .assembler(24, 200)
        .itemIn("modern_industrialization:invar_ring")
        .itemIn("4x modern_industrialization:cupronickel_fine_wire")
        .fluidIn("100x modern_industrialization:polyethylene")
        .itemOut("16x kubejs:smd_inductor")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });
    event.recipes.modern_industrialization
        .assembler(24, 200)
        .itemIn("modern_industrialization:silicon_carbide_dust")
        .itemIn("8x modern_industrialization:platinum_fine_wire")
        .fluidIn("100x modern_industrialization:polyethylene")
        .itemOut("32x kubejs:smd_diode")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "hv" } });
    event.recipes.modern_industrialization
        .assembler(24, 200)
        .itemIn("8x modern_industrialization:annealed_copper_fine_wire")
        .itemIn("modern_industrialization:silicon_carbide_plate")
        .fluidIn("100x modern_industrialization:polyethylene")
        .itemOut("16x kubejs:smd_transistor")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "hv" } });

    // circuit assembler recipes
    // LV ANALOG
    event.recipes.modern_industrialization
        .circuit_assembler(8, 200)
        .itemIn("modern_industrialization:analog_circuit_board")
        .itemIn("3x #egregious:resistor")
        .itemIn("3x #egregious:capacitor")
        .itemIn("2x #egregious:inductor")
        .itemIn("4x modern_industrialization:copper_wire")
        .fluidIn("45x modern_industrialization:soldering_alloy")
        .itemOut("2x modern_industrialization:analog_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "lv" } });
    // MV ANALOG
    event.recipes.modern_industrialization
        .circuit_assembler(8, 200)
        .itemIn("modern_industrialization:analog_circuit_board")
        .itemIn("2x kubejs:ilc_chip")
        .itemIn("2x #egregious:resistor")
        .itemIn("2x #egregious:capacitor")
        .itemIn("2x #egregious:inductor")
        .itemIn("2x modern_industrialization:copper_fine_wire")
        .fluidIn("120x modern_industrialization:soldering_alloy")
        .itemOut("3x modern_industrialization:analog_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });
    // HV ANALOG
    event.recipes.modern_industrialization
        .circuit_assembler(16, 200)
        .itemIn("modern_industrialization:analog_circuit_board")
        .itemIn("kubejs:cpu_chip")
        .itemIn("2x #egregious:resistor")
        .itemIn("2x #egregious:capacitor")
        .itemIn("2x #egregious:inductor")
        .itemIn("2x modern_industrialization:copper_fine_wire")
        .fluidIn("120x modern_industrialization:soldering_alloy")
        .itemOut("4x modern_industrialization:analog_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "hv" } });

    // MV ELECTRONIC
    event.recipes.modern_industrialization
        .circuit_assembler(8, 200)
        .itemIn("modern_industrialization:electronic_circuit_board")
        .itemIn("3x #egregious:diode")
        .itemIn("3x #egregious:transistor")
        .itemIn("6x modern_industrialization:analog_circuit")
        .itemIn("4x modern_industrialization:electrum_fine_wire")
        .fluidIn("45x modern_industrialization:soldering_alloy")
        .itemOut("2x modern_industrialization:electronic_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "mv" } });
    // HV ELECTRONIC
    event.recipes.modern_industrialization
        .circuit_assembler(16, 200)
        .itemIn("modern_industrialization:electronic_circuit_board")
        .itemIn("kubejs:soc_chip")
        .itemIn("3x #egregious:diode")
        .itemIn("3x #egregious:transistor")
        .itemIn("3x #egregious:inductor")
        .itemIn("8x modern_industrialization:electrum_fine_wire")
        .fluidIn("120x modern_industrialization:soldering_alloy")
        .itemOut("3x modern_industrialization:electronic_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "hv" } });
    // EV ELECTRONIC
    event.recipes.modern_industrialization
        .circuit_assembler(32, 200)
        .itemIn("modern_industrialization:electronic_circuit_board")
        .itemIn("2x kubejs:soc_chip")
        .itemIn("2x #egregious:diode")
        .itemIn("2x #egregious:transistor")
        .itemIn("4x modern_industrialization:platinum_fine_wire")
        .fluidIn("120x modern_industrialization:soldering_alloy")
        .itemOut("4x modern_industrialization:electronic_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "ev" } });

    // HV DIGITAL
    event.recipes.modern_industrialization
        .circuit_assembler(24, 200)
        .itemIn("modern_industrialization:digital_circuit_board")
        .itemIn("4x #egregious:diode")
        .itemIn("8x #egregious:inductor")
        .itemIn("4x modern_industrialization:op_amp")
        .itemIn("6x modern_industrialization:electronic_circuit")
        .itemIn("8x modern_industrialization:annealed_copper_fine_wire")
        .fluidIn("45x modern_industrialization:soldering_alloy")
        .itemOut("2x modern_industrialization:digital_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "hv" } });
    // EV DIGITAL
    event.recipes.modern_industrialization
        .circuit_assembler(40, 200)
        .itemIn("modern_industrialization:digital_circuit_board")
        .itemIn("6x #egregious:diode")
        .itemIn("6x #egregious:inductor")
        .itemIn("2x kubejs:nand_chip")
        .itemIn("2x kubejs:nor_chip")
        .itemIn("8x modern_industrialization:platinum_fine_wire")
        .fluidIn("120x modern_industrialization:soldering_alloy")
        .itemOut("1x modern_industrialization:digital_circuit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "ev" } });

    // EV PROCESSING UNIT
    event.recipes.modern_industrialization
        .circuit_assembler(64, 200)
        .itemIn("modern_industrialization:processing_unit_board")
        .itemIn("4x modern_industrialization:digital_circuit")
        .itemIn("modern_industrialization:memory_management_unit")
        .itemIn("modern_industrialization:arithmetic_logic_unit")
        .itemIn("2x modern_industrialization:random_access_memory")
        .itemIn("8x modern_industrialization:platinum_fine_wire")
        .fluidIn("120x modern_industrialization:soldering_alloy")
        .itemOut("2x modern_industrialization:processing_unit")
        .registeredCondition({ "mi_tweaks:voltage": { voltage: "ev" } });

    // SV/QV NOT YET IMPLEMENTED (WILL REQUIRE MULTIBLOCKS)

    // RAM
    event.remove({ output: "modern_industrialization:random_access_memory" });
    event.recipes.modern_industrialization
        .circuit_assembler(24, 400)
        .itemIn("2x kubejs:ram_chip")
        .itemIn("modern_industrialization:antimony_dust")
        .itemIn("modern_industrialization:aluminum_dust")
        .fluidIn("500x modern_industrialization:styrene_butadiene_rubber")
        .itemOut("2x modern_industrialization:random_access_memory");
    // MMU
    event.recipes.modern_industrialization
        .circuit_assembler(24, 400)
        .itemIn("kubejs:nand_wafer")
        .itemIn("modern_industrialization:emerald_plate")
        .itemIn("8x modern_industrialization:platinum_fine_wire")
        .fluidIn("100x modern_industrialization:soldering_alloy")
        .itemOut("2x modern_industrialization:memory_management_unit");
    // ALU
    event.recipes.modern_industrialization
        .circuit_assembler(24, 400)
        .itemIn("2x kubejs:nand_chip")
        .itemIn("2x kubejs:nor_chip")
        .itemIn("2x modern_industrialization:op_amp")
        .itemIn("modern_industrialization:diamond_plate")
        .fluidIn("100x modern_industrialization:soldering_alloy")
        .itemOut("2x modern_industrialization:arithmetic_logic_unit");
});
