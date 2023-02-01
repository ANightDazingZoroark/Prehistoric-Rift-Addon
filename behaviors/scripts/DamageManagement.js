import { BlockLocation, ItemStack, Items, world, Location, MinecraftEffectTypes, system } from "@minecraft/server"

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

world.events.entityHurt.subscribe(({ hurtEntity, damagingEntity, projectile }) => {
    let blockBelowAttacker = damagingEntity.dimension.getBlock(new BlockLocation(Math.trunc(damagingEntity.location.x), Math.trunc(damagingEntity.location.y) - 1, Math.trunc(damagingEntity.location.z)))

    if (damagingEntity.typeId == 'rift:tyrannosaurus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:zombie':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:zombie_villager':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:husk':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:drowned':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:zombie_horse':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:zoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:zombie_pigman':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:utahraptor' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:dimetrodon' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:sarcosuchus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:anomalocaris' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:bee':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:spider':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cave_spider':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:silverfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:anomalocaris':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:saurophaganax' && hurtEntity.getComponent('health').current <= 0) {
        switch (hurtEntity.typeId) {
            case 'minecraft:zombie':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:zombie_villager':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:husk':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:drowned':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:zombie_horse':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:zoglin':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:zombie_pigman':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rotten_flesh'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:skeleton':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:stray':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:wither_skeleton':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:skeleton_horse':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:bone'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:creeper':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:gunpowder'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:bee':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:spider':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:cave_spider':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:silverfish':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'rift:anomalocaris':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:slime':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:slime_ball'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:enderman':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:ender_pearl'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:phantom':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:phantom_membrane'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:ghast':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:ghast_tear'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:magma_cube':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:magma_cream'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
            case 'minecraft:blaze':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:blaze_powder'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                break
        }
    }
    if (damagingEntity.typeId == 'rift:direwolf' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:baryonyx' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:dilophosaurus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:direbear' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else if (fibrousMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_fibrous_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:porkchop'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:mutton'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:beef'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:chicken'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:rabbit'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:tenontosaurus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:cod'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:salmon'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('minecraft:tropical_fish'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:bee':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:spider':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:cave_spider':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'minecraft:silverfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
                case 'rift:anomalocaris':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
                    break
            }
        }
    }

    if (damagingEntity.typeId == 'rift:stegosaurus' && (damagingEntity.hasTag('chargeOne') || damagingEntity.hasTag('chargeTwo') || damagingEntity.hasTag('chargeThree') || damagingEntity.hasTag('chargeFour') || damagingEntity.hasTag('chargeFive'))) {
        hurtEntity.triggerEvent('rift:stop_bleeding')
        hurtEntity.triggerEvent('rift:start_bleeding')
        damagingEntity.removeTag('chargeOne')
        damagingEntity.removeTag('chargeTwo')
        damagingEntity.removeTag('chargeThree')
        damagingEntity.removeTag('chargeFour')
        damagingEntity.removeTag('chargeFive')
    }
    if (damagingEntity.typeId == 'rift:dilophosaurus' && projectile.typeId == 'rift:dilophosaurus_spit') {
        hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
        hurtEntity.addEffect(MinecraftEffectTypes.blindness, 200)
        hurtEntity.addEffect(MinecraftEffectTypes.slowness, 200, 2)
    }
    if (damagingEntity.typeId == 'rift:utahraptor' && blockBelowAttacker.typeId == 'minecraft:air' && Math.floor(Math.random() * 4) == 0) {
        hurtEntity.runCommandAsync(`ride @s evict_riders`)
    }
    if (damagingEntity.typeId == 'rift:utahraptor' && !damagingEntity.hasTag('ridden') && damagingEntity.getComponent('is_tamed') && damagingEntity.jumpAttacking > 10) {
        damagingEntity.triggerEvent('rift:decrease_energy_while_jumping')
        damagingEntity.jumpAttacking = 0
    }
    if (hurtEntity.typeId == 'rift:utahraptor' && !hurtEntity.hasTag('ridden') && hurtEntity.getComponent('is_tamed') && damagingEntity.jumpAttacking > 10) {
        damagingEntity.jumpAttacking = 0
    }
    if (damagingEntity.typeId == 'rift:dimetrodon' && damagingEntity.getComponent('is_charged')) {
        hurtEntity.addEffect(MinecraftEffectTypes.weakness, 400, 2)
        hurtEntity.addEffect(MinecraftEffectTypes.slowness, 400, 2)
    }
    if (damagingEntity.typeId == 'rift:sarcosuchus' && damagingEntity.hasTag('powered')) {
        hurtEntity.addEffect(MinecraftEffectTypes.slowness, 600, 1)
    }
    if (damagingEntity.typeId == 'rift:anomalocaris') {
        damagingEntity.getComponent('health').setCurrent(damagingEntity.getComponent('health').current + 4)
    }
    if (damagingEntity.typeId == 'rift:saurophaganax' && !damagingEntity.hasTag('roaring') && saurophaganaxFood.includes(hurtEntity.typeId) && hurtEntity.getComponent('health').current <= 0) {
        damagingEntity.runCommandAsync(`scoreboard players add @s[scores={saurophLightBlst=!10}] saurophLightBlst 1`)
    }
    if (damagingEntity.typeId == 'rift:direwolf' && damagingEntity.hasTag('sonicBoom')) {
        hurtEntity.dimension.spawnEntity('rift:direwolf_explosion', new Location(hurtEntity.location.x, hurtEntity.location.y, hurtEntity.location.z))
    }
    if (damagingEntity.typeId == 'rift:direwolf' && damagingEntity.hasTag('clawAttack')) {
        hurtEntity.triggerEvent('rift:stop_bleeding')
        hurtEntity.triggerEvent('rift:start_bleeding')
    }
    if (damagingEntity.typeId == 'rift:baryonyx' && (damagingEntity.hasTag('forcedClaw') || damagingEntity.getComponent('mark_variant').value == 1)) {
        hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
    }
    if (hurtEntity.typeId == 'rift:tenontosaurus' && hurtEntity.getComponent('is_tamed') && hurtEntity.hasTag('ridden')) {
        damagingEntity.addTag('tenontoTamedTarget')
        hurtEntity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
    }
    if (damagingEntity.typeId == 'rift:tenontosaurus' && damagingEntity.getComponent('is_tamed') && damagingEntity.hasTag('ridden')) {
        hurtEntity.addTag('tenontoTamedTarget')
        damagingEntity.runCommandAsync(`event entity @e[r=24, tag=!tamed, tag=hypnotizedTamed] rift:attack_for_tenontosaurus`)
    }
    if (damagingEntity.typeId == 'rift:direbear' && damagingEntity.hasTag('stompMode')) {
        hurtEntity.addEffect(MinecraftEffectTypes.slowness, 60, 255)
        hurtEntity.addEffect(MinecraftEffectTypes.weakness, 60, 255)
    }
    if (damagingEntity.typeId == 'rift:direbear_stomp') {
        hurtEntity.addEffect(MinecraftEffectTypes.slowness, 60, 255)
        hurtEntity.addEffect(MinecraftEffectTypes.weakness, 60, 255)
    }
    if (damagingEntity.typeId == 'rift:direbear' && damagingEntity.hasTag('clawMode')) {
        hurtEntity.triggerEvent('rift:stop_bleeding')
        hurtEntity.triggerEvent('rift:start_bleeding')
    }
    //code that tries to make it so wearing armor protects u from bleeding below
    // if (damagingEntity.typeId == 'rift:direbear' && damagingEntity.hasTag('clawMode') && hurtEntity.typeId != 'minecraft:player') {
    //     hurtEntity.triggerEvent('rift:stop_bleeding')
    //     hurtEntity.triggerEvent('rift:start_bleeding')
    // }
    // if (damagingEntity.typeId == 'rift:direbear' && damagingEntity.hasTag('clawMode') && hurtEntity.typeId == 'minecraft:player' && hurtEntity.getComponent('inventory').container.) {
    //     hurtEntity.triggerEvent('rift:stop_bleeding')
    //     hurtEntity.triggerEvent('rift:start_bleeding')
    // }
})

system.run(function everyTick(tick) {
    system.run(everyTick)
    let mobs = Array.from(world.getDimension('overworld').getEntities())
    for (let i = 0; i < mobs.length; i++) {
        let blockBelowAttacker = mobs[i].dimension.getBlock(new BlockLocation(Math.trunc(mobs[i].location.x), Math.trunc(mobs[i].location.y) - 1, Math.trunc(mobs[i].location.z)))

        if (mobs[i].typeId == 'rift:utahraptor' && mobs[i].getComponent('is_tamed') && !mobs[i].hasTag('ridden') && blockBelowAttacker.typeId == 'minecraft:air' && !mobs[i].hasOwnProperty('jumpAttacking')) {
            mobs[i].jumpAttacking = 0
        }
        if (mobs[i].typeId == 'rift:utahraptor' && mobs[i].getComponent('is_tamed') && !mobs[i].hasTag('ridden') && blockBelowAttacker.typeId == 'minecraft:air' && mobs[i].hasOwnProperty('jumpAttacking')) {
            mobs[i].jumpAttacking++
        }
    }
})