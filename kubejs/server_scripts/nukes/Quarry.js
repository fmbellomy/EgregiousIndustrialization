let nukes = [
  "modern_industrialization:gold_drill",
  "modern_industrialization:gold_drill_head",
  "modern_industrialization:steam_quarry",
  "modern_industrialization:electric_quarry",
];

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  nukes.forEach((item) => {
    event.remove(item);
  });
});
ServerEvents.recipes((event) => {
  nukes.forEach((item) => {
    event.remove({ output: item });
  });
  event.remove({ type: "modern_industrialization:quarry" });
});
