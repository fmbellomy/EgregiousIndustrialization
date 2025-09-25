MoreJSEvents.filterEnchantedBookTrade((event) => {
  event.remove("minecraft:mending"); // mending gtfo
});
MoreJSEvents.enchantmentTableChanged((event) => {
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
    slot.updateClue();
  }
});
