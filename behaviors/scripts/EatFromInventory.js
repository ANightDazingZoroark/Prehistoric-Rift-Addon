import { EntityQueryOptions, world } from "mojang-minecraft"

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

const filters = new EntityQueryOptions()

world.events.tick.subscribe((ev) => {
    let entities = Array.from(world.getDimension('overworld').getEntities(filters))
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].getComponent('health').current < entities[i].getComponent('health').value && validMobs.includes(entities[i].id) ){ 
            for (let j = entities[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                try {
                    for (let k = 0; k < Object.keys(entities[i].getComponent('healable').items).length; k++) {
                        if (entities[i].getComponent('inventory').container.getItem(j).id == entities[i].getComponent('healable').items[k].item && entities[i].getComponent('inventory').container.getItem(j).amount > 1) {
                            entities[i].getComponent('health').setCurrent(entities[i].getComponent('health').current + entities[i].getComponent('healable').items[k].healAmount)
                            entities[i].runCommand(`replaceitem entity @s slot.inventory `+j+` `+entities[i].getComponent('healable').items[k].item+` `+(entities[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                        }
                        else if (entities[i].getComponent('inventory').container.getItem(j).id == entities[i].getComponent('healable').items[k].item && entities[i].getComponent('inventory').container.getItem(j).amount == 1) {
                            entities[i].getComponent('health').setCurrent(entities[i].getComponent('health').current + entities[i].getComponent('healable').items[k].healAmount)
                            entities[i].runCommand(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
                        }
                    }
                    break
                }
                catch (e) {}
            }
        }
    }
})