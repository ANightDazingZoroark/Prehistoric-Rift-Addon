import { BlockLocation, world } from 'mojang-minecraft'

let fireBlocks = [
    "minecraft:fire",
    "minecraft:soul_fire",
    "minecraft:campfire",
    "minecraft:soul_campfire",
    "minecraft:torch",
    "minecraft:soul_torch"
]

world.events.tick.subscribe((ev) => {
    if (ev.currentTick % 5 == 0) {
        let entities = Array.from(world.getDimension('overworld').getEntities())
        mainloop: for (let e = 0; e < entities.length; e++) {
            if (entities[e].id == 'rift:tyrannosaurus' && !entities[e].hasTag('tamed') && !entities[e].hasTag('angeredByFire') && !entities[e].hasTag('sleeping')) {
                for(let x = -12; x < 13; x++) {
                    for (let y = -2; y < 4; y++){
                        for (let z = -12; z < 13; z++) {
                            if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).id)) {
                                entities[e].triggerEvent('rift:angered_by_fire')
                                continue mainloop
                            }
                        }
                    }
                }
            }
        }
    }
})