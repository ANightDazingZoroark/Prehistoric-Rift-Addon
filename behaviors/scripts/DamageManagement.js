import { ItemTypes, ItemStack, world, MinecraftEffectTypes } from "@minecraft/server"
import { clearTimeout, setTimeout } from "./externals/timers"

let saurophaganaxFood = [
    'minecraft:blaze',
    'minecraft:creeper',
    'minecraft:drowned',
    'minecraft:elder_guardian',
    'minecraft:endermite',
    'minecraft:ghast',
    'minecraft:guardian',
    'minecraft:husk',
    'minecraft:magma_cube',
    'minecraft:phantom',
    'minecraft:shulker',
    'minecraft:silverfish',
    'minecraft:skeleton',
    'minecraft:slime',
    'minecraft:stray',
    'minecraft:vex',
    'minecraft:wither_skeleton',
    'minecraft:zoglin',
    'minecraft:zombie',
    'minecraft:zombie_villager',
    'minecraft:bee',
    'minecraft:cave_spider',
    'minecraft:enderman',
    'minecraft:spider',
    'minecraft:zombie_pigman',
    'minecraft:skeleton_horse',
    'minecraft:zombie_horse',
    'rift:anomalocaris'
]

let exoticMeatDroppers = [
    'rift:tyrannosaurus',
    'rift:stegosaurus',
    'rift:triceratops',
    'rift:sarcosuchus',
    'rift:saurophaganax',
    'rift:direwolf',
    'rift:baryonyx',
    'rift:ankylosaurus',
    'rift:dilophosaurus',
    'rift:coelophysis',
    'rift:direbear'
]

let fibrousMeatDroppers = [
    'rift:utahraptor',
    'rift:megaloceros',
    'rift:gallimimus',
    'rift:pteranodon'
]

let affectedByBola = [
    'rift:baryonyx',
    'rift:coelophysis',
    'rift:dilophosaurus',
    'rift:dimetrodon',
    'rift:direbear',
    // 'rift:direwolf', //direwolves in werewolf mode are immune to bolas but are affected otherwise, hence this being a comment
    'rift:dodo',
    'rift:gallimimus',
    'rift:megaloceros',
    'rift:palaeocastor',
    'rift:parasaurolophus',
    'rift:pteranodon',
    'rift:sarcosuchus',
    'rift:tenontosaurus',
    'rift:utahraptor',

    'rift:cavern_utahraptor',
    'rift:cavern_dilophosaurus',

    'minecraft:player',
    'minecraft:axolotl',
    'minecraft:bat',
    'minecraft:bee',
    'minecraft:blaze',
    'minecraft:cat',
    'minecraft:cave_spider',
    'minecraft:chicken',
    'minecraft:cow',
    'minecraft:creeper',
    'minecraft:dolphin',
    'minecraft:donkey',
    'minecraft:drowned',
    'minecraft:endermite',
    'minecraft:evocation_illager',
    'minecraft:fish',
    'minecraft:fox',
    'minecraft:frog',
    'minecraft:ghast',
    'minecraft:glow_squid',
    'minecraft:goat',
    'minecraft:guardian',
    'minecraft:hoglin',
    'minecraft:horse',
    'minecraft:husk',
    'minecraft:llama',
    'minecraft:mooshroom',
    'minecraft:mule',
    'minecraft:ocelot',
    'minecraft:panda',
    'minecraft:parrot',
    'minecraft:phantom',
    'minecraft:pig',
    'minecraft:piglin_brute',
    'minecraft:piglin',
    'minecraft:pillager',
    'minecraft:polar_bear',
    'minecraft:pufferfish',
    'minecraft:rabbit',
    'minecraft:salmon',
    'minecraft:sheep',
    'minecraft:silverfish',
    'minecraft:skeleton_horse',
    'minecraft:skeleton',
    'minecraft:spider',
    'minecraft:squid',
    'minecraft:stray',
    'minecraft:strider',
    'minecraft:tadpole',
    'minecraft:trader_llama',
    'minecraft:tropicalfish',
    'minecraft:turtle',
    'minecraft:villager',
    'minecraft:villager_v2',
    'minecraft:vindicator',
    'minecraft:wandering_trader',
    'minecraft:witch',
    'minecraft:wither_skeleton',
    'minecraft:wolf',
    'minecraft:zoglin',
    'minecraft:zombie_horse',
    'minecraft:zombie_pigman',
    'minecraft:zombie_villager',
    'minecraft:zombie_villager_v2',
    'minecraft:zombie'
]

