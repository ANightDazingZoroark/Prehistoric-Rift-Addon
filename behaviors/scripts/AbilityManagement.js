import { system, world } from "@minecraft/server"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < entities.length; i++) {
        try {
            if (entities[i].typeId == 'rift:saurophaganax') {
                let score = world.scoreboard.getObjective('saurophLightBlst').getScore(entities[i].scoreboard)
                if (score >= 10 && entities[i].hasTag('canNotify')) {
                    entities[i].runCommand(`tellraw @p {"rawtext":[{"text":"Light Blast Available!"}]}`)
                    entities[i].runCommand(`event entity @s rift:cannot_notify`)
                }
                if (score < 10) {
                    entities[i].runCommand(`event entity @s rift:can_notify`)
                }
            }
        }
        catch (e) {}
    }
})