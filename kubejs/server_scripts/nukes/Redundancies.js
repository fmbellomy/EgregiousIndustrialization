RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("minecraft:nether_gold_ore");
  event.remove("sophisticatedbackpacks:stack_upgrade_starter_tier");
});

ServerEvents.recipes((event) => {
  event.remove({ output: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
  event.remove({ input: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
});
