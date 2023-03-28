import { MinecraftEffectTypes, world } from "@minecraft/server"
import { clearEntity } from "./externals/itemmanagement"

world.events.beforeDataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.id == 'rift:eat_from_inventory') {
        for (let j = data.entity.getComponent('inventory').inventorySize - 1; j >= 0; j--) {
            try {
                if (data.entity.getComponent('healable').items.map(x => x.item).includes(data.entity.getComponent('inventory').container.getItem(j).typeId)) {
                    try {
                        for (let k = 0; k < Object.keys(data.entity.getComponent('healable').items).length; k++) {
                            if (data.entity.getComponent('inventory').container.getItem(j).typeId == data.entity.getComponent('healable').items[k].item && data.entity.getComponent('inventory').container.getItem(j).amount > 1) {
                                data.entity.getComponent('health').setCurrent(data.entity.getComponent('health').current + data.entity.getComponent('healable').items[k].healAmount)
                                data.entity.runCommandAsync(`replaceitem entity @s slot.inventory `+j+` `+data.entity.getComponent('healable').items[k].item+` `+(data.entity.getComponent('inventory').container.getItem(j).amount-1).toString()+` 0`)
                            }
                            else if (data.entity.getComponent('inventory').container.getItem(j).typeId == data.entity.getComponent('healable').items[k].item && data.entity.getComponent('inventory').container.getItem(j).amount == 1) {
                                data.entity.getComponent('health').setCurrent(data.entity.getComponent('health').current + data.entity.getComponent('healable').items[k].healAmount)
                                data.entity.runCommandAsync(`replaceitem entity @s slot.inventory `+j+` air 1 0`)
                            }
                            try {
                                switch (data.entity.getComponent('inventory').container.getItem(j).typeId) {
                                    case "rift:cooked_dodo_meat":
                                        data.entity.addEffect(MinecraftEffectTypes.absorption, 600, 3)
                                        break
                                    case "rift:cooked_hadrosaur_meat":
                                        data.entity.addEffect(MinecraftEffectTypes.resistance, 1200, 3)
                                        break
                                    case "rift:mixed_meat":
                                        data.entity.addEffect(MinecraftEffectTypes.absorption, 2400)
                                        data.entity.addEffect(MinecraftEffectTypes.regeneration, 100, 1)
                                        break
                                    case "minecraft:golden_apple":
                                        data.entity.addEffect(MinecraftEffectTypes.absorption, 2400)
                                        data.entity.addEffect(MinecraftEffectTypes.regeneration, 100, 1)
                                        break
                                    case "rift:enchanted_mixed_meat":
                                        data.entity.addEffect(MinecraftEffectTypes.absorption, 2400, 3)
                                        data.entity.addEffect(MinecraftEffectTypes.regeneration, 600, 1)
                                        data.entity.addEffect(MinecraftEffectTypes.fire_resistance, 6000)
                                        data.entity.addEffect(MinecraftEffectTypes.resistance, 6000)
                                        break
                                    case "minecraft:enchanted_golden_apple":
                                        data.entity.addEffect(MinecraftEffectTypes.absorption, 2400, 3)
                                        data.entity.addEffect(MinecraftEffectTypes.regeneration, 600, 1)
                                        data.entity.addEffect(MinecraftEffectTypes.fire_resistance, 6000)
                                        data.entity.addEffect(MinecraftEffectTypes.resistance, 6000)
                                        break
                                }
                            }
                            catch (e) {}
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
})