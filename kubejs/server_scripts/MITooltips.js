let items = Item.getList()
  .toArray()
  .map((item) => item.getItem().toString());
let drills = items.filter(
  (item) => item.includes("modern_industrialization") && item.includes("drill")
);
ItemEvents.modifyTooltips((event) => {
  let EgregiousDatamaps = Java.loadClass(
    "com.quantumgarbage.egregiouscore.EgregiousDatamaps"
  );
  drills.forEach((drill) => {
    let drillingPlantInput = Item.getItem(drill)
      .asHolder()
      .getData(EgregiousDatamaps.DRILLING_PLANT_INPUT);
    if (drillingPlantInput != null) {
      event.add(
        drill,
        { shift: false },
        Text.of("Hold ").append(
          Text.yellow("SHIFT").append(Text.white(" for more information."))
        )
      );
      event.add(
        drill,
        { shift: true },
        Text.of("In ").append(Text.aqua("Ore Drilling Plant:"))
      );
      event.add(
        drill,
        { shift: true },
        Text.of(`  Base`)
          .append(Text.white(` EU `))
          .append(Text.white(`Cost: `))
          .append(Text.yellow(`${drillingPlantInput.euCost()}`))
      );
      event.add(
        drill,
        { shift: true },
        Text.white(`  Ore Multiplier: `).append(
          Text.darkGreen(`${drillingPlantInput.multiplier().toFixed(2)}`)
        )
      );
      event.add(
        drill,
        { shift: true },
        Text.of(`  Break Chance: `).append(
          Text.red(`${drillingPlantInput.breakProbability()}%`.toString())
        )
      );
    }
  });
});
