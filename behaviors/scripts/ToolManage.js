import { system, ItemStack, ItemTypes, world } from "@minecraft/server"

let triceratopsSpearVul = [
    "rift:tyrannosaurus",
    "minecraft:ender_dragon",
    "minecraft:wither"
]

world.afterEvents.dataDrivenEntityTriggerEvent.subscribe((ev) => {
    if (ev.id == 'rift:reduce_climbing_pick_durability') {
        const mainHand = ev.entity.getComponent('equipment_inventory').getEquipment('mainhand')
        const durability = mainHand.getComponent('durability')
        durability.damage += 1
        if (durability.damage < durability.maxDurability) {
            ev.entity.runCommandAsync('replaceitem entity @s[hasitem={item=rift:climbing_pick, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 rift:climbing_pick 1 '+durability.damage)
        }
        else {
            ev.entity.getComponent('equipment_inventory').setEquipment('mainhand')
            ev.entity.runCommandAsync('playsound random.break @a[r=3]')
        }
    }
    
    if (ev.id == 'rift:reduce_triceratops_shield_durability') {
        try {
            const mainHand = ev.entity.getComponent('equipment_inventory').getEquipment('mainhand')
            const durability = mainHand.getComponent('durability')
            durability.damage += 1
            if (durability.damage < durability.maxDurability) {
                ev.entity.runCommandAsync('replaceitem entity @s[hasitem={item=rift:triceratops_shield, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 rift:triceratops_shield 1 '+durability.damage)
                // ev.entity.runCommandAsync('playsound item.shield.block @a[r=3]')
                world.playSound('item.shield.block', ev.entity.location)
            }
            else {
                ev.entity.getComponent('equipment_inventory').setEquipment('mainhand')
                ev.entity.runCommandAsync('playsound random.break @a[r=3]')
            }
        }
        catch (e) {}

        try {
            const offHand = ev.entity.getComponent('equipment_inventory').getEquipment('offHand')
            const durability = offHand.getComponent('durability')
            durability.damage += 1
            if (durability.damage < durability.maxDurability) {
                ev.entity.runCommandAsync('replaceitem entity @s[hasitem={item=rift:triceratops_shield, location=slot.weapon.offhand}] slot.weapon.offhand 0 rift:triceratops_shield 1 '+durability.damage)
                ev.entity.runCommandAsync('playsound item.shield.block @e[r=3]')
            }
            else {
                ev.entity.getComponent('equipment_inventory').setEquipment('offHand')
                ev.entity.runCommandAsync('playsound random.break @a[r=3]')
            }
        }
        catch (e) {}
    }
})

world.afterEvents.entityHurt.subscribe((ev) => {
    const attacker = ev.damageSource.damagingEntity
    const attacked = ev.hurtEntity
    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:ankylosaurus_mace') {
        attacked.applyKnockback(attacker.getViewDirection().x, attacker.getViewDirection().z, 3, 0.25)
    }
    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:anomalocaris_dagger') {
        attacker.getComponent('health').setCurrentValue(attacker.getComponent('health').currentValue + 3)
    }
    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:triceratops_spear' && triceratopsSpearVul.includes(attacked.typeId)) {
        attacked.applyDamage(7)
    }
})

world.afterEvents.itemReleaseUse.subscribe((ev) => {
    ev.itemStack.getComponent('durability').damage += 1
})