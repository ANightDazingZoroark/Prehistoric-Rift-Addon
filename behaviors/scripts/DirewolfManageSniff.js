import { BlockLocation, system, world } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui"

function sniffMainGui(hitEntity, entity) {
    const sniffMainGui = new ActionFormData()
    .title('Direwolf Sniff Menu')
    .body('Choose an action')
    .button('Instant Sniff')
    .button('Change command staff sniffing mode')
    .show(entity).then(result => {
        switch (result.selection) {
            case 0:
                manualSniffGui(hitEntity, entity)
                break
            case 1:
                changeCommandStaffSniffGui(hitEntity, entity)
                break
        }
    })
}

function manualSniffGui(hitEntity, entity) {
    const manualSniffGui = new ActionFormData()
    .title('Instant Sniff Mode')
    .body('Choose what to sniff out instantly')
    .button('Mobs')
    .button('Dropped Items')
    .button('Chests')
    .show(entity).then(result => {
        switch (result.selection) {
            case 0:
                entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Sniffing out entities...\"}]}`)
                if (hitEntity.hasTag('lowEnergy') || hitEntity.hasTag('noEnergy')) {
                    entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Your Direwolf doesn't have enough energy to perform this action!\"}]}`)
                }
                else {
                    if (hitEntity.getComponent('is_ignited')) {
                        try {
                            hitEntity.runCommandAsync(`execute as @e[x=~-48, dx=96, y=~-4, dy=20, z=~-48, dz=96, c=16, type=!xp_orb, type=!player, type=!item, tag=!tamed, family=!inanimate] positioned as @e[x=~-48, dx=96, y=~-4, dy=20, z=~-48, dz=96, c=16, type=!xp_orb, type=!player, type=!item, tag=!tamed, family=!inanimate] run summon rift:direwolf_alert_icon `)
                        }
                        catch (e) {}
                        hitEntity.triggerEvent('rift:decrease_energy_while_sniffing')
                    }
                    else {
                        try {
                            hitEntity.runCommandAsync(`execute as @e[x=~-24, dx=48, y=~-4, dy=20, z=~-24, dz=48, c=16, type=!xp_orb, type=!player, type=!item, tag=!tamed, family=!inanimate] positioned as @e[x=~-24, dx=48, y=~-4, dy=20, z=~-24, dz=48, c=16, type=!xp_orb, type=!player, type=!item, tag=!tamed, family=!inanimate] run summon rift:direwolf_alert_icon `)
                        }
                        catch (e) {}
                        hitEntity.triggerEvent('rift:decrease_energy_while_sniffing')
                    }
                }
                break
            case 1:
                entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Sniffing out dropped items...\"}]}`)
                if (hitEntity.hasTag('lowEnergy') || hitEntity.hasTag('noEnergy')) {
                    entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Your Direwolf doesn't have enough energy to perform this action!\"}]}`)
                }
                else {
                    if (hitEntity.getComponent('is_ignited')) {
                        try {
                            hitEntity.runCommandAsync(`execute as @e[x=~-48, dx=96, y=~-4, dy=20, z=~-48, dz=96, c=16, type=item] positioned as @e[x=~-48, dx=96, y=~-4, dy=20, z=~-48, dz=96, type=item] run summon rift:direwolf_alert_icon `)
                        }
                        catch (e) {}
                        hitEntity.triggerEvent('rift:decrease_energy_while_sniffing')
                    }
                    else {
                        try {
                            hitEntity.runCommandAsync(`execute as @e[x=~-24, dx=48, y=~-4, dy=20, z=~-24, dz=48, c=16, type=item] positioned as @e[x=~-24, dx=48, y=~-4, dy=20, z=~-24, dz=48, c=16, type=item] run summon rift:direwolf_alert_icon `)
                        }
                        catch (e) {}
                        hitEntity.triggerEvent('rift:decrease_energy_while_sniffing')
                    }
                }
                break
            case 2:
                entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Sniffing out chests...\"}]}`)
                if (hitEntity.hasTag('lowEnergy') || hitEntity.hasTag('noEnergy')) {
                    entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Your Direwolf doesn't have enough energy to perform this action!\"}]}`)
                }
                else {
                    for(let x = -12; x < 13; x++) {
                        for (let y = -4; y < 16; y++) {
                            for (let z = -12; z < 13; z++) {
                                if (hitEntity.dimension.getBlock(new BlockLocation(Math.trunc(hitEntity.location.x+x), Math.trunc(hitEntity.location.y+y), Math.trunc(hitEntity.location.z+z))).typeId == 'minecraft:chest') {
                                    world.getDimension('overworld').spawnEntity('rift:direwolf_alert_icon', new BlockLocation(Math.trunc(hitEntity.location.x+x), Math.trunc(hitEntity.location.y+y), Math.trunc(hitEntity.location.z+z))).nameTag = ''
                                    console.warn('yay')
                                }
                                if (hitEntity.dimension.getBlock(new BlockLocation(Math.trunc(hitEntity.location.x+x), Math.trunc(hitEntity.location.y+y), Math.trunc(hitEntity.location.z+z))).typeId == 'minecraft:trapped_chest') {
                                    world.getDimension('overworld').spawnEntity('rift:direwolf_alert_icon', new BlockLocation(Math.trunc(hitEntity.location.x+x), Math.trunc(hitEntity.location.y+y), Math.trunc(hitEntity.location.z+z))).nameTag = ''
                                }
                            }
                        }
                    }
                    try {
                        hitEntity.runCommandAsync(`execute as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_boat] positioned as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_boat] run summon rift:direwolf_alert_icon `)
                        hitEntity.runCommandAsync(`execute as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_minecart] positioned as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_minecart] run summon rift:direwolf_alert_icon `)
                    }
                    catch (e) {}
                    hitEntity.triggerEvent('rift:decrease_energy_while_sniffing')
                }
                break
        }
    })
}

