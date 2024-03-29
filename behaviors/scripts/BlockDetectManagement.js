/***
the link to this script in Main.js was turned into a comment because of
how stupidly laggy this is. might wanna remake this to utilize runCommandAsync
and respect the 128 commands per tick, or maybe wait till mojank makes it so vanilla
blocks become data driven
***/
import { system, world } from "@minecraft/server"

let fireBlocks = [
    "minecraft:fire",
    "minecraft:soul_fire",
    "minecraft:campfire",
    "minecraft:soul_campfire",
    "minecraft:torch",
    "minecraft:soul_torch"
]

system.runSchedule(() => {
    let entities = Array.from(world.getDimension('overworld').getEntities())
    mainloop: for (let e = 0; e < entities.length; e++) {
        if (entities[e].typeId == 'rift:tyrannosaurus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && !entities[e].hasTag('sleeping') && !entities[e].getComponent('is_baby')) {
            for(let x = -4; x < 5; x++) {
                for (let y = -2; y < 4; y++) {
                    for (let z = -4; z < 5; z++) {
                        if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).typeId)) {
                            entities[e].triggerEvent('rift:angered_by_fire')
                            continue mainloop
                        }
                    }
                }
            }
        }
        if (entities[e].typeId == 'rift:parasaurolophus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && !entities[e].getComponent('is_baby') && !entities[e].target) {
            for(let x = -12; x < 13; x++) {
                for (let y = -2; y < 4; y++){
                    for (let z = -12; z < 13; z++) {
                        if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).typeId)) {
                            entities[e].triggerEvent('rift:adult_call_and_become_angry')
                            continue mainloop
                        }
                    }
                }
            }
        }
        if (entities[e].typeId == 'rift:parasaurolophus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && entities[e].getComponent('is_baby') && !entities[e].target) {
            for(let x = -12; x < 13; x++) {
                for (let y = -2; y < 4; y++){
                    for (let z = -12; z < 13; z++) {
                        if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).typeId)) {
                            entities[e].addTag('angeredByFire')
                            entities[e].triggerEvent('rift:baby_become_scared')
                            continue mainloop
                        }
                    }
                }
            }
        }
        if (entities[e].typeId == 'rift:direwolf' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && entities[e].hasTag('ignited') && !entities[e].getComponent('is_baby')) {
            for(let x = -12; x < 13; x++) {
                for (let y = -2; y < 4; y++){
                    for (let z = -12; z < 13; z++) {
                        if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).typeId)) {
                            entities[e].triggerEvent('rift:angered_by_fire')
                            continue mainloop
                        }
                    }
                }
            }
        }
        if (entities[e].typeId == 'rift:ankylosaurus' && !entities[e].getComponent('is_tamed') && !entities[e].getComponent('is_baby')) {
            let fireBlockNum = 0
            for(let x = -12; x < 13; x++) {
                for (let y = -2; y < 4; y++){
                    for (let z = -12; z < 13; z++) {
                        if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).typeId)) {
                            fireBlockNum++
                        }
                    }
                }
            }
            if (fireBlockNum > 0) {
                entities[e].triggerEvent('rift:hide_in_shell_from_fire')
            }
            else {
                entities[e].triggerEvent('rift:end_hide_in_shell_from_fire')
            }
        }
        if (entities[e].typeId == 'rift:gallimimus' && !entities[e].getComponent('is_tamed') && !entities[e].hasTag('angeredByFire') && !entities[e].getComponent('is_baby') && !entities[e].target) {
            for(let x = -12; x < 13; x++) {
                for (let y = -2; y < 4; y++){
                    for (let z = -12; z < 13; z++) {
                        if (fireBlocks.includes(entities[e].dimension.getBlock(new BlockLocation(Math.trunc(entities[e].location.x+x), Math.trunc(entities[e].location.y+y), Math.trunc(entities[e].location.z+z))).typeId)) {
                            entities[e].triggerEvent('rift:adult_become_scared')
                            continue mainloop
                        }
                    }
                }
            }
        }
    }
}, 100 )