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
        switch (entities[i].typeId) {
            case 'rift:tyrannosaurus': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 35)+` entity_attack entity @s`)
                break
            case 'rift:stegosaurus': 
                if (entities[i].hasTag('chargeOne')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
                }
                else if (entities[i].hasTag('chargeTwo')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 40)+` entity_attack entity @s`)
                }
                else if (entities[i].hasTag('chargeThree')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 50)+` entity_attack entity @s`)
                }
                else if (entities[i].hasTag('chargeFour')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 60)+` entity_attack entity @s`)
                }
                else if (entities[i].hasTag('chargeFive')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 70)+` entity_attack entity @s`)
                }
                else {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
                }
                break
            case 'rift:triceratops': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 25)+` entity_attack entity @s`)
                break
            case 'rift:utahraptor': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 12)+` entity_attack entity @s`)
                break
            case 'rift:apatosaurus': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 80)+` entity_attack entity @s`)
                break
            case 'rift:sarcosuchus': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 15)+` entity_attack entity @s`)
                break
            case 'rift:anomalocaris':
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=6] `+damageOutput(entities[i], 10)+` entity_attack entity @s`)
                break
            case 'rift:saurophaganax':
                if (!entities[i].getComponent('is_sheared')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 60)+` entity_attack entity @s`)
                }
                else {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
                }
                break
            case 'rift:direwolf': 
                if (!entities[i].getComponent('is_ignited')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 8)+` entity_attack entity @s`)
                }
                else {
                    if (entities[i].hasTag('werewolfBite')) {
                        entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 16)+` entity_attack entity @s`)
                    }
                    else if (entities[i].hasTag('werewolfSlash')) {
                        entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 12)+` entity_attack entity @s`)
                    }
                }
                break
            case 'rift:megaloceros': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
                break
            case 'rift:baryonyx':
                if (entities[i].hasTag('baryonyxBite')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 10)+` entity_attack entity @s`)
                }
                else if (entities[i].hasTag('baryonyxClaw')) {
                    entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 7)+` entity_attack entity @s`)
                }
                break
            case 'rift:ankylosaurus':
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 25)+` entity_attack entity @s`)
                break
            case 'rift:dilophosaurus':
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 6)+` entity_attack entity @s`)
                break
            case 'rift:tenontosaurus': 
                entities[i].runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
                break
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