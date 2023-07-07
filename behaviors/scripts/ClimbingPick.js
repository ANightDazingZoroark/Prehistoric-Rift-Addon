import { world } from "@minecraft/server"

world.afterEvents.dataDrivenEntityTriggerEvent.subscribe(({ id, entity }) => {
    if (id === 'rift:reduce_climbing_pick_durability') {
        const itemStack = entity.getComponent('equipment_inventory').getEquipment('mainhand')
        const durability = itemStack.getComponent('durability')
        console.warn(durability.damage)
    }
}, {
    eventTypes: [
        'rift:reduce_climbing_pick_durability'
    ]
})