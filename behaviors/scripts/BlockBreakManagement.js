import { ItemTypes, ItemStack, world } from "@minecraft/server"

let ores = [
    'minecraft:coal_ore',
    'minecraft:iron_ore',
    'minecraft:copper_ore',
    'minecraft:gold_ore',
    'minecraft:redstone_ore',
    'minecraft:lapis_ore',
    'minecraft:diamond_ore',
    'minecraft:emerald_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:deepslate_diamond_ore',
    'minecraft:deepslate_emerald_ore'
]

let tallPlants = [
    'minecraft:double_plant',
    'minecraft:tallgrass',
    'minecraft:vine',
    'minecraft:twisting_vines',
    'minecraft:weeping_vines',
    'minecraft:warped_roots',
    'minecraft:crimson_roots'
]

let flowers = [
    'minecraft:yellow_flower',
    'minecraft:red_flower',
    'minecraft:torchflower',
    'minecraft:wither_rose'
]

world.afterEvents.blockBreak.subscribe(data => {
    //spawn palaeocastors
    if (ores.includes(data.brokenBlockPermutation.type.id) && Math.floor(Math.random() * 8) == 0) {
        let spawnNum = Math.floor(Math.random() * 3) + 2
        for (let x = 0; x < spawnNum; x++) {
            data.block.dimension.spawnEntity('rift:palaeocastor', data.block.location)
        }
        data.block.dimension.runCommandAsync(`fill `+Math.trunc((data.block.location.x-1).toString())+` `+Math.trunc((data.block.location.y-1).toString())+` `+Math.trunc((data.block.location.z-1).toString())+` `+Math.trunc((data.block.location.x+1).toString())+` `+Math.trunc((data.block.location.y+1).toString())+` `+Math.trunc((data.block.location.z+1).toString())+` air 0 destroy`)
    }

    //grass fiber from tall plants
    if (tallPlants.includes(data.brokenBlockPermutation.type.id) && Math.floor(Math.random() * 4) == 0) {
        data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:grass_fiber'), 1), data.block.location)
    }
})