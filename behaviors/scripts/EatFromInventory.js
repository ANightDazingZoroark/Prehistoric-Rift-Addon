import { system, EffectTypes, world } from "@minecraft/server"
import { clearEntity } from "./externals/itemmanagement"

let fiberBarEaters = [
    'rift:ankylosaurus',
    'rift:apatosaurus',
    'rift:direbear',
    'rift:gallimimus',
    'rift:megaloceros',
    'rift:parasaurolophus',
    'rift:stegosaurus',
    'rift:tenontosaurus',
    'rift:triceratops'
]

let fibrousMeatEaters = [
    'rift:anomalocaris',
    'rift:baryonyx',
    'rift:dilophosaurus',
    'rift:direbear',
    'rift:direwolf',
    'rift:sarcosuchus',
    'rift:saurophaganax',
    'rift:tyrannosaurus',
    'rift:utahraptor'
]

world.afterEvents.dataDrivenEntityTriggerEvent.subscribe(data => {
    if (data.id == 'rift:eat_from_inventory') {
        for (let j = data.entity.getComponent('inventory').inventorySize - 1; j >= 0; j--) {
            try {
                if (data.entity.getComponent('healable').getFeedItems().map(x => x.item).includes(data.entity.getComponent('inventory').container.getItem(j).typeId)) {
                    try {
                        for (let k = 0; k < Object.keys(data.entity.getComponent('healable').getFeedItems()).length; k++) {
                            data.entity.getComponent('health').setCurrent(data.entity.getComponent('health').current + data.entity.getComponent('healable').getFeedItems()[k].healAmount)
                            clearEntity(data.entity, data.entity.getComponent('healable').getFeedItems()[k].item, 0, 1)
                            try {
                                switch (data.entity.getComponent('inventory').container.getItem(j).typeId) {
                                    case "rift:cooked_dodo_meat":
                                        data.entity.addEffect(EffectTypes.get("absorption"), 600, { amplifier: 3 })
                                        break
                                    case "rift:cooked_hadrosaur_meat":
                                        data.entity.addEffect(EffectTypes.get("resistance"), 1200, { amplifier: 3 })
                                        break
                                    case "rift:mixed_meat":
                                        data.entity.addEffect(EffectTypes.get("absorption"), 2400)
                                        data.entity.addEffect(EffectTypes.get("regeneration"), 100, { amplifier: 1 })
                                        break
                                    case "minecraft:golden_apple":
                                        data.entity.addEffect(EffectTypes.get("absorption"), 2400)
                                        data.entity.addEffect(EffectTypes.get("regeneration"), 100, { amplifier: 1 })
                                        break
                                    case "rift:enchanted_mixed_meat":
                                        data.entity.addEffect(EffectTypes.get("absorption"), 2400, { amplifier: 3 })
                                        data.entity.addEffect(EffectTypes.get("regeneration"), 600, 1)
                                        data.entity.addEffect(EffectTypes.get("fire_resistance"), 6000)
                                        data.entity.addEffect(EffectTypes.get("resistance"), 6000)
                                        break
                                    case "minecraft:enchanted_golden_apple":
                                        data.entity.addEffect(EffectTypes.get("absorption"), 2400, { amplifier: 3 })
                                        data.entity.addEffect(EffectTypes.get("regeneration"), 600, { amplifier: 1 })
                                        data.entity.addEffect(EffectTypes.get("fire_resistance"), 6000)
                                        data.entity.addEffect(EffectTypes.get("resistance"), 6000)
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
    if (data.id == 'rift:refill_energy_from_inventory') {
        for (let j = data.entity.getComponent('inventory').inventorySize - 1; j >= 0; j--) {
            try {
                if (fiberBarEaters.includes(data.entity.typeId) && data.entity.getComponent('inventory').container.getItem(j).typeId == 'rift:fiber_bar') {
                    data.entity.triggerEvent('rift:regenerate_energy_from_food')
                    clearEntity(data.entity, 'rift:fiber_bar', 0, 1)
                }
            }
            catch (e) {}

            try {
                if (fibrousMeatEaters.includes(data.entity.typeId) && data.entity.getComponent('inventory').container.getItem(j).typeId == 'rift:raw_fibrous_meat') {
                    data.entity.triggerEvent('rift:regenerate_energy_from_raw_food')
                    clearEntity(data.entity, 'rift:raw_fibrous_meat', 0, 1)
                }
            }
            catch (e) {}

            try {
                if (fibrousMeatEaters.includes(data.entity.typeId) && data.entity.getComponent('inventory').container.getItem(j).typeId == 'rift:cooked_fibrous_meat') {
                    data.entity.triggerEvent('rift:regenerate_energy_from_cooked_food')
                    clearEntity(data.entity, 'rift:cooked_fibrous_meat', 0, 1)
                }
            }
            catch (e) {}
        }
    }
})