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
    if (axes.includes(data.item.typeId)) {
        switch (world.getDimension('overworld').getBlock(data.blockLocation).typeId) {
            case 'minecraft:log':
                for (let x = 0; x < 16; x++) {
                    try {
                        if (world.getDimension('overworld').runCommand(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).matches && x % 4 == 0) {
                            world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:oak_thatch'), 2, 0), data.blockLocation)
                        }
                        else if (world.getDimension('overworld').runCommand(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).matches && (x - 1) % 4 == 0) {
                            world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:spruce_thatch'), 2, 0), data.blockLocation)
                        }
                        else if (world.getDimension('overworld').runCommand(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).matches && (x - 2) % 4 == 0) {
                            world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:birch_thatch'), 2, 0), data.blockLocation)
                        }
                        else if (world.getDimension('overworld').runCommand(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).matches && (x - 3) % 4 == 0) {
                            world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:jungle_thatch'), 2, 0), data.blockLocation)
                        }
                    }
                    catch (e) {}
                }
                break
            case 'minecraft:log2':
                for (let x = 0; x < 16; x++) {
                    try {
                        if (world.getDimension('overworld').runCommand(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log2 `+x).matches && x - 1 % 4 == 0) {
                            world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:dark_oak_thatch'), 2, 0), data.blockLocation)
                        }
                        else if (world.getDimension('overworld').runCommand(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log2 `+x).matches && x - 1 % 4 != 0 && x >= 0) {
                            world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:acacia_thatch'), 2, 0), data.blockLocation)
                        }
                    }
                    catch (e) {}
                }
                break
        }
    }
})