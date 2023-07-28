import { ItemStack, ItemTypes, MinecraftBlockTypes, system, world } from "@minecraft/server"

let recipes = [
    //B is for alpha bones
    //C is for copper ingot
    //G is for goat horn
    //R is for redstone
    {
        pattern: [
            "B B",
            "C C"
        ],
        catalysts: [
            "rift:tyrannosaurus_arm"
        ],
        result: "rift:alpha_hide_boots"
    },
    {
        pattern: [
            "C C",
            "CCC",
            "BCB"
        ],
        catalysts: [
            "rift:tyrannosaurus_arm"
        ],
        result: "rift:alpha_hide_chestplate"
    },
    {
        pattern: [
            "BCB",
            "C C"
        ],
        catalysts: [
            "rift:tyrannosaurus_arm"
        ],
        result: "rift:alpha_hide_helmet"
    },
    {
        pattern: [
            "BCB",
            "C C",
            "C C"
        ],
        catalysts: [
            "rift:tyrannosaurus_arm"
        ],
        result: "rift:alpha_hide_leggings"
    },
    {
        pattern: [
            "C C",
            "CCC",
            "BCB"
        ],
        catalysts: [
            "rift:ankylosaurus_mace"
        ],
        result: "rift:ankylosaurus_chestplate"
    },
    {
        pattern: [
            "CCC",
            "CBC",
            " B "
        ],
        catalysts: [
            "rift:ankylosaurus_club"
        ],
        result: "rift:ankylosaurus_mace"
    },
    {
        pattern: [
            " C",
            "B "
        ],
        catalysts: [
            "rift:anomalocaris_appendage"
        ],
        result: "rift:anomalocaris_dagger"
    },
    {
        pattern: [
            " C",
            "B "
        ],
        catalysts: [
            "rift:baryonyx_claw"
        ],
        result: "rift:baryonyx_dagger"
    },
    {
        pattern: [
            "C C",
            "CCC",
            "BCB"
        ],
        catalysts: [
            "rift:baryonyx_claw"
        ],
        result: "rift:baryonyx_vest"
    },
    {
        pattern: [
            "CC",
            "B ",
            "B "
        ],
        catalysts: [
            "rift:utahraptor_claw"
        ],
        result: "rift:climbing_pick"
    },
    {
        pattern: [
            "CC",
            "B ",
            "B "
        ],
        catalysts: [
            "rift:direwolf_tail"
        ],
        result: "rift:climbing_pick"
    },
    {
        pattern: [
            "RCB",
            "  C"
        ],
        catalysts: [
            "rift:dilophosaurus_frill"
        ],
        result: "rift:dilophosaurus_splatterer"
    },
    {
        pattern: [
            "BCR",
            "C  "
        ],
        catalysts: [
            "rift:dilophosaurus_frill"
        ],
        result: "rift:dilophosaurus_splatterer"
    },
    {
        pattern: [
            " C",
            "B "
        ],
        catalysts: [
            "rift:dimetrodon_sail"
        ],
        result: "rift:dimetrodon_dagger"
    },
    {
        pattern: [
            "BGB",
            " C "
        ],
        catalysts: [
            "rift:parasaurolophus_horn"
        ],
        result: "rift:parasaurolophus_sound_blaster"
    },
    {
        pattern: [
            "CCC",
            " B ",
            " B "
        ],
        catalysts: [
            "rift:ankylosaurus_club",
            "rift:apatosaurus_vertebrae",
            "rift:gallimimus_foot"
        ],
        result: "rift:paxel"
    },
    {
        pattern: [
            "CCC",
            " B ",
            " B "
        ],
        catalysts: [
            "rift:ankylosaurus_club",
            "rift:apatosaurus_vertebrae",
            "rift:parasaurolophus_horn"
        ],
        result: "rift:paxel"
    },
    {
        pattern: [
            "B B",
            "C C"
        ],
        catalysts: [
            "rift:sarcosuchus_snout"
        ],
        result: "rift:sarcosuchus_boots"
    },
    {
        pattern: [
            "  B",
            " C ",
            "R  "
        ],
        catalysts: [
            "rift:saurophaganax_eye"
        ],
        result: "rift:saurophaganax_light_blaster"
    },
    {
        pattern: [
            "B B",
            "C C"
        ],
        catalysts: [
            "rift:utahraptor_claw"
        ],
        result: "rift:sprinter_boots"
    },
    {
        pattern: [
            "B B",
            "C C"
        ],
        catalysts: [
            "rift:megaloceros_antler"
        ],
        result: "rift:sprinter_boots"
    },
    {
        pattern: [
            "B B",
            "C C"
        ],
        catalysts: [
            "rift:gallimimus_foot"
        ],
        result: "rift:sprinter_boots"
    },
    {
        pattern: [
            "CC",
            "B ",
            "B "
        ],
        catalysts: [
            "rift:stegosaurus_plate"
        ],
        result: "rift:stegosaurus_scythe"
    },
    {
        pattern: [
            "C",
            "B",
            "B"
        ],
        catalysts: [
            "rift:tenontosaurus_feather"
        ],
        result: "rift:tenontosaurus_charmer"
    },
    {
        pattern: [
            "CCC",
            "BCB",
            " B "
        ],
        catalysts: [
            "rift:triceratops_horn"
        ],
        result: "rift:triceratops_shield"
    },
    {
        pattern: [
            "  C",
            " B ",
            "B  "
        ],
        catalysts: [
            "rift:triceratops_horn"
        ],
        result: "rift:triceratops_spear"
    },
    {
        pattern: [
            "BGB",
            " C "
        ],
        catalysts: [
            "rift:tyrannosaurus_arm"
        ],
        result: "rift:tyrannosaurus_sound_blaster"
    },
    {
        pattern: [
            " C",
            "B "
        ],
        catalysts: [
            "rift:utahraptor_claw"
        ],
        result: "rift:utahraptor_dagger"
    },
    {
        pattern: [
            "B  ",
            "B  ",
            "BCC"
        ],
        catalysts: [
            "rift:sarcosuchus_snout"
        ],
        result: "rift:water_breather"
    },
    {
        pattern: [
            "B  ",
            "B  ",
            "BCC"
        ],
        catalysts: [
            "rift:baryonyx_claw"
        ],
        result: "rift:water_breather"
    },
    {
        pattern: [
            "B  ",
            "B  ",
            "BCC"
        ],
        catalysts: [
            "rift:anomalocaris_appendage"
        ],
        result: "rift:water_breather"
    }
]

system.runInterval(() => {
    for (const entity of world.getDimension('overworld').getEntities({ type: "rift:infusion_table" })) {
        const panel = entity.getComponent('inventory').container
        if (panel.getItem(0).typeId == 'rift:blighted_shard') {
            console.warn('hi')
        }
    }
})

world.afterEvents.blockPlace.subscribe((ev) => {
    const location = { 
        x: ev.block.location.x + 0.5, 
        y: ev.block.location.y, 
        z: ev.block.location.z + 0.5 
    }
    if (ev.block.typeId == 'rift:infusion_table') {
        ev.dimension.runCommandAsync('summon rift:infusion_table \"Infusion Table\" '+location.x+' '+location.y+' '+location.z)
    }
})

world.afterEvents.entityHitEntity.subscribe((ev) => {
    if (ev.hitEntity.typeId == 'rift:infusion_table') {
        const location = ev.hitEntity.location
        ev.hitEntity.dimension.fillBlocks(location, location, MinecraftBlockTypes.get('minecraft:air'))
        ev.hitEntity.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:infusion_table'), 1), location)
        ev.hitEntity.triggerEvent('rift:on_destroy')
    }
})