import { system, world } from "@minecraft/server"
import { setTimeout } from "./externals/timers"

// system.run(function everyTick(tick) {
//     system.run(everyTick)
//     let entities = Array.from(world.getDimension('overworld').getEntities({
//         type: 'rift:dilophosaurus'
//     }))
//     for (let i = 0; i < entities.length; i++) {
//         if (entities[i].getComponent('is_sheared') && !!entities[i].target) {
//             entities[i].target.addTag('diloTarget')
//             entities[i].runCommandAsync(`tp @s ~ ~ ~ facing @e[tag=diloTarget, c=1]`)
//         }
//         if (entities[i].getComponent('is_sheared') && !entities[i].target) {
//             entities[i].runCommandAsync(`tag @e remove diloTarget`)
//         }
//     }
// })

world.events.beforeDataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.entity.typeId == 'rift:tenontosaurus' && data.id == 'rift:adult_become_angry') {
        data.entity.target.addTag('tenontoTarget')
        setTimeout(() => {
            data.entity.target.removeTag('tenontoTarget')
        }, 1000)
    }
    if (data.entity.typeId == 'rift:tenontosaurus' && data.id == 'rift:tamed_on_anger') {
        data.entity.target.addTag('tenontoTamedTarget')
        data.entity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
        setTimeout(() => {
            data.entity.target.removeTag('tenontoTamedTarget')
        }, 1000)
    }
    if (data.entity.typeId == 'rift:dilophosaurus' && data.id == 'rift:ranged_attack_mode') {
        console.warn('angy')
    }
})