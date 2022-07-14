import { EntityQueryOptions, world } from "mojang-minecraft"

const filters = new EntityQueryOptions()
filters.type = 'rift:saurophaganax'

let lightBlastNotify = true

world.events.tick.subscribe((ev) => {
    let entities = Array.from(world.getDimension('overworld').getEntities(filters))
    for (let i = 0; i < entities.length; i++) {
        let score = world.scoreboard.getObjective('saurophLightBlst').getScore(entities[i].scoreboard)
        if (score >= 10 && lightBlastNotify == true) {
            entities[i].runCommand(`tellraw @p {"rawtext":[{"text":"Light Blast Available!"}]}`)
            lightBlastNotify = false
        }
        if (score < 10) {
            lightBlastNotify = true
        }
    }
})