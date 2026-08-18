let nukelist = [];
nukelist.push("industrialization_overdrive:multi_processing_array");

nukelist.forEach((nuke) => {
  ServerEvents.recipes((event) => {
    event.remove({ output: nuke });
  });
  RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
    event.remove(nuke);
  });
});
