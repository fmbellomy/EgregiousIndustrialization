Platform.mods.kubejs.name = "Egregious Industrialization";

StartupEvents.registry("item", (event) => {
    const lenses = [
        { mat: "diamond", color: "#4AEAD6" },
        { mat: "glass", color: "#BABDB5" },
        { mat: "emerald", color: "#40F082" },
        { mat: "certus", color: "#88B9EC" },
        { mat: "quartz", color: "#E2DCD3" },
        { mat: "ruby", color: "#FC0B4D" },
    ];
    lenses.forEach((lens) => {
        event
            .create(`${lens.mat}_lens`)
            .textures({
                layer0: "kubejs:item/lens",
                layer1: "kubejs:item/lens_secondary",
                layer2: "kubejs:item/lens_overlay",
            })
            .color(0, lens.color)
            .color(1, lens.color);
    });
    const wafers = ["cpu", "ilc", "nand", "nor", "ram", "soc"];
    wafers.forEach((wafer) => {
        event.create(`${wafer}_wafer`).displayName(wafer.toUpperCase() + " Wafer");
        event.create(`${wafer}_chip`).displayName(wafer.toUpperCase() + " Chip");
    });
    const smds = ["Capacitor", "Diode", "Inductor", "Resistor", "Transistor"];

    smds.forEach((smd) => {
        event.create(`smd_${smd.toLowerCase()}`).displayName(`SMD ${smd}`);
    });
});