function changeCommandStaffSniffGui(hitEntity, entity) {
    const changeCommandStaffSniffGui = new ActionFormData()
    .title('Change Command Staff Sniff')
    .body('Choose what sniff mode to use when activating sniff ability while riding')
    .button('Mobs')
    .button('Dropped Items')
    .button('Chests')
    .show(entity).then(result => {
        switch (result.selection) {
            case 0:
                entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Your Direwolf will now sniff out mobs\"}]}`)
                hitEntity.addTag('sniffMobs')
                hitEntity.removeTag('sniffItems')
                hitEntity.removeTag('sniffChests')
                break
            case 1:
                entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Your Direwolf will now sniff out items that are on the ground\"}]}`)
                hitEntity.addTag('sniffItems')
                hitEntity.removeTag('sniffMobs')
                hitEntity.removeTag('sniffChests')
                break
            case 2:
                entity.runCommandAsync(`tellraw @s {\"rawtext\":[{\"text\":\"Your Direwolf will now sniff out chests\"}]}`)
                hitEntity.addTag('sniffChests')
                hitEntity.removeTag('sniffMobs')
                hitEntity.removeTag('sniffItems')
        }
    })
}

world.events.entityHit.subscribe(({ hitEntity, entity }) => {
    try {
        if (hitEntity.typeId == 'rift:direwolf' && hitEntity.getComponent('is_tamed') && !hitEntity.getComponent('is_baby')) {
            sniffMainGui(hitEntity, entity)
        }
    }
    catch (e) {}
})

world.events.beforeDataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.id == 'rift:use_chest_sniff') {
        console.warn('hello')
        for (let x = -12; x < 13; x++) {
            for (let y = -4; y < 16; y++) {
                for (let z = -12; z < 13; z++) {
                    if (data.entity.dimension.getBlock(new BlockLocation(Math.trunc(data.entity.location.x+x), Math.trunc(data.entity.location.y+y), Math.trunc(data.entity.location.z+z))).typeId == 'minecraft:chest') {
                        world.getDimension('overworld').spawnEntity('rift:direwolf_alert_icon', new BlockLocation(Math.trunc(data.entity.location.x+x), Math.trunc(data.entity.location.y+y), Math.trunc(data.entity.location.z+z))).nameTag = ''
                    }
                    if (data.entity.dimension.getBlock(new BlockLocation(Math.trunc(data.entity.location.x+x), Math.trunc(data.entity.location.y+y), Math.trunc(data.entity.location.z+z))).typeId == 'minecraft:trapped_chest') {
                        world.getDimension('overworld').spawnEntity('rift:direwolf_alert_icon', new BlockLocation(Math.trunc(data.entity.location.x+x), Math.trunc(data.entity.location.y+y), Math.trunc(data.entity.location.z+z))).nameTag = ''
                    }
                }
            }
        }
        data.entity.runCommandAsync(`execute as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_boat] positioned as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_boat] run summon rift:direwolf_alert_icon `)
        data.entity.runCommandAsync(`execute as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_minecart] positioned as @e[x=~-12, dx=24, y=~-4, dy=20, z=~-12, dz=24, type=chest_minecart] run summon rift:direwolf_alert_icon `)
        data.entity.removeTag('useChestSniff')
    }
})