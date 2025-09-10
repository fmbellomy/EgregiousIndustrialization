#!/bin/env bash
rsync -av ./minecraft/modern_industrialization/runtime_datagen/assets/* ./minecraft/kubejs/assets/
rsync -av ./minecraft/modern_industrialization/runtime_datagen/data/* ./minecraft/kubejs/data/


for FILE in ./minecraft/kubejs/data/modern_industrialization/worldgen/configured_feature/*; do
    cat > $FILE <<- EOM
{
  "type": "minecraft:no_op",
  "config": {}
}
EOM
 
done