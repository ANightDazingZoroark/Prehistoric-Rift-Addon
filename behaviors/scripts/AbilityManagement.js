import { system, world } from "@minecraft/server"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].typeId == 'rift:saurophaganax') {
            let score = world.scoreboard.getObjective('saurophLightBlst').getScore(entities[i].scoreboard)
            if (score >= 10 && entities[i].hasTag('canNotify')) {
                entities[i].runCommandAsync(`execute as @s[tag=ridden] run tellraw @p {"rawtext":[{"text":"Light Blast Available!"}]}`)
                entities[i].triggerEvent('rift:cannot_notify')
            }
            if (score < 10) {
                entities[i].triggerEvent('rift:can_notify')
            }
        }
        if (entities[i].typeId == 'rift:dilophosaurus' && entities[i].getComponent('is_sheared') && !!entities[i].target) {
            entities[i].target.addTag('diloTarget')
            entities[i].runCommandAsync(`tp @s ~ ~ ~ facing @e[tag=diloTarget, c=1]`)
        }
        if (entities[i].typeId == 'rift:dilophosaurus' && entities[i].getComponent('is_sheared') && !entities[i].target) {
            entities[i].runCommandAsync(`tag @e remove diloTarget`)
        }
        if (entities[i].typeId == 'rift:tenontosaurus' && !!entities[i].target && !entities[i].hasComponent('minecraft:is_tamed')) {
            entities[i].target.addTag('tenontoTarget')
        }
        if (entities[i].typeId == 'rift:tenontosaurus' && !!entities[i].target && entities[i].hasComponent('minecraft:is_tamed')) {
            entities[i].target.addTag('tenontoTamedTarget')
        }
    }
})