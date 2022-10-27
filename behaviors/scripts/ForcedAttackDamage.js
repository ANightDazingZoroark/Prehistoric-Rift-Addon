import { MinecraftEffectTypes, system, world } from "@minecraft/server"

function damageOutput(entity, value) {
    if (entity.getEffect(MinecraftEffectTypes.strength) && !entity.hasTag('chargeOne') && !entity.hasTag('chargeTwo') && !entity.hasTag('chargeThree') && !entity.hasTag('chargeFour') && !entity.hasTag('chargeFive')) {
        for (let d = 0; d < entity.getEffect(MinecraftEffectTypes.strength).amplifier; d++) {
            value = value * 1.3 + 1
        }
    }
    if (entity.getEffect(MinecraftEffectTypes.weakness) && !entity.hasTag('chargeOne') && !entity.hasTag('chargeTwo') && !entity.hasTag('chargeThree') && !entity.hasTag('chargeFour') && !entity.hasTag('chargeFive')) {
        for (let d = 0; d < entity.getEffect(MinecraftEffectTypes.weakness).amplifier; d++) {
            value = value * 0.8 - 0.5
        }
    }
    value = value.toString().split('.')[0]
    return value
}

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities({
        tags: [
            'tamed',
            'forcedAttack'
        ],
        families: [
            'riftCreature'
        ]
    }))
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].typeId == 'rift:tyrannosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 35)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:stegosaurus') {
            if (entities[i].hasTag('chargeOne')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeTwo')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 40)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeThree')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 50)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeFour')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 60)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeFive')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 70)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
        }
        if (entities[i].typeId == 'rift:triceratops') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 25)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:utahraptor') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 12)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:apatosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 80)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:sarcosuchus') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 15)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:anomalocaris') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=6] `+damageOutput(entities[i], 10)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:saurophaganax' && !entities[i].getComponent('is_sheared')) {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 60)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:saurophaganax' && entities[i].getComponent('is_sheared')) {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:direwolf' && !entities[i].getComponent('is_ignited')) {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 8)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:direwolf' && entities[i].getComponent('is_ignited')) {
            if (entities[i].hasTag('werewolfBite')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 16)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('werewolfSlash')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 12)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
        }
        if (entities[i].typeId == 'rift:megaloceros') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].typeId == 'rift:baryonyx') {
            if (entities[i].hasTag('baryonyxBite')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 10)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('baryonyxClaw')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 7)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
        }
        if (entities[i].typeId == 'rift:ankylosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 25)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        entities[i].removeTag('forcedAttack')
        entities[i].removeTag('chargeOne')
        entities[i].removeTag('chargeTwo')
        entities[i].removeTag('chargeThree')
        entities[i].removeTag('chargeFour')
        entities[i].removeTag('chargeFive')
        entities[i].removeTag('werewolfBite')
        entities[i].removeTag('werewolfSlash')
        entities[i].removeTag('baryonyxBite')
        entities[i].removeTag('baryonyxClaw')
    }
})