import { EntityQueryOptions, world } from "mojang-minecraft"

const filters = new EntityQueryOptions()
filters.type = 'rift:saurophaganax'

world.events.tick.subscribe((ev) => {
    let entities = Array.from(world.getDimension('overworld').getEntities(filters))
    for (let i = 0; i < entities.length; i++) {
        let score = world.scoreboard.getObjective('saurophLightBlst').getScore(entities[i].scoreboard)
        if (score >= 10 && entities[i].hasTag('canNotify')) {
            entities[i].runCommand(`tellraw @p {"rawtext":[{"text":"Light Blast Available!"}]}`)
            entities[i].runCommand(`event entity @s rift:cannot_notify`)
        }
        if (score < 10) {
            entities[i].runCommand(`event entity @s rift:can_notify`)
        }
    }
})