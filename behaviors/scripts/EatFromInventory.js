import { MinecraftEffectTypes, system, world } from "@minecraft/server"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities({
        excludeTags: ['eatFromInventoryCooldown'],
        tags: [
            'tamed'
        ],
        families: [
            'riftCreature'
        ]
    }))
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].getComponent('health').current < entities[i].getComponent('health').value){ 
            for (let j = entities[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                try {
                    if (entities[i].getComponent('healable').items.map(x => x.item).includes(entities[i].getComponent('inventory').container.getItem(j).typeId)) {
                        try {
                            for (let k = 0; k < Object.keys(entities[i].getComponent('healable').items).length; k++) {
                                if (entities[i].getComponent('inventory').container.getItem(j).typeId == entities[i].getComponent('healable').items[k].item && entities[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    entities[i].getComponent('health').setCurrent(entities[i].getComponent('health').current + entities[i].getComponent('healable').items[k].healAmount)
                                    entities[i].runCommand(`replaceitem entity @s slot.inventory `+j+` `+entities[i].getComponent('healable').items[k].item+` `+(entities[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else if (entities[i].getComponent('inventory').container.getItem(j).typeId == entities[i].getComponent('healable').items[k].item && entities[i].getComponent('inventory').container.getItem(j).amount == 1) {
                                    entities[i].getComponent('health').setCurrent(entities[i].getComponent('health').current + entities[i].getComponent('healable').items[k].healAmount)
                                    entities[i].runCommand(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
                                }
                                try {
                                    switch (entities[i].getComponent('inventory').container.getItem(j).typeId) {
                                        case "rift:cooked_dodo_meat":
                                            entities[i].addEffect(MinecraftEffectTypes.absorption, 600, 3)
                                            break
                                        case "rift:cooked_hadrosaur_meat":
                                            entities[i].addEffect(MinecraftEffectTypes.resistance, 1200, 3)
                                            break
                                        case "rift:mixed_meat":
                                            entities[i].addEffect(MinecraftEffectTypes.absorption, 2400)
                                            entities[i].addEffect(MinecraftEffectTypes.regeneration, 100, 1)
                                            break
                                        case "minecraft:golden_apple":
                                            entities[i].addEffect(MinecraftEffectTypes.absorption, 2400)
                                            entities[i].addEffect(MinecraftEffectTypes.regeneration, 100, 1)
                                            break
                                        case "rift:enchanted_mixed_meat":
                                            entities[i].addEffect(MinecraftEffectTypes.absorption, 2400, 3)
                                            entities[i].addEffect(MinecraftEffectTypes.regeneration, 600, 1)
                                            entities[i].addEffect(MinecraftEffectTypes.fire_resistance, 6000)
                                            entities[i].addEffect(MinecraftEffectTypes.resistance, 6000)
                                            break
                                        case "minecraft:enchanted_golden_apple":
                                            entities[i].addEffect(MinecraftEffectTypes.absorption, 2400, 3)
                                            entities[i].addEffect(MinecraftEffectTypes.regeneration, 600, 1)
                                            entities[i].addEffect(MinecraftEffectTypes.fire_resistance, 6000)
                                            entities[i].addEffect(MinecraftEffectTypes.resistance, 6000)
                                            break
                                    }
                                }
                                catch (e) {}
                                entities[i].triggerEvent('rift:start_eat_from_inventory_cooldown')
                            }
                            break
                        }
                        catch (e) {}
                    }
                    else {
                        continue
                    }
                }
                catch (e) {}
            }
        }
    }
})