RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("modern_industrialization:electric_quarry");
  event.remove("modern_industrialization:steam_quarry");
});
ServerEvents.recipes((event) => {
  event.remove({ type: "modern_industrialization:quarry" });
  event.remove({ output: "modern_industrialization:steam_quarry" });
  event.remove({ output: "modern_industrialization:electric_quarry" });
});
