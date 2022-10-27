import { EntityQueryOptions, system, world } from "@minecraft/server"

const validMobs = [
    'rift:tyrannosaurus',
    'rift:stegosaurus',
    'rift:triceratops',
    'rift:utahraptor',
    'rift:apatosaurus',
    'rift:parasaurolophus',
    'rift:sarcosuchus',
    'rift:anomalocaris',
    'rift:saurophaganax',
    'rift:megaloceros',
    'rift:baryonyx'
]

system.run(function everyTick(tick) {
    system.run(everyTick)
    let entities = Array.from(world.getDimension('overworld').getEntities({
        excludeTags: ['eatFromInventoryCooldown']
    }))
    for (let i = 0; i < entities.length; i++) {
        try {
            if (entities[i].getComponent('health').current < entities[i].getComponent('health').value && validMobs.includes(entities[i].typeId) ){ 
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
                                                entities[i].runCommand(`effect @s absorption 30 3`)
                                                break
                                            case "rift:cooked_hadrosaur_meat":
                                                entities[i].runCommand(`effect @s resistance 60 3`)
                                                break
                                            case "rift:mixed_meat":
                                                entities[i].runCommand(`effect @s absorption 120`)
                                                entities[i].runCommand(`effect @s regeneration 5 1`)
                                                break
                                            case "minecraft:golden_apple":
                                                entities[i].runCommand(`effect @s absorption 120`)
                                                entities[i].runCommand(`effect @s regeneration 5 1`)
                                                break
                                            case "rift:enchanted_mixed_meat":
                                                entities[i].runCommand(`effect @s absorption 120 3`)
                                                entities[i].runCommand(`effect @s regeneration 30 1`)
                                                entities[i].runCommand(`effect @s fire_resistance 300`)
                                                entities[i].runCommand(`effect @s resistance 300`)
                                                break
                                            case "minecraft:enchanted_golden_apple":
                                                entities[i].runCommand(`effect @s absorption 120 3`)
                                                entities[i].runCommand(`effect @s regeneration 30 1`)
                                                entities[i].runCommand(`effect @s fire_resistance 300`)
                                                entities[i].runCommand(`effect @s resistance 300`)
                                                break
                                        }
                                    }
                                    catch (e) {}
                                    entities[i].runCommand(`event entity @s rift:start_eat_from_inventory_cooldown`)
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
        catch (e) {}
    }
})