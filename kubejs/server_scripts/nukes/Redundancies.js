RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("minecraft:nether_gold_ore");
  event.remove("sophisticatedbackpacks:stack_upgrade_starter_tier");
  
  //HNN nuking unused data models
  function nukeHNNdataPredictions(mob) {
    event.remove(
      `hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:${mob}`
    );
    event.remove(
      `hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:${mob}`
    );
  }

  let mobs = [
    "breeze",
    "cod",
    "elder_guardian",
    "ender_dragon",
    "evoker",
    "glow_squid",
    "squid",
    "hoglin",
    "iron_golem",
    "magma_cube",
    "mooshroom",
    "phantom",
    "snow_golem",
    "vindicator",
    "warden",
    "zombified_piglin",
    "polar_bear",
  ];
  mobs.forEach(nukeHNNdataPredictions);

  event.remove("hostilenetworks:twilight_prediction");
});

ServerEvents.recipes((event) => {
  event.remove({ output: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
  event.remove({ input: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
});
