import { world } from "@minecraft/server"
import { clearEntity, testForItem } from "./externals/itemmanagement"

world.events.beforeDataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.id == 'rift:use_mounted_weapon') {
        if (data.entity.getComponent('skin_id').value == 1) {
            if (testForItem(data.entity, 'rift:cannonball')) {
                data.entity.triggerEvent('rift:apato_firing')
                clearEntity(data.entity, 'rift:cannonball', 0, 1)
            }
            else {
                data.entity.runCommandAsync(`tellraw @p {\"rawtext\":[{\"text\":\"No cannonballs left in stock!\"}]}`)
            }
        }
        if (data.entity.getComponent('skin_id').value == 2) {
            if (testForItem(data.entity, 'rift:mortar_shell')) {
                data.entity.triggerEvent('rift:apato_mortaring')
                clearEntity(data.entity, 'rift:mortar_shell', 0, 1)
            }
            else {
                data.entity.runCommandAsync(`tellraw @p {\"rawtext\":[{\"text\":\"No mortar shells left in stock!\"}]}`)
            }
        }
        if (data.entity.getComponent('skin_id').value == 3) {
            if (testForItem(data.entity, 'rift:catapult_boulder')) {
                data.entity.triggerEvent('rift:apato_play_catapult_anim')
                clearEntity(data.entity, 'rift:catapult_boulder', 0, 1)
            }
            else {
                data.entity.runCommandAsync(`tellraw @p {\"rawtext\":[{\"text\":\"No catapult boulders left in stock!\"}]}`)
            }
        }
    }
})