import { Items, ItemStack, world } from "@minecraft/server"

let axes = [
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'minecraft:diamond_axe',
    'minecraft:golden_axe',
    'minecraft:netherite_axe'
]

world.events.beforeItemUseOn.subscribe(data => {
    let block = world.getDimension('overworld').getBlock(data.getBlockLocation())
    if (axes.includes(data.item.typeId) && block.typeId == 'minecraft:log') {
        switch (block.permutation.getProperty('old_log_type')) {
            case 'oak':
                world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:oak_thatch'), 2), data.getBlockLocation())
                break
            case 'spruce':
                world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:spruce_thatch'), 2), data.getBlockLocation())
                break
            case 'birch':
                world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:birch_thatch'), 2), data.getBlockLocation())
                break
            case 'jungle':
                world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:jungle_thatch'), 2), data.getBlockLocation())
                break
        }
    }
    if (axes.includes(data.item.typeId) && block.typeId == 'minecraft:log2') {
        switch (block.permutation.getProperty('new_log_type')) {
            case 'acacia':
                world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:acacia_thatch'), 2), data.getBlockLocation())
                break
            case 'dark_oak':
                world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:dark_oak_thatch'), 2), data.getBlockLocation())
                break
        }
    }
    if (axes.includes(data.item.typeId) && block.typeId == 'minecraft:mangrove_log') {
        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:mangrove_thatch'), 2), data.getBlockLocation())
    }
    if (axes.includes(data.item.typeId) && block.typeId == 'minecraft:crimson_stem') {
        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:crimson_thatch'), 2), data.getBlockLocation())
    }
    if (axes.includes(data.item.typeId) && block.typeId == 'minecraft:warped_stem') {
        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:warped_thatch'), 2), data.getBlockLocation())
    }
})