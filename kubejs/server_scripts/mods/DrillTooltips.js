// i *WANTED* to use the datamap for this, but apparently datamaps aren't accessible at the time ItemEvents.modifyTooltips callbacks are fired.
let drills = {};
function makeDrill(material, cost, mult, breakChance) {
  return {
    id: `modern_industrialization:${material}_drill`,
    euCost: cost,
    multiplier: mult,
    breakProbability: breakChance,
  };
}
drills.bronze = makeDrill("bronze", 4, 1.25, 5);
drills.steel = makeDrill("steel", 16, 1.75, 5);
drills.aluminum = makeDrill("aluminum", 64, 2.25, 5);
drills.stainless_steel = makeDrill("stainless_steel", 256, 3, 3);
drills.titanium = makeDrill("titanium", 512, 5.0, 2);
drills.iridium = makeDrill("iridium", 2048, 7.5, 0.5);

ItemEvents.modifyTooltips((event) => {
  for (let drillProp in drills) {
    if (!drills.hasOwnProperty(drillProp)) {
      console.log(`drills does contain ${drill}`);
      continue;
    }
    let drill = drills[drillProp];
    event.add(
      drill.id,
      { shift: false },
      Text.of("Hold ").append(
        Text.yellow("SHIFT").append(Text.white(" for more information."))
      )
    );
    event.add(
      drill.id,
      { shift: true },
      Text.of("In ").append(Text.aqua("Ore Drilling Plant:"))
    );
    event.add(
      drill.id,
      { shift: true },
      Text.of(`  Base`)
        .append(Text.white(` EU `))
        .append(Text.white(`Cost: `))
        .append(Text.yellow(`${drill.euCost}`))
    );
    event.add(
      drill.id,
      { shift: true },
      Text.white(`  Ore Multiplier: `).append(
        Text.darkGreen(`${drill.multiplier.toFixed(2)}`)
      )
    );
    event.add(
      drill.id,
      { shift: true },
      Text.of(`  Break Chance: `).append(
        Text.red(`${drill.breakProbability}%`.toString())
      )
    );
  }
});
