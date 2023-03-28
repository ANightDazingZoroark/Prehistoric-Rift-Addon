import { Items, ItemStack, system,world } from "@minecraft/server"
import * as guiCrafting from "./ApatosaurusCraftingOptions"
import { clearEntity } from "./externals/itemmanagement"

system.run(function everyTick(tick) {
    system.run(everyTick)
    let apatosaurus = Array.from(world.getDimension('overworld').getEntities({
        type: 'rift:apatosaurus',
        tags: ['tamed', 'hasFurnace', 'smelting']
    }))
    for (let i = 0; i < apatosaurus.length; i++) {
        try {
            apatosaurus[i].fuelStackAmount = 0
            for (let l = apatosaurus[i].getComponent('inventory').inventorySize - 1; l >= 0; l--) {
                try {
                    for (let m = 0; m < guiCrafting.apatosaurusFuel.length; m++) {
                        try {
                            if (guiCrafting.apatosaurusFuel[m].itemId == apatosaurus[i].getComponent('inventory').container.getItem(l).typeId && (guiCrafting.apatosaurusFuel[m].itemData == -1 ? true : guiCrafting.apatosaurusFuel[m].itemData == apatosaurus[i].getComponent('inventory').container.getItem(l).data)) {
                                apatosaurus[i].fuelStackAmount++
                                break
                            }
                        }
                        catch (e) {}
                    }
                }
                catch (e) {}
            }

            if (apatosaurus[i].fuelStackAmount > 0) {
                apatosaurus[i].triggerEvent('rift:start_smelting')
                apatosaurus[i].addTag('canSmelt')
            }
            else {
                apatosaurus[i].triggerEvent('rift:stop_smelting')
                apatosaurus[i].removeTag('canSmelt')
            }

            if (apatosaurus[i].hasOwnProperty('smeltedAmount') && apatosaurus[i].hasTag('canSmelt') && apatosaurus[i].hasTag('startSmelt')) {
                for (let j = apatosaurus[i].getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                    for (let k = 0; k < guiCrafting.apatosaurusSmeltables.length; k++) {
                        try {
                            if (guiCrafting.apatosaurusSmeltables[k].itemId == apatosaurus[i].getComponent('inventory').container.getItem(j).typeId && (guiCrafting.apatosaurusSmeltables[k].itemData == -1 ? true : guiCrafting.apatosaurusSmeltables[k].itemData == apatosaurus[i].getComponent('inventory').container.getItem(j).data)) {
                                apatosaurus[i].getComponent('inventory').container.addItem(new ItemStack(Items.get(guiCrafting.apatosaurusSmeltables[k].outputId), 1, guiCrafting.apatosaurusSmeltables[k].outputData))
                                clearEntity(apatosaurus[i], apatosaurus[i].getComponent('inventory').container.getItem(j).typeId, apatosaurus[i].getComponent('inventory').container.getItem(j).data, 1)
                                if (apatosaurus[i].hasOwnProperty('smeltedAmount')) {
                                    apatosaurus[i].smeltedAmount += 1
                                }
                                else {
                                    apatosaurus[i].smeltedAmount = 1
                                }
                                outer: for (let n = apatosaurus[i].getComponent('inventory').inventorySize - 1; n >= 0; n--) {
                                    try {
                                        for (let m = 0; m < guiCrafting.apatosaurusFuel.length; m++) {
                                            if (guiCrafting.apatosaurusFuel[m].itemId == apatosaurus[i].getComponent('inventory').container.getItem(n).typeId && (guiCrafting.apatosaurusFuel[m].itemData == -1 ? true : guiCrafting.apatosaurusFuel[m].itemData == apatosaurus[i].getComponent('inventory').container.getItem(n).data)) {
                                                if (apatosaurus[i].smeltedAmount % guiCrafting.apatosaurusFuel[m].burnAmount == 0) {
                                                    clearEntity(apatosaurus[i], guiCrafting.apatosaurusFuel[m].itemId, guiCrafting.apatosaurusFuel[m].data, 1)
                                                }
                                                apatosaurus[i].removeTag('startSmelt')
                                                break outer
                                            }
                                        }
                                    }
                                    catch (e) {}
                                }
                            }
                        }
                        catch (e) {}
                    }
                }
            }
            else if (!apatosaurus[i].hasOwnProperty('smeltedAmount') && apatosaurus[i].hasTag('canSmelt') && apatosaurus[i].hasTag('startSmelt')) {
                apatosaurus[i].smeltedAmount = 0
            }
        }
        catch (e) {}
    }
})