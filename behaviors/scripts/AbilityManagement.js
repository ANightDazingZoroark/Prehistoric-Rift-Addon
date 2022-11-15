import { system, world } from "@minecraft/server"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < entities.length; i++) {
        try {
            if (entities[i].typeId == 'rift:saurophaganax') {
                let score = world.scoreboard.getObjective('saurophLightBlst').getScore(entities[i].scoreboard)
                if (score >= 10 && entities[i].hasTag('canNotify')) {
                    entities[i].runCommand(`execute as @s[tag=ridden] run tellraw @p {"rawtext":[{"text":"Light Blast Available!"}]}`)
                    entities[i].triggerEvent('rift:cannot_notify')
                }
                if (score < 10) {
                    entities[i].triggerEvent('rift:can_notify')
                }
            }
        }
        catch (e) {}
        if (entities[i].typeId == 'rift:dilophosaurus' && entities[i].getComponent('is_sheared') && !!entities[i].target) {
            entities[i].target.addTag('diloTarget')
            entities[i].runCommand(`tp @s ~ ~ ~ facing @e[tag=diloTarget, c=1]`)
        }
        if (entities[i].typeId == 'rift:dilophosaurus' && entities[i].getComponent('is_sheared') && !entities[i].target) {
            entities[i].runCommand(`tag @e remove diloTarget`)
        }
        if (entities[i].typeId == 'rift:tenontosaurus' && !!entities[i].target) {
            entities[i].target.addTag('tenontoTarget')
        }
        if (entities[i].typeId == 'rift:tenontosaurus' && !entities[i].target) {
            try {
                entities[i].runCommand(`tag @e remove tenontoTarget`)
            }
            catch (e) {}
        }
    }
})