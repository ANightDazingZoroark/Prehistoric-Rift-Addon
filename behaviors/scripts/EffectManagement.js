import { Items, ItemStack, Location, MinecraftEffectTypes, world } from "mojang-minecraft"

world.events.tick.subscribe((ev) => {
    let entities = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].getEffect(MinecraftEffectTypes.blindness)) {
            entities[i].target = world.getDimension('overworld').spawnItem(new ItemStack(Items.get('minecraft:air'), 1, 0), entities[i].location)
        }
    }
})