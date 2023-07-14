import { system, EffectTypes, ItemStack, ItemTypes, world } from "@minecraft/server"

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

    if (ev.id == 'rift:reduce_tenontosaurus_charmer_durability') {
        try {
            const mainHand = ev.entity.getComponent('equipment_inventory').getEquipment('mainhand')
            const durability = mainHand.getComponent('durability')
            durability.damage += 1
            if (durability.damage < durability.maxDurability) {
                ev.entity.runCommandAsync('replaceitem entity @s[hasitem={item=rift:tenontosaurus_charmer, location=slot.weapon.mainhand}] slot.weapon.mainhand 0 rift:tenontosaurus_charmer 1 '+durability.damage)
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
                ev.entity.runCommandAsync('replaceitem entity @s[hasitem={item=rift:tenontosaurus_charmer, location=slot.weapon.offhand}] slot.weapon.offhand 0 rift:tenontosaurus_charmer 1 '+durability.damage)
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
    const attackingProjectile = ev.damageSource.damagingProjectile

    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:ankylosaurus_mace') {
        attacked.applyKnockback(attacker.getViewDirection().x, attacker.getViewDirection().z, 3, 0.25)
    }
    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:anomalocaris_dagger') {
        attacker.getComponent('health').setCurrentValue(attacker.getComponent('health').currentValue + 3)
    }
    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:triceratops_spear' && triceratopsSpearVul.includes(attacked.typeId)) {
        attacked.applyDamage(7)
    }
    if (attacker.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:baryonyx_dagger') {
        attacked.addEffect(EffectTypes.get("poison"), 200)
    }
    if (attackingProjectile.typeId == 'rift:thrown_triceratops_spear' && triceratopsSpearVul.includes(attacked.typeId)) {
        attacked.applyDamage(7)
        let remDurability = parseInt(ev.entity.getTags()[0].split('')[1])
        if (remDurability >= 800) {
            attackingProjectile.runCommandAsync('playsound random.break @a[r=3]')
            attackingProjectile.triggerEvent('rift:commit_disappear')
        }
    }
})

//for maintaining trike spear durability after throwing
world.afterEvents.itemReleaseUse.subscribe((ev) => {
    ev.itemStack.getComponent('durability').damage += 1
    ev.source.runCommandAsync('tag @e[type=rift:thrown_triceratops_spear, c=1] add '+'s'+ev.itemStack.getComponent('durability').damage)
})

world.afterEvents.dataDrivenEntityTriggerEvent.subscribe((ev) => {
    if (ev.id == 'rift:give') {
        let spear = new ItemStack(ItemTypes.get('rift:triceratops_spear'), 1)
        spear.getComponent('durability').damage += parseInt(ev.entity.getTags()[0].split('')[1])
        world.getDimension('overworld').spawnItem(spear, ev.entity.location)
        ev.entity.triggerEvent('rift:commit_disappear')
    }
})