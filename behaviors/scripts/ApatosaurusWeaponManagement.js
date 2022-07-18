import { EntityQueryOptions, world } from "mojang-minecraft"

let apatosaurusFilter = new EntityQueryOptions()
apatosaurusFilter.type = 'rift:apatosaurus'

world.events.tick.subscribe((ev) => {
    let apatosaurus = Array.from(world.getDimension('overworld').getEntities(apatosaurusFilter))
    for (let i = 0; i < apatosaurus.length; i++) {
        if (apatosaurus[i].hasTag('apatoUseBackWeapon') && apatosaurus[i].getComponent('skin_id').value == 1) {
            try {
                if (apatosaurus[i].runCommand(`testfor @s[hasitem={item=rift:cannonball}]`)) {
                    for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                        try {
                            if (apatosaurus[i].getComponent('inventory').container.getItem(j).id == 'rift:cannonball') {
                                apatosaurus[i].runCommand(`event entity @s rift:apato_firing`)
                                if (apatosaurus[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    apatosaurus[i].runCommand(`replaceitem entity @s slot.inventory `+j+` `+apatosaurus[i].getComponent('inventory').container.getItem(j).id+` `+(apatosaurus[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else {
                                    apatosaurus[i].runCommand(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
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
                apatosaurus[i].runCommand(`tellraw @p {\"rawtext\":[{\"text\":\"No cannonballs left in stock!\"}]}`)
            }
            apatosaurus[i].removeTag('apatoUseBackWeapon')
        }
        if (apatosaurus[i].hasTag('apatoUseBackWeapon') && apatosaurus[i].getComponent('skin_id').value == 2) {
            try {
                if (apatosaurus[i].runCommand(`testfor @s[hasitem={item=rift:mortar_shell}]`)) {
                    for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                        try {
                            if (apatosaurus[i].getComponent('inventory').container.getItem(j).id == 'rift:mortar_shell') {
                                apatosaurus[i].runCommand(`event entity @s rift:apato_mortaring_not_underground`)
                                if (apatosaurus[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    apatosaurus[i].runCommand(`replaceitem entity @s slot.inventory `+j+` `+apatosaurus[i].getComponent('inventory').container.getItem(j).id+` `+(apatosaurus[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else {
                                    apatosaurus[i].runCommand(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
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
                apatosaurus[i].runCommand(`tellraw @p {\"rawtext\":[{\"text\":\"No mortar shells left in stock!\"}]}`)
            }
            apatosaurus[i].removeTag('apatoUseBackWeapon')
        }
        if (apatosaurus[i].hasTag('apatoUseBackWeapon') && apatosaurus[i].getComponent('skin_id').value == 3) {
            try {
                if (apatosaurus[i].runCommand(`testfor @s[hasitem={item=rift:catapult_boulder}]`)) {
                    for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                        try {
                            if (apatosaurus[i].getComponent('inventory').container.getItem(j).id == 'rift:catapult_boulder') {
                                apatosaurus[i].runCommand(`event entity @s rift:apato_play_catapult_anim`)
                                if (apatosaurus[i].getComponent('inventory').container.getItem(j).amount > 1) {
                                    apatosaurus[i].runCommand(`replaceitem entity @s slot.inventory `+j+` `+apatosaurus[i].getComponent('inventory').container.getItem(j).id+` `+(apatosaurus[i].getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                                }
                                else {
                                    apatosaurus[i].runCommand(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
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
                apatosaurus[i].runCommand(`tellraw @p {\"rawtext\":[{\"text\":\"No catapult boulders left in stock!\"}]}`)
            }
            apatosaurus[i].removeTag('apatoUseBackWeapon')
        }
    }
})