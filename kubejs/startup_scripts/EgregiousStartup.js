Platform.mods.kubejs.name = "Egregious Industrialization";

StartupEvents.registry("item", (event) => {
  const lenses = ["diamond", "glass", "emerald", "certus", "quartz"];
  lenses.forEach((lens) => {
    event.create(`${lens}_lens`);
  });
  const wafers = ["cpu", "ilc", "nand", "nor", "ram", "soc"];
  wafers.forEach((wafer) => {
    event.create(`${wafer}_wafer`).displayName(wafer.toUpperCase() + " Wafer");
    event.create(`${wafer}_chip`).displayName(wafer.toUpperCase() + " Chip");
  });
});
