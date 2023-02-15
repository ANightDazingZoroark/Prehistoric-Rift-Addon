import { Vector, system, world } from "@minecraft/server"
import { setTimeout } from "./externals/timers"

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
    if (data.id == 'rift:force_go_down') {
        data.entity.setVelocity({
            x: 0,
            y: -1,
            z: 0
        })
    }
})