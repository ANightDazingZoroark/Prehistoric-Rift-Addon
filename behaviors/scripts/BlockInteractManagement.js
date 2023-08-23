import { system, ItemTypes, ItemStack, world } from "@minecraft/server"

let axes = [
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'minecraft:diamond_axe',
    'minecraft:golden_axe',
    'minecraft:netherite_axe'
]

world.beforeEvents.itemUseOn.subscribe(data => {
    if (axes.includes(data.itemStack.typeId)) {
        const location = {
            x: data.block.location.x, 
            y: data.block.location.y+1, 
            z: data.block.location.z
        }
        switch (data.block.typeId) {
            case 'minecraft:oak_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:oak_thatch'), 2), location)
                })
                break
            case 'minecraft:spruce_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:spruce_thatch'), 2), location)
                })
                break
            case 'minecraft:birch_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:birch_thatch'), 2), location)
                })
                break
            case 'minecraft:jungle_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:jungle_thatch'), 2), location)
                })
                break
            case 'minecraft:acacia_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:acacia_thatch'), 2), location)
                })
                break
            case 'minecraft:dark_oak_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:dark_oak_thatch'), 2), location)
                })
                break
            case 'minecraft:mangrove_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:mangrove_thatch'), 2), location)
                })
                break
            case 'minecraft:cherry_log':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:cherry_thatch'), 2), location)
                })
                break
            case 'minecraft:bamboo_block':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:bamboo_thatch'), 2), location)
                })
                break
            case 'minecraft:crimson_stem':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:crimson_thatch'), 2), location)
                })
                break
            case 'minecraft:warped_stem':
                system.run(() => {
                    data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:warped_thatch'), 2), location)
                })
                break
        }
    }
})