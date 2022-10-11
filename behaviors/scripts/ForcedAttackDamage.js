import { EntityQueryOptions, MinecraftEffectTypes, world } from "mojang-minecraft"

let filter = new EntityQueryOptions();
filter.excludeTags = ['eatFromInventoryCooldown']
filter.tags = [
    'tamed',
    'forcedAttack'
]
filter.families = [
    'riftCreature'
]

function damageOutput(entity, value) {
    if (entity.getEffect(MinecraftEffectTypes.strength)) {
        for (let d = 0; d < entity.getEffect(MinecraftEffectTypes.strength).amplifier; d++) {
            value = value * 1.3 + 1
        }
    }
    if (entity.getEffect(MinecraftEffectTypes.weakness)) {
        for (let d = 0; d < entity.getEffect(MinecraftEffectTypes.weakness).amplifier; d++) {
            value = value * 0.8 - 0.5
        }
    }
    value = value.toString().split('.')[0]
    console.warn(value)
    return value
}

world.events.tick.subscribe((ev) => {
    let entities = Array.from(world.getDimension('overworld').getEntities(filter))
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].id == 'rift:tyrannosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 35)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:stegosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        entities[i].removeTag('forcedAttack')
    }
})