function getPlaceCoords(entity) {
    return entity.x.toString()+' '+entity.y.toString()+' '+entity.z.toString()
}

world.afterEvents.entityHurt.subscribe((event) => {
    if ((event.damageSource.damagingEntity.typeId == 'minecraft:player' || event.damageSource.damagingEntity.hasTag('tamed')) && event.hurtEntity.typeId == 'minecraft:cod' && event.hurtEntity.getComponent('health').current <= 0) {
        world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/fish"')
    }
    if ((event.damageSource.damagingEntity.typeId == 'minecraft:player' || event.damageSource.damagingEntity.hasTag('tamed')) && event.hurtEntity.typeId == 'minecraft:salmon' && event.hurtEntity.getComponent('health').current <= 0) {
        switch (event.damageSource.damagingEntity.getComponent('variant').value) {
            case 0:
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/salmon_normal"')
                break
            case 1:
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/salmon_normal"')
                break
            case 2:
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/salmon_large"')
                break
        }
    }
    if ((event.damageSource.damagingEntity.typeId == 'minecraft:player' || event.damageSource.damagingEntity.hasTag('tamed')) && event.hurtEntity.typeId == 'minecraft:tropicalfish' && event.hurtEntity.getComponent('health').current <= 0) {
        world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/tropicalfish"')
    }
    if ((event.damageSource.damagingEntity.typeId == 'minecraft:player' || event.damageSource.damagingEntity.hasTag('tamed')) && event.hurtEntity.typeId == 'minecraft:pufferfish' && event.hurtEntity.getComponent('health').current <= 0) {
        world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/pufferfish"')
    }
    if ((event.damageSource.damagingEntity.typeId == 'minecraft:player' || event.damageSource.damagingEntity.hasTag('tamed')) && event.hurtEntity.typeId == 'rift:coelacanth' && event.hurtEntity.getComponent('health').current <= 0) {
        world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/coelacanth.loot"')
    }
    if ((event.damageSource.damagingEntity.typeId == 'minecraft:player' || event.damageSource.damagingEntity.hasTag('tamed')) && event.hurtEntity.typeId == 'rift:megapiranha' && event.hurtEntity.getComponent('health').current <= 0) {
        world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(event.hurtEntity.location)+' loot "entities/megapiranha.loot"')
    }

    if (event.damageSource.damagingEntity.typeId == 'rift:tyrannosaurus' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 5), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 5), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 5), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 5), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 5), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:zombie':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:zombie_villager':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:husk':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:drowned':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:zombie_horse':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:zoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:zombie_pigman':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:utahraptor' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 3), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 3), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 3), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:dimetrodon' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 3), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 3), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 3), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:cod'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:salmon'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:tropical_fish'), 1), event.hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_megapiranha'), 1), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:sarcosuchus' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 1), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 1), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 1), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 1), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 1), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:cod'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:salmon'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:tropical_fish'), 3), event.hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_megapiranha'), 3), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:anomalocaris' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 1), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 1), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 1), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 1), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 1), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:cod'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:salmon'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:tropical_fish'), 3), event.hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_megapiranha'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:bee':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cave_spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:silverfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 3), event.hurtEntity.location)
                    break
                case 'rift:anomalocaris':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 3), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:saurophaganax' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        switch (event.hurtEntity.typeId) {
            case 'minecraft:zombie':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:zombie_villager':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:husk':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:drowned':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:zombie_horse':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:zoglin':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:zombie_pigman':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rotten_flesh'), 5), event.hurtEntity.location)
                break
            case 'minecraft:skeleton':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:bone'), 5), event.hurtEntity.location)
                break
            case 'minecraft:stray':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:bone'), 5), event.hurtEntity.location)
                break
            case 'minecraft:wither_skeleton':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:bone'), 5), event.hurtEntity.location)
                break
            case 'minecraft:skeleton_horse':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:bone'), 5), event.hurtEntity.location)
                break
            case 'minecraft:creeper':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:gunpowder'), 5), event.hurtEntity.location)
                break
            case 'minecraft:bee':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                break
            case 'minecraft:spider':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                break
            case 'minecraft:cave_spider':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                break
            case 'minecraft:silverfish':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                break
            case 'rift:anomalocaris':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                break
            case 'minecraft:slime':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:slime_ball'), 5), event.hurtEntity.location)
                break
            case 'minecraft:enderman':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:ender_pearl'), 5), event.hurtEntity.location)
                break
            case 'minecraft:phantom':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:phantom_membrane'), 5), event.hurtEntity.location)
                break
            case 'minecraft:ghast':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:ghast_tear'), 5), event.hurtEntity.location)
                break
            case 'minecraft:magma_cube':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:magma_cream'), 5), event.hurtEntity.location)
                break
            case 'minecraft:blaze':
                event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:blaze_powder'), 5), event.hurtEntity.location)
                break
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direwolf' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 3), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 3), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 3), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:baryonyx' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 3), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 3), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 3), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:cod'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:salmon'), 3), event.hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:tropical_fish'), 3), event.hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_megapiranha'), 3), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:dilophosaurus' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 1), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 1), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 1), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 1), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 1), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 1), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 1), event.hurtEntity.location)
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('tamed') && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_exotic_meat'), 5), event.hurtEntity.location)
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_fibrous_meat'), 5), event.hurtEntity.location)
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:porkchop'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:mutton'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:beef'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:chicken'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:rabbit'), 5), event.hurtEntity.location)
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_dodo_meat'), 5), event.hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 5), event.hurtEntity.location)
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hadrosaur_meat'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:cod'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:salmon'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('minecraft:tropical_fish'), 5), event.hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_megapiranha'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:bee':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:cave_spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                    break
                case 'minecraft:silverfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                    break
                case 'rift:anomalocaris':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:raw_hemolymph'), 5), event.hurtEntity.location)
                    break
            }
        }
    }

    if (event.damageSource.damagingEntity.typeId == 'rift:stegosaurus' && (event.damageSource.damagingEntity.hasTag('chargeOne') || event.damageSource.damagingEntity.hasTag('chargeTwo') || event.damageSource.damagingEntity.hasTag('chargeThree') || event.damageSource.damagingEntity.hasTag('chargeFour') || event.damageSource.damagingEntity.hasTag('chargeFive'))) {
        event.hurtEntity.triggerEvent('rift:stop_bleeding')
        event.hurtEntity.triggerEvent('rift:start_bleeding')
        event.damageSource.damagingEntity.removeTag('chargeOne')
        event.damageSource.damagingEntity.removeTag('chargeTwo')
        event.damageSource.damagingEntity.removeTag('chargeThree')
        event.damageSource.damagingEntity.removeTag('chargeFour')
        event.damageSource.damagingEntity.removeTag('chargeFive')
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:utahraptor' && event.damageSource.damagingEntity.hasTag('onGround') && Math.floor(Math.random() * 4) == 0) {
        event.hurtEntity.runCommandAsync(`ride @s evict_riders`)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:utahraptor' && !event.damageSource.damagingEntity.hasTag('ridden') && event.damageSource.damagingEntity.getComponent('is_tamed') && event.damageSource.damagingEntity.jumpAttacking > 10) {
        event.damageSource.damagingEntity.triggerEvent('rift:decrease_energy_while_jumping')
        event.damageSource.damagingEntity.jumpAttacking = 0
    }
    if (event.hurtEntity.typeId == 'rift:utahraptor' && !event.hurtEntity.hasTag('ridden') && event.hurtEntity.getComponent('is_tamed') && event.damageSource.damagingEntity.jumpAttacking > 10) {
        event.damageSource.damagingEntity.jumpAttacking = 0
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:dimetrodon' && event.damageSource.damagingEntity.getComponent('is_ignited')) {
        event.hurtEntity.setOnFire(5, true)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:dimetrodon' && event.damageSource.damagingEntity.getComponent('is_charged')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.weakness, 400, { amplifier: 2 })
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 400, { amplifier: 2 })
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:sarcosuchus' && event.damageSource.damagingEntity.hasTag('powered')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 600, { amplifier: 2 })
        console.warn('oof')
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:anomalocaris') {
        event.damageSource.damagingEntity.getComponent('health').setCurrent(event.damageSource.damagingEntity.getComponent('health').current + 4)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:saurophaganax' && !event.damageSource.damagingEntity.hasTag('roaring') && saurophaganaxFood.includes(event.hurtEntity.typeId) && event.hurtEntity.getComponent('health').current <= 0) {
        event.damageSource.damagingEntity.triggerEvent('rift:increase_light_blast_meter')
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direwolf' && event.damageSource.damagingEntity.hasTag('sonicBoom')) {
        event.hurtEntity.dimension.spawnEntity('rift:direwolf_explosion', event.hurtEntity.location)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direwolf' && event.damageSource.damagingEntity.hasTag('clawAttack')) {
        event.hurtEntity.triggerEvent('rift:stop_bleeding')
        event.hurtEntity.triggerEvent('rift:start_bleeding')
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:baryonyx' && (event.damageSource.damagingEntity.hasTag('forcedClaw') || event.damageSource.damagingEntity.getComponent('mark_variant').value == 1)) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:ankylosaurus' && !event.damageSource.damagingEntity.hasTag('sheared')) {
        event.hurtEntity.applyKnockback(event.damageSource.damagingEntity.getViewDirection().x, event.damageSource.damagingEntity.getViewDirection().z, 5, 0.25)
    }
    if ((event.damageSource.damagingEntity.typeId == 'rift:dilophosaurus' || event.damageSource.damagingEntity.typeId == 'rift:cavern_dilophosaurus') && event.damageSource.damagingEntity.hasTag('sheared')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
        event.hurtEntity.addEffect(MinecraftEffectTypes.blindness, 200)
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 200, { amplifier: 2 })
    }
    if (event.hurtEntity.typeId == 'rift:tenontosaurus' && event.hurtEntity.getComponent('is_tamed') && event.hurtEntity.hasTag('ridden')) {
        event.damageSource.damagingEntity.addTag('tenontoTamedTarget')
        event.hurtEntity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
        setTimeout(() => {
            event.damageSource.damagingEntity.removeTag('tenontoTamedTarget')
        }, 1000)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:tenontosaurus' && event.damageSource.damagingEntity.getComponent('is_tamed') && event.damageSource.damagingEntity.hasTag('ridden')) {
        event.hurtEntity.addTag('tenontoTamedTarget')
        event.damageSource.damagingEntity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
        setTimeout(() => {
            event.hurtEntity.removeTag('tenontoTamedTarget')
        }, 1000)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('stompMode')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 60, { amplifier: 255 })
        event.hurtEntity.addEffect(MinecraftEffectTypes.weakness, 60, { amplifier: 255 })
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear_stomp') {
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 60, { amplifier: 255 })
        event.hurtEntity.addEffect(MinecraftEffectTypes.weakness, 60, { amplifier: 255 })
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('clawMode')) {
        event.hurtEntity.triggerEvent('rift:stop_bleeding')
        event.hurtEntity.triggerEvent('rift:start_bleeding')
    }

    if (event.damageSource.damagingEntity.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:ankylosaurus_mace') {
        event.hurtEntity.applyKnockback(event.damageSource.damagingEntity.getViewDirection().x, event.damageSource.damagingEntity.getViewDirection().z, 3, 0.25)
    }
    if (event.damageSource.damagingEntity.getComponent('equipment_inventory').getEquipmentSlot('mainhand').typeId == 'rift:anomalocaris_dagger') {
        event.damageSource.damagingEntity.getComponent('health').setCurrent(event.damageSource.damagingEntity.getComponent('health').current + 3)
    }

    if (!event.hurtEntity.hasTag('inWater') && affectedByBola.includes(event.hurtEntity.typeId) && event.damageSource.damagingProjectile.typeId == 'rift:bola_projectile') {
        event.hurtEntity.triggerEvent('rift:stop_being_affected_by_bola')
        event.hurtEntity.triggerEvent('rift:affected_by_bola')
    }
    if (!event.hurtEntity.hasTag('inWater') && event.hurtEntity.typeId == 'rift:direwolf' && !event.hurtEntity.hasTag('ignited') && event.damageSource.damagingProjectile.typeId == 'rift:bola_projectile') {
        event.hurtEntity.triggerEvent('rift:stop_being_affected_by_bola')
        event.hurtEntity.triggerEvent('rift:affected_by_bola')
    }

    if (event.hurtEntity.typeId == 'rift:cavern_boss' && event.hurtEntity.getComponent('health').current <= 0) {
        event.hurtEntity.runCommandAsync("tag @a[r=16] add bossOutroMusic")
        event.hurtEntity.runCommandAsync("music play music.predator_cavern_boss_outro 1 0")
        setTimeout(() => {
            event.damageSource.damagingEntity.runCommandAsync('tag @a remove bossOutroMusic')
        }, 20000)
    }
})

// world.afterEvents.projectileHit.subscribe((event) => {
//     console.warn('yes')
//     if (event.projectile.typeId == 'rift:dilophosaurus_spit') {
//         event.getEntityHit().entity.addEffect(MinecraftEffectTypes.poison, 200)
//         event.getEntityHit().entity.addEffect(MinecraftEffectTypes.blindness, 200)
//         event.getEntityHit().entity.addEffect(MinecraftEffectTypes.slowness, 200, { amplifier: 2 })
//     }
// })