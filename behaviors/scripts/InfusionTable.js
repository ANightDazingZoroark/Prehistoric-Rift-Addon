import { ItemStack, ItemTypes, MinecraftBlockTypes, world } from "@minecraft/server"

world.afterEvents.blockPlace.subscribe((ev) => {
    const location = { 
        x: ev.block.location.x + 0.5, 
        y: ev.block.location.y, 
        z: ev.block.location.z + 0.5 
    }
    if (ev.block.typeId == 'rift:infusion_table') {
        ev.dimension.runCommandAsync('summon rift:infusion_table \"Infusion Table\" '+location.x+' '+location.y+' '+location.z)
    }
})

world.afterEvents.entityHitEntity.subscribe((ev) => {
    if (ev.hitEntity.typeId == 'rift:infusion_table') {
        const location = ev.hitEntity.location
        ev.hitEntity.dimension.fillBlocks(location, location, MinecraftBlockTypes.get('minecraft:air'))
        ev.hitEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:infusion_table'), 1), location)
        ev.hitEntity.triggerEvent('rift:on_destroy')
    }
})