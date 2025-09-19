RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("minecraft:nether_gold_ore");
  event.remove("sophisticatedbackpacks:stack_upgrade_starter_tier");
  //HNN nuking unused data models
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:breeze"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cod"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:elder_guardian"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:evoker"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:glow_squid"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:squid"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:hoglin"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:iron_golem"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:magma_cube"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:mooshroom"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:phantom"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:snow_golem"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:vindicator"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:warden"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:zombified_piglin"]');
  event.remove('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:polar_bear"]');
  event.remove('hostilenetworks:twilight_prediction');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:breeze"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:cod"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ender_dragon"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:evoker"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:glow_squid"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:squid"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:hoglin"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:iron_golem"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:magma_cube"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:mooshroom"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:phantom"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:snow_golem"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:vindicator"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:warden"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombified_piglin"]');
  event.remove('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:polar_bear"]');
});

ServerEvents.recipes((event) => {
  event.remove({ output: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
  event.remove({ input: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
});
