import { world } from "mojang-minecraft"

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

world.events.blockBreak.subscribe(data => {
    if (ores.includes(data.brokenBlockPermutation.type.id) && Math.floor(Math.random() * 8) == 0) {
        world.getDimension('overworld').spawnEntity('rift:palaeocastor', data.block.location)
        world.getDimension('overworld').runCommand(`fill `+Math.trunc((data.block.location.x-1).toString())+` `+Math.trunc((data.block.location.y-1).toString())+` `+Math.trunc((data.block.location.z-1).toString())+` `+Math.trunc((data.block.location.x+1).toString())+` `+Math.trunc((data.block.location.y+1).toString())+` `+Math.trunc((data.block.location.z+1).toString())+` air 0 destroy`)
    }
})