import { MinecraftEffectTypes, world } from "@minecraft/server"

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

world.events.beforeDataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.id == 'rift:using_forced_attack') {
        switch (data.entity.typeId) {
            case 'rift:tyrannosaurus':
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 35)+` entity_attack entity @s`)
                break
            case 'rift:stegosaurus': 
                if (data.entity.hasTag('chargeOne')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 30)+` entity_attack entity @s`)
                }
                else if (data.entity.hasTag('chargeTwo')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 40)+` entity_attack entity @s`)
                }
                else if (data.entity.hasTag('chargeThree')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 50)+` entity_attack entity @s`)
                }
                else if (data.entity.hasTag('chargeFour')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 60)+` entity_attack entity @s`)
                }
                else if (data.entity.hasTag('chargeFive')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 70)+` entity_attack entity @s`)
                }
                else {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 30)+` entity_attack entity @s`)
                }
                break
            case 'rift:triceratops': 
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=7] `+damageOutput(data.entity, 25)+` entity_attack entity @s`)
                break
            case 'rift:utahraptor': 
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=7] `+damageOutput(data.entity, 5)+` entity_attack entity @s`)
                break
            case 'rift:apatosaurus': 
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 80)+` entity_attack entity @s`)
                break
            case 'rift:sarcosuchus': 
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 15)+` entity_attack entity @s`)
                break
            case 'rift:anomalocaris':
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=6] `+damageOutput(data.entity, 10)+` entity_attack entity @s`)
                break
            case 'rift:saurophaganax':
                if (!data.entity.getComponent('is_sheared')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 60)+` entity_attack entity @s`)
                }
                else {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 5)+` entity_attack entity @s`)
                }
                break
            case 'rift:direwolf': 
                if (!data.entity.getComponent('is_ignited')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 8)+` entity_attack entity @s`)
                }
                else {
                    if (data.entity.hasTag('werewolfBite')) {
                        data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 16)+` entity_attack entity @s`)
                    }
                    else if (data.entity.hasTag('werewolfSlash')) {
                        data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 12)+` entity_attack entity @s`)
                    }
                }
                break
            case 'rift:megaloceros': 
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=7] `+damageOutput(data.entity, 5)+` entity_attack entity @s`)
                break
            case 'rift:baryonyx':
                if (data.entity.hasTag('baryonyxBite')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 10)+` entity_attack entity @s`)
                }
                else if (data.entity.hasTag('baryonyxClaw')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 7)+` entity_attack entity @s`)
                }
                break
            case 'rift:ankylosaurus':
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=10] `+damageOutput(data.entity, 25)+` entity_attack entity @s`)
                break
            case 'rift:dilophosaurus':
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=7] `+damageOutput(data.entity, 4)+` entity_attack entity @s`)
                break
            case 'rift:tenontosaurus': 
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=8] `+damageOutput(data.entity, 5)+` entity_attack entity @s`)
                break
            case 'rift:direbear':
                if (data.entity.hasTag('biteMode')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=6] `+damageOutput(data.entity, 10)+` entity_attack entity @s`)
                }
                else if (data.entity.hasTag('clawMode')) {
                    data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=6] `+damageOutput(data.entity, 10)+` entity_attack entity @s`)
                }
                break
            case 'rift:pteranodon':
                data.entity.runCommandAsync(`damage @e[tag=!tamed, family=!inanimate, type=!player, type=!item, tag=!hypnotizedTamed, r=4] `+damageOutput(data.entity, 4)+` entity_attack entity @s`)
                break
        }
        data.entity.removeTag('werewolfBite')
        data.entity.removeTag('werewolfSlash')
        data.entity.removeTag('baryonyxBite')
        data.entity.removeTag('baryonyxClaw')
    }
})