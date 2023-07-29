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
            "rift:ankylosaurus_club"
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

function interpretInput(panel) {
    let input = []
    let removeIndex = []
    //setting up
    for (let x = 0; x < 3; x++) {
        input.push("")
        for (let y = 0; y < 3; y++) {
            if (slot(panel, (x * 3) + y + 1) == "rift:alpha_bone") {
                input[x] = input[x].concat("B")
            }
            else if (slot(panel, (x * 3) + y + 1) == "minecraft:copper_ingot") {
                input[x] = input[x].concat("C")
            }
            else if (slot(panel, (x * 3) + y + 1) == "minecraft:goat_horn") {
                input[x] = input[x].concat("G")
            }
            else if (slot(panel, (x * 3) + y + 1) == "minecraft:redstone") {
                input[x] = input[x].concat("R")
            }
            else if (slot(panel, (x * 3) + y + 1) == "minecraft:air") {
                input[x] = input[x].concat(" ")
            }
            else {
                input[x] = input[x].concat("!")
            }
        }
    }
    //remove excess empty slots
    ///by row
    for (let x = 0; x < 3; x++) {
        if (input[x] == "   ") {
            removeIndex.push(x)
        }
    }
    for (let x = removeIndex.length - 1; x >= 0; x--) {
        input.splice(removeIndex[x], 1)
    }
    ///by column
    ///aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ///how tf do i do this
    return input
}

function interpretCatalystInput(panel) {
    let catalysts = []
    for (let x = 10; x <= 12; x++) {
        if (slot(panel, x) != "minecraft:air") {
            catalysts.push(slot(panel, x))
        }
    }
    catalysts.sort()
    return catalysts
}

function interpretRecipe(recipe) {
    return recipe.pattern
}

function interpretCatalystRecipe(recipe) {
    let catalysts = []
    for (const c of recipe.catalysts) {
        catalysts.push(c)
    }
    catalysts.sort()
    return catalysts
}

function slot(panel, num) {
    try {        
        switch (num) {
            //fuel
            case 0:
                return panel.getItem(0).typeId
            //crafting grid
            case 1:
                return panel.getItem(1).typeId
            case 2:
                return panel.getItem(2).typeId
            case 3:
                return panel.getItem(3).typeId
            case 4:
                return panel.getItem(8).typeId
            case 5:
                return panel.getItem(9).typeId
            case 6:
                return panel.getItem(10).typeId
            case 7:
                return panel.getItem(15).typeId
            case 8:
                return panel.getItem(16).typeId
            case 9:
                return panel.getItem(17).typeId
            //catalysts
            case 10:
                return panel.getItem(4).typeId
            case 11:
                return panel.getItem(11).typeId
            case 12:
                return panel.getItem(18).typeId
            //output
            case 13:
                return panel.getItem(5).typeId
        }
    }
    catch (e) {
        return "minecraft:air"
    }
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function craft(panel) {
    // for (const obj in recipes) {
    //     if (arrayEquals(interpretInput(panel), interpretRecipe(obj)) && arrayEquals(interpretCatalystInput(panel), interpretCatalystRecipe(recipes))) {
    //         console.warn('hi')
    //     }
    // }
    console.warn(interpretInput(panel))
    // console.warn(interpretRecipe(recipes[0]))
}

system.runInterval(() => {
    for (const entity of world.getDimension('overworld').getEntities({ type: "rift:infusion_table" })) {
        const panel = entity.getComponent('inventory').container
        if (slot(panel, 0) == 'rift:blighted_shard') {
            craft(panel)
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