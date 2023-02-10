import { BlockLocation, ItemStack, Items, world, Location, MinecraftEffectTypes, system } from "@minecraft/server"
import { setTimeout } from "./externals/timers"

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

world.events.entityHurt.subscribe((event) => {
    let blockBelowAttacker = event.damageSource.damagingEntity.dimension.getBlock(new BlockLocation(Math.trunc(event.damageSource.damagingEntity.location.x), Math.trunc(event.damageSource.damagingEntity.location.y) - 1, Math.trunc(event.damageSource.damagingEntity.location.z)))

    if (event.damageSource.damagingEntity.typeId == 'rift:tyrannosaurus' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:zombie':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:zombie_villager':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:husk':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:drowned':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:zombie_horse':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:zoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:zombie_pigman':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:utahraptor' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:dimetrodon' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:sarcosuchus' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:anomalocaris' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:bee':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cave_spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:silverfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:anomalocaris':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:saurophaganax' && event.hurtEntity.getComponent('health').current <= 0) {
        switch (event.hurtEntity.typeId) {
            case 'minecraft:zombie':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:zombie_villager':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:husk':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:drowned':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:zombie_horse':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:zoglin':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:zombie_pigman':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:skeleton':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:stray':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:wither_skeleton':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:skeleton_horse':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:creeper':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:gunpowder'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:bee':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:spider':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:cave_spider':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:silverfish':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'rift:anomalocaris':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:slime':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:slime_ball'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:enderman':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:ender_pearl'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:phantom':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:phantom_membrane'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:ghast':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:ghast_tear'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:magma_cube':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:magma_cream'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
            case 'minecraft:blaze':
                event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:blaze_powder'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                break
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direwolf' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:baryonyx' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:dilophosaurus' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
            }
        }
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(event.hurtEntity.typeId)) {
            event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
        }
        else {
            switch (event.hurtEntity.typeId) {
                case 'minecraft:pig':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:bee':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:cave_spider':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'minecraft:silverfish':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
                    break
                case 'rift:anomalocaris':
                    event.hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
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
    if (event.damageSource.damagingEntity.typeId == 'rift:dilophosaurus' && event.damagingProjectile.typeId == 'rift:dilophosaurus_spit') {
        event.hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
        event.hurtEntity.addEffect(MinecraftEffectTypes.blindness, 200)
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 200, 2)
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
    if (event.damageSource.damagingEntity.typeId == 'rift:dimetrodon' && event.damageSource.damagingEntity.getComponent('is_charged')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.weakness, 400, 2)
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 400, 2)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:sarcosuchus' && event.damageSource.damagingEntity.hasTag('powered')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 600, 1)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:anomalocaris') {
        event.damageSource.damagingEntity.getComponent('health').setCurrent(event.damageSource.damagingEntity.getComponent('health').current + 4)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:saurophaganax' && !event.damageSource.damagingEntity.hasTag('roaring') && saurophaganaxFood.includes(event.hurtEntity.typeId) && event.hurtEntity.getComponent('health').current <= 0) {
        event.damageSource.damagingEntity.runCommandAsync(`scoreboard players add @s[scores={saurophLightBlst=!10}] saurophLightBlst 1`)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direwolf' && event.damageSource.damagingEntity.hasTag('sonicBoom')) {
        event.hurtEntity.dimension.spawnEntity('rift:direwolf_explosion', new Location(event.hurtEntity.location.x, event.hurtEntity.location.y, event.hurtEntity.location.z))
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direwolf' && event.damageSource.damagingEntity.hasTag('clawAttack')) {
        event.hurtEntity.triggerEvent('rift:stop_bleeding')
        event.hurtEntity.triggerEvent('rift:start_bleeding')
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:baryonyx' && (event.damageSource.damagingEntity.hasTag('forcedClaw') || event.damageSource.damagingEntity.getComponent('mark_variant').value == 1)) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
    }
    if (event.hurtEntity.typeId == 'rift:tenontosaurus' && event.hurtEntity.getComponent('is_tamed') && event.hurtEntity.hasTag('ridden')) {
        event.damageSource.damagingEntity.addTag('tenontoTamedTarget')
        event.hurtEntity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:tenontosaurus' && event.damageSource.damagingEntity.getComponent('is_tamed') && event.damageSource.damagingEntity.hasTag('ridden')) {
        event.hurtEntity.addTag('tenontoTamedTarget')
        event.damageSource.damagingEntity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('stompMode')) {
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 60, 255)
        event.hurtEntity.addEffect(MinecraftEffectTypes.weakness, 60, 255)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear_stomp') {
        event.hurtEntity.addEffect(MinecraftEffectTypes.slowness, 60, 255)
        event.hurtEntity.addEffect(MinecraftEffectTypes.weakness, 60, 255)
    }
    if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('clawMode')) {
        event.hurtEntity.triggerEvent('rift:stop_bleeding')
        event.hurtEntity.triggerEvent('rift:start_bleeding')
    }
    //code that tries to make it so wearing armor protects u from bleeding below
    // if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('clawMode') && event.hurtEntity.typeId != 'minecraft:player') {
    //     event.hurtEntity.triggerEvent('rift:stop_bleeding')
    //     event.hurtEntity.triggerEvent('rift:start_bleeding')
    // }
    // if (event.damageSource.damagingEntity.typeId == 'rift:direbear' && event.damageSource.damagingEntity.hasTag('clawMode') && event.hurtEntity.typeId == 'minecraft:player' && event.hurtEntity.getComponent('inventory').container.) {
    //     event.hurtEntity.triggerEvent('rift:stop_bleeding')
    //     event.hurtEntity.triggerEvent('rift:start_bleeding')
    // }
})

// system.run(function everyTick(tick) {
//     system.run(everyTick)
//     let mobs = Array.from(world.getDimension('overworld').getEntities())
//     for (let i = 0; i < mobs.length; i++) {
//         let blockBelowAttacker = mobs[i].dimension.getBlock(new BlockLocation(Math.trunc(mobs[i].location.x), Math.trunc(mobs[i].location.y) - 1, Math.trunc(mobs[i].location.z)))

//         if (mobs[i].typeId == 'rift:utahraptor' && mobs[i].getComponent('is_tamed') && !mobs[i].hasTag('ridden') && blockBelowAttacker.typeId == 'minecraft:air' && !mobs[i].hasOwnProperty('jumpAttacking')) {
//             mobs[i].jumpAttacking = 0
//         }
//         if (mobs[i].typeId == 'rift:utahraptor' && mobs[i].getComponent('is_tamed') && !mobs[i].hasTag('ridden') && blockBelowAttacker.typeId == 'minecraft:air' && mobs[i].hasOwnProperty('jumpAttacking')) {
//             mobs[i].jumpAttacking++
//         }
//     }
// })