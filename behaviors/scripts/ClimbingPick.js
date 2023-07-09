import { world } from "@minecraft/server"

world.afterEvents.dataDrivenEntityTriggerEvent.subscribe((ev) => {
    const itemStack = ev.entity.getComponent('equipment_inventory').getEquipment('mainhand')
    if (ev.id == 'rift:reduce_climbing_pick_durability' && itemStack.typeId == 'rift:climbing_pick') {
        const durability = itemStack.getComponent('durability')
        durability.damage += 1
        if (durability.damage < durability.maxDurability) {
            ev.entity.runCommandAsync('replaceitem entity @s[hasitem={item=rift:climbing_pick, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 rift:climbing_pick 1 '+durability.damage)
        }
        else {
            ev.entity.getComponent('equipment_inventory').setEquipment('mainhand')
            world.playSound('random.break', ev.entity.location)
        }
    }
})