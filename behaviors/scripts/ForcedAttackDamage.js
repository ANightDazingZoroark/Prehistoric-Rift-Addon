import { MinecraftEffectTypes, world } from "mojang-minecraft"

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
    console.warn(value)
    return value
}

function getOwner(entity) {
    let command = entity.runCommand(`tag @s list`)
    let tagList = command.statusMessage.split(": ")[1].split(", ").map(tag => tag.replace(/§./, ""))
    let ownerName = tagList.filter(x => x.includes('Owner'))
    console.warn(ownerName)
    return ownerName
}

world.events.tick.subscribe((ev) => {
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
        if (entities[i].id == 'rift:tyrannosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 35)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:stegosaurus') {
            if (entities[i].hasTag('chargeOne')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeTwo')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 40)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeThree')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 50)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeFour')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 60)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('chargeFive')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 70)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 30)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
        }
        if (entities[i].id == 'rift:triceratops') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 25)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:utahraptor') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 12)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:apatosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 80)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:sarcosuchus') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 15)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:anomalocaris') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=6] `+damageOutput(entities[i], 10)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:saurophaganax' && !entities[i].getComponent('is_sheared')) {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 60)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:saurophaganax' && entities[i].getComponent('is_sheared')) {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:direwolf' && !entities[i].getComponent('is_ignited')) {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 8)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:direwolf' && entities[i].getComponent('is_ignited')) {
            if (entities[i].hasTag('werewolfBite')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 16)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('werewolfSlash')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 12)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
        }
        if (entities[i].id == 'rift:megaloceros') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=7] `+damageOutput(entities[i], 5)+` entity_attack entity @s`)
            }
            catch (e) {}
        }
        if (entities[i].id == 'rift:baryonyx') {
            if (entities[i].hasTag('baryonyxBite')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 10)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
            else if (entities[i].hasTag('baryonyxClaw')) {
                try {
                    entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=8] `+damageOutput(entities[i], 7)+` entity_attack entity @s`)
                }
                catch (e) {}
            }
        }
        if (entities[i].id == 'rift:ankylosaurus') {
            try {
                entities[i].runCommand(`damage @e[tag=!`+getOwner(entities[i])+`, family=!inanimate, type=!player, type=!item, r=10] `+damageOutput(entities[i], 25)+` entity_attack entity @s`)
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