import { system, world } from "@minecraft/server"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let apatosaurus = Array.from(world.getDimension('overworld').getEntities({
        type: 'rift:apatosaurus'
    }))
    for (let i = 0; i < apatosaurus.length; i++) {
        if (apatosaurus[i].hasTag('apatoUseBackWeapon') && apatosaurus[i].getComponent('skin_id').value == 1) {
            try {
                if (apatosaurus[i].runCommandAsync(`testfor @s[hasitem={item=rift:cannonball}]`)) {
                    for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                        try {
                            if (apatosaurus[i].getComponent('inventory').container.getItem(j).typeId == 'rift:cannonball') {
                                apatosaurus[i].triggerEvent('rift:apato_firing')
                                if (apatosaurus[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    apatosaurus[i].runCommandAsync(`replaceitem entity @s slot.inventory `+j+` `+apatosaurus[i].getComponent('inventory').container.getItem(j).typeId+` `+(apatosaurus[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else {
                                    apatosaurus[i].runCommandAsync(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
                                }
                                break
                            }
                            else {
                                continue
                            }
                        }
                        catch (e) {
                            continue
                        }
                    }
                }
            }
            catch (e) {
                apatosaurus[i].runCommandAsync(`tellraw @p {\"rawtext\":[{\"text\":\"No cannonballs left in stock!\"}]}`)
            }
            apatosaurus[i].removeTag('apatoUseBackWeapon')
        }
        if (apatosaurus[i].hasTag('apatoUseBackWeapon') && apatosaurus[i].getComponent('skin_id').value == 2) {
            try {
                if (apatosaurus[i].runCommandAsync(`testfor @s[hasitem={item=rift:mortar_shell}]`)) {
                    for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                        try {
                            if (apatosaurus[i].getComponent('inventory').container.getItem(j).typeId == 'rift:mortar_shell') {
                                apatosaurus[i].triggerEvent('rift:apato_mortaring_not_underground')
                                if (apatosaurus[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    apatosaurus[i].runCommandAsync(`replaceitem entity @s slot.inventory `+j+` `+apatosaurus[i].getComponent('inventory').container.getItem(j).typeId+` `+(apatosaurus[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else {
                                    apatosaurus[i].runCommandAsync(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
                                }
                                break
                            }
                            else {
                                continue
                            }
                        }
                        catch (e) {
                            continue
                        }
                    }
                }
            }
            catch (e) {
                apatosaurus[i].runCommandAsync(`tellraw @p {\"rawtext\":[{\"text\":\"No mortar shells left in stock!\"}]}`)
            }
            apatosaurus[i].removeTag('apatoUseBackWeapon')
        }
        if (apatosaurus[i].hasTag('apatoUseBackWeapon') && apatosaurus[i].getComponent('skin_id').value == 3) {
            try {
                if (apatosaurus[i].runCommandAsync(`testfor @s[hasitem={item=rift:catapult_boulder}]`)) {
                    for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                        try {
                            if (apatosaurus[i].getComponent('inventory').container.getItem(j).typeId == 'rift:catapult_boulder') {
                                apatosaurus[i].triggerEvent('rift:apato_play_catapult_anim')
                                if (apatosaurus[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    apatosaurus[i].runCommandAsync(`replaceitem entity @s slot.inventory `+j+` `+apatosaurus[i].getComponent('inventory').container.getItem(j).typeId+` `+(apatosaurus[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else {
                                    apatosaurus[i].runCommandAsync(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
                                }
                                break
                            }
                            else {
                                continue
                            }
                        }
                        catch (e) {
                            continue
                        }
                    }
                }
            }
            catch (e) {
                apatosaurus[i].runCommandAsync(`tellraw @p {\"rawtext\":[{\"text\":\"No catapult boulders left in stock!\"}]}`)
            }
            apatosaurus[i].removeTag('apatoUseBackWeapon')
        }
    }
})