ServerEvents.tags("enchantment", (event) => {
  // remove mending from villager trades
  event.remove("minecraft:tradeable", "minecraft:mending");
});
ServerEvents.tags("item", (event) => {
  event.remove("minecraft:enchantable/mining_loot", /justhammers:.*hammer/);
});
