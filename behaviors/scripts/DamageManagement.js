import { BlockLocation, ItemStack, Items, MinecraftItemTypes, world, Location } from "mojang-minecraft"

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
    'rift:baryonyx'
]

world.events.entityHurt.subscribe(({ hurtEntity, damagingEntity }) => {
    let blockBelowAttacker = damagingEntity.dimension.getBlock(new BlockLocation(Math.trunc(damagingEntity.location.x), Math.trunc(damagingEntity.location.y) - 1, Math.trunc(damagingEntity.location.z)))

    if (damagingEntity.id == 'rift:tyrannosaurus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 5, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:utahraptor' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:dimetrodon' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:sarcosuchus' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:anomalocaris' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 1, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:saurophaganax' && hurtEntity.getComponent('health').current <= 0) {
        switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:direwolf' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    if (damagingEntity.id == 'rift:baryonyx' && hurtEntity.getComponent('health').current <= 0) {
        if (exoticMeatDroppers.includes(hurtEntity.id)) {
            hurtEntity.dimension.spawnItem(new ItemStack(Items.get('rift:raw_exotic_meat'), 3, 0), hurtEntity.location)
        }
        else {
            switch (hurtEntity.id) {
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
    
    if (damagingEntity.id == 'rift:utahraptor' && blockBelowAttacker.id == 'minecraft:air' && Math.floor(Math.random() * 4) == 0) {
        hurtEntity.runCommand(`ride @s evict_riders`)
    }
    if (damagingEntity.id == 'rift:dimetrodon' && damagingEntity.getComponent('is_charged')) {
        hurtEntity.runCommand(`effect @s weakness 20 2`)
        hurtEntity.runCommand(`effect @s slowness 20 2`)
    }
    if (damagingEntity.id == 'rift:sarcosuchus' && damagingEntity.hasTag('powered')) {
        hurtEntity.runCommand(`effect @s slowness 30 2`)
    }
    if (damagingEntity.id == 'rift:anomalocaris') {
        damagingEntity.getComponent('health').setCurrent(damagingEntity.getComponent('health').current + 4)
    }
    if (damagingEntity.id == 'rift:saurophaganax' && !damagingEntity.hasTag('roaring') && saurophaganaxFood.includes(hurtEntity.id) && hurtEntity.getComponent('health').current <= 0) {
        damagingEntity.runCommand(`scoreboard players add @s[scores={saurophLightBlst=!10}] saurophLightBlst 1`)
    }
    if (damagingEntity.id == 'rift:direwolf' && damagingEntity.hasTag('sonicBoom')) {
        hurtEntity.dimension.spawnEntity('rift:direwolf_explosion', hurtEntity.location)
    }
    if (damagingEntity.id == 'rift:baryonyx' && damagingEntity.hasTag('forcedClaw')) {
        hurtEntity.runCommand(`effect @s poison 10`)
    }
})