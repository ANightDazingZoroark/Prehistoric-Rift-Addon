import { BlockLocation, ItemStack, Items, MinecraftItemTypes, world, Location, MinecraftEffectTypes, system } from "@minecraft/server"

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
    'rift:utahraptor',
    'rift:sarcosuchus',
    'rift:saurophaganax',
    'rift:direwolf',
    'rift:megaloceros',
    'rift:baryonyx',
    'rift:ankylosaurus'
]

world.events.entityHurt.subscribe(({ hurtEntity, damagingEntity, projectile }) => {
    let blockBelowAttacker = damagingEntity.dimension.getBlock(new BlockLocation(Math.trunc(damagingEntity.location.x), Math.trunc(damagingEntity.location.y) - 1, Math.trunc(damagingEntity.location.z)))

    if (damagingEntity.typeId == 'rift:tyrannosaurus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 5, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 5, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 5, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 5, 0), hurtEntity.location)
                    break
                case 'minecraft:zombie':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:zombie_villager':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:husk':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:drowned':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:zombie_horse':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:zoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
                case 'minecraft:zombie_pigman':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:utahraptor' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 3, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:dimetrodon' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 3, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.cod, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.salmon, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.tropicalFish, 1, 0), hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 1, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:sarcosuchus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 1, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), hurtEntity.location)
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.cod, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.salmon, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.tropicalFish, 3, 0), hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:anomalocaris' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 1, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), hurtEntity.location)
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.cod, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.salmon, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.tropicalFish, 3, 0), hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), hurtEntity.location)
                    break
                case 'minecraft:bee':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), hurtEntity.location)
                    break
                case 'minecraft:spider':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cave_spider':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), hurtEntity.location)
                    break
                case 'minecraft:silverfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), hurtEntity.location)
                    break
                case 'rift:anomalocaris':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 3, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:saurophaganax' && hurtEntity.getComponent('health').current <= 0) {
        switch (hurtEntity.typeId) {
            case 'minecraft:zombie':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:zombie_villager':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:husk':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:drowned':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:zombie_horse':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:zoglin':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:zombie_pigman':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rottenFlesh, 5, 0), hurtEntity.location)
                break
            case 'minecraft:skeleton':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.bone, 5, 0), hurtEntity.location)
                break
            case 'minecraft:stray':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.bone, 5, 0), hurtEntity.location)
                break
            case 'minecraft:wither_skeleton':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.bone, 5, 0), hurtEntity.location)
                break
            case 'minecraft:skeleton_horse':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.bone, 5, 0), hurtEntity.location)
                break
            case 'minecraft:creeper':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.gunpowder, 5, 0), hurtEntity.location)
                break
            case 'minecraft:bee':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), hurtEntity.location)
                break
            case 'minecraft:spider':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), hurtEntity.location)
                break
            case 'minecraft:cave_spider':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), hurtEntity.location)
                break
            case 'minecraft:silverfish':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), hurtEntity.location)
                break
            case 'rift:anomalocaris':
                hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hemolymph'), 5, 0), hurtEntity.location)
                break
            case 'minecraft:slime':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.slimeBall, 5, 0), hurtEntity.location)
                break
            case 'minecraft:enderman':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.enderPearl, 5, 0), hurtEntity.location)
                break
            case 'minecraft:phantom':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.phantomMembrane, 5, 0), hurtEntity.location)
                break
            case 'minecraft:ghast':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.ghastTear, 5, 0), hurtEntity.location)
                break
            case 'minecraft:magma_cube':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.magmaCream, 5, 0), hurtEntity.location)
                break
            case 'minecraft:blaze':
                hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.blazePowder, 5, 0), hurtEntity.location)
                break
        }
    }
    if (damagingEntity.typeId == 'rift:direwolf' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 3, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:baryonyx' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 3, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 3, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 3, 0), hurtEntity.location)
                    break
                case 'minecraft:cod':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.cod, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:salmon':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.salmon, 3, 0), hurtEntity.location)
                    break
                case 'minecraft:tropicalfish':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.tropicalFish, 3, 0), hurtEntity.location)
                    break
                case 'rift:megapiranha':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_megapiranha'), 3, 0), hurtEntity.location)
                    break
            }
        }
    }
    if (damagingEntity.typeId == 'rift:dilophosaurus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.typeId)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.typeId) {
                case 'minecraft:pig':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:hoglin':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.porkchop, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:sheep':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.mutton, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:cow':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:mooshroom':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.beef, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:chicken':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.chicken, 1, 0), hurtEntity.location)
                    break
                case 'minecraft:rabbit':
                    hurtEntity.dimension.spawnItem(new ItemStack(MinecraftItemTypes.rabbit, 1, 0), hurtEntity.location)
                    break
                case 'rift:dodo':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_dodo_meat'), 1, 0), hurtEntity.location)
                    break
                case 'rift:parasaurolophus':
                    hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_hadrosaur_meat'), 1, 0), hurtEntity.location)
                    break
            }
        }
    }

    if (damagingEntity.typeId == 'rift:dilophosaurus' && projectile.typeId == 'rift:dilophosaurus_spit') {
        hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
        hurtEntity.addEffect(MinecraftEffectTypes.blindness, 200)
        hurtEntity.addEffect(MinecraftEffectTypes.slowness, 200, 2)
    }
    if (damagingEntity.typeId == 'rift:utahraptor' && blockBelowAttacker.typeId == 'minecraft:air' && Math.floor(Math.random() * 4) == 0) {
        hurtEntity.runCommand(`ride @s evict_riders`)
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
        damagingEntity.runCommand(`scoreboard players add @s[scores={saurophLightBlst=!10}] saurophLightBlst 1`)
    }
    if (damagingEntity.typeId == 'rift:direwolf' && damagingEntity.hasTag('sonicBoom')) {
        hurtEntity.dimension.spawnEntity('rift:direwolf_explosion', hurtEntity.location)
    }
    if (damagingEntity.typeId == 'rift:baryonyx' && damagingEntity.hasTag('forcedClaw')) {
        hurtEntity.addEffect(MinecraftEffectTypes.poison, 200)
    }
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