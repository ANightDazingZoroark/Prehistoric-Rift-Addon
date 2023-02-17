import { Items, ItemStack, world } from "@minecraft/server"
import * as guiCrafting from "./ApatosaurusCraftingOptions"
import { clearEntity } from "./externals/itemmanagement"

world.events.beforeDataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.id == 'rift:finish_smelt') {
        data.entity.fuelStackAmount = 0
        for (let l = data.entity.getComponent('inventory').inventorySize - 1; l >= 0; l--) {
            try {
                for (let m = 0; m < guiCrafting.apatosaurusFuel.length; m++) {
                    try {
                        if (guiCrafting.apatosaurusFuel[m].itemId == data.entity.getComponent('inventory').container.getItem(l).typeId && (guiCrafting.apatosaurusFuel[m].itemData == -1 ? true : guiCrafting.apatosaurusFuel[m].itemData == data.entity.getComponent('inventory').container.getItem(l).data)) {
                            data.entity.fuelStackAmount++
                            break
                        }
                    }
                    catch (e) {}
                }
            }
            catch (e) {}
        }
        if (data.entity.fuelStackAmount > 0) {
            if (data.entity.hasOwnProperty('smeltedAmount')) {
                for (let j = data.entity.getComponent('inventory').inventorySize - 1; j >= 0; j--) {
                    for (let k = 0; k < guiCrafting.apatosaurusSmeltables.length; k++) {
                        try {
                            if (guiCrafting.apatosaurusSmeltables[k].itemId == data.entity.getComponent('inventory').container.getItem(j).typeId && (guiCrafting.apatosaurusSmeltables[k].itemData == -1 ? true : guiCrafting.apatosaurusSmeltables[k].itemData == data.entity.getComponent('inventory').container.getItem(j).data)) {
                                data.entity.getComponent('inventory').container.addItem(new ItemStack(Items.get(guiCrafting.apatosaurusSmeltables[k].outputId), 1, guiCrafting.apatosaurusSmeltables[k].outputData))
                                clearEntity(data.entity, data.entity.getComponent('inventory').container.getItem(j).typeId, data.entity.getComponent('inventory').container.getItem(j).data, 1)
                                if (data.entity.hasOwnProperty('smeltedAmount')) {
                                    data.entity.smeltedAmount += 1
                                }
                                else {
                                    data.entity.smeltedAmount = 1
                                }
                                outer: for (let n = data.entity.getComponent('inventory').inventorySize - 1; n >= 0; n--) {
                                    try {
                                        for (let m = 0; m < guiCrafting.apatosaurusFuel.length; m++) {
                                            if (guiCrafting.apatosaurusFuel[m].itemId == data.entity.getComponent('inventory').container.getItem(n).typeId && (guiCrafting.apatosaurusFuel[m].itemData == -1 ? true : guiCrafting.apatosaurusFuel[m].itemData == data.entity.getComponent('inventory').container.getItem(n).data)) {
                                                if (data.entity.smeltedAmount % guiCrafting.apatosaurusFuel[m].burnAmount == 0) {
                                                    clearEntity(data.entity, guiCrafting.apatosaurusFuel[m].itemId, guiCrafting.apatosaurusFuel[m].data, 1)
                                                }
                                                data.entity.removeTag('startSmelt')
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
            else if (!data.entity.hasOwnProperty('smeltedAmount')) {
                data.entity.smeltedAmount = 0
            }
        }
    }
})