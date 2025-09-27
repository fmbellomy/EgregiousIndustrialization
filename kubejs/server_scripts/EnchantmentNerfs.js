// remove mending from villager trades
ServerEvents.tags("enchantment", (event) => {
  event.remove("minecraft:tradeable", "minecraft:mending");
});
// remove fortune from appearing in hammer enchants
MoreJS.enchantmentTableChanged((event) => {
  // if the item isn't from justhammers, ignore it
  if (event.item.toString().indexOf("justhammers") == -1) {
    return;
  }
  // iterate over the choices in the enchanting table
  for (let i = 0; i < 3; i++) {
    let slot = event.get(i);
    slot.removeEnchantments((enchantment, level) => {
      return enchantment == "minecraft:fortune";
    });
    slot.randomClue();
  }
});
