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
    if (ev.currentTick % 20 == 0) {
        let entities = Array.from(world.getDimension('overworld').getEntities())
        mainloop: for (let e = 0; e < entities.length; e++) {
            if (entities[e].id == 'rift:tyrannosaurus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && !entities[e].hasTag('sleeping') && !entities[e].getComponent('is_baby')) {
                for(let x = -12; x < 13; x++) {
                    for (let y = -2; y < 4; y++) {
                        for (let z = -12; z < 13; z++) {
                            if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).id)) {
                                entities[e].triggerEvent('rift:angered_by_fire')
                                continue mainloop
                            }
                        }
                    }
                }
            }
            if (entities[e].id == 'rift:parasaurolophus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && !entities[e].getComponent('is_baby') && !entities[e].target) {
                for(let x = -12; x < 13; x++) {
                    for (let y = -2; y < 4; y++){
                        for (let z = -12; z < 13; z++) {
                            if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).id)) {
                                entities[e].triggerEvent('rift:adult_call_and_become_angry')
                                continue mainloop
                            }
                        }
                    }
                }
            }
            if (entities[e].id == 'rift:parasaurolophus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && entities[e].getComponent('is_baby') && !entities[e].target) {
                for(let x = -12; x < 13; x++) {
                    for (let y = -2; y < 4; y++){
                        for (let z = -12; z < 13; z++) {
                            if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).id)) {
                                entities[e].addTag('angeredByFire')
                                entities[e].triggerEvent('rift:baby_become_scared')
                                continue mainloop
                            }
                        }
                    }
                }
            }
            if (entities[e].id == 'rift:direwolf' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && entities[e].hasTag('ignited') && !entities[e].getComponent('is_baby')) {
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