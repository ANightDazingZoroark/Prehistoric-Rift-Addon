import { world } from "mojang-minecraft"

world.events.tick.subscribe((ev) => {
    let entities = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < entities.length; i++) {
        try {
            if (entities[i].id == 'rift:saurophaganax') {
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