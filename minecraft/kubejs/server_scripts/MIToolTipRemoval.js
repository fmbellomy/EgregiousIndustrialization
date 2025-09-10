let items = Item.getList()
  .toArray()
  .map((item) => item.getItem().toString())
  .filter(
    (item) => item.includes("modern_industrialization") && item.includes("_ore")
  );

ItemEvents.modifyTooltips((event) => {
  items.forEach((ore) => {
    event.modify(ore, (tooltip) => {
      for (let i = 0; i < 5; i++) {
        tooltip.removeLine(1);
      }
    });
  });
});
