# steps to make a release build:

- launch the game to execute MI's runtime datagen and generate materials
- go disable MI runtime datagen
- move `runtime_datagen/data/*` to `kubejs/data/`
- move `runtime_datagen/assets/*` to `kubejs/assets/`
- you should now be chillin
