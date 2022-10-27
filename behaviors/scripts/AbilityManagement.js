import { system, world } from "@minecraft/server"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < entities.length; i++) {
        try {
            if (entities[i].id == 'rift:saurophaganax') {
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
    }
})