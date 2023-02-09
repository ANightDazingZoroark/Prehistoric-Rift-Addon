import { BlockLocation, Items, ItemStack, world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import { testForItem, clearEntity } from "./externals/itemmanagement"

let gunForgeUse = 0

let axes = [
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'minecraft:diamond_axe',
    'minecraft:golden_axe',
    'minecraft:netherite_axe'
]

function gunforgeGui(source) {
    const gunforgeIndex = new ActionFormData()
    .title('Gun Forge')
    .body('Choose a weapon to craft')
    .button('Pistol', 'textures/items/pistol')
    .button('SMG', 'textures/items/smg')
    .button('Shotgun', 'textures/items/shotgun')
    .button('Sniping Rifle', 'textures/items/sniping rifle')
    .button('Rocket Launcher', 'textures/items/rocket launcher')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                pistolCraftingMain(source)
                break
            case 1:
                smgCraftingMain(source)
                break
            case 2:
                shotgunCraftingMain(source)
                break
            case 3:
                snipingRifleCraftingMain(source)
                break
            case 4:
                rocketLauncherCraftingMain(source)
                break
        }
        gunForgeUse = 0
    })
}

function pistolCraftingMain(source) {
    const pistolCraftingMain = new ActionFormData()
    .title('Pistol')
    .body('Choose component')
    .button('Main', 'textures/items/pistol')
    .button('Ammunition', 'textures/items/magazine')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                pistolCraft(source)
                break
            case 1:
                pistolAmmoCraft(source)
                break
        }
    })
}

function pistolCraft(source) {
    const pistolCraft = new ActionFormData()
    .title('Craft Pistol')
    .body('Crafting components:\n-4x Black Plastic Frames\n-2x Iron Ingots\n-3x Gold Nuggets\n-1x Redstone')
    .button('Craft (x1)')
    .button('Back')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                if (testForItem(source, 'rift:black_plastic_frame', -1, '>=', function() {return 4}) && testForItem(source, 'minecraft:iron_ingot', -1, '>=', function() {return 2}) && testForItem(source, 'minecraft:gold_nugget', -1, '>=', function() {return 3}) && testForItem(source, 'minecraft:redstone', -1, '>=', function() {return 1})) {
                    source.runCommandAsync('give @s rift:pistol')
                    source.runCommandAsync('clear @s rift:black_plastic_frame -1 4')
                    source.runCommandAsync('clear @s minecraft:iron_ingot -1 2')
                    source.runCommandAsync('clear @s minecraft:gold_nugget -1 3')
                    source.runCommandAsync('clear @s minecraft:redstone -1 1')
                }
                else {
                    craftFail(source)
                }
                break
            case 1:
                gunforgeGui(source)
                break
        }
    })
}

function pistolAmmoCraft(source) {
    const pistolAmmoCraft = new ActionFormData()
    .title('Craft Magazine')
    .body('Crafting components:\n-1x Black Plastic Frames\n-1x Gold Ingot\n-2x Gunpowder')
    .button('Craft (x8)')
    .button('Back')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                if (testForItem(source, 'rift:black_plastic_frame', -1, '>=', function() {return 1}) && testForItem(source, 'minecraft:gold_ingot', -1, '>=', function() {return 1}) && testForItem(source, 'minecraft:gunpowder', -1, '>=', function() {return 2})) {
                    source.runCommandAsync('give @s rift:magazine 8')
                    source.runCommandAsync('clear @s rift:black_plastic_frame -1 1')
                    source.runCommandAsync('clear @s minecraft:gold_ingot -1 1')
                    source.runCommandAsync('clear @s minecraft:gunpowder -1 2')
                }
                else {
                    craftFail(source)
                }
                break
            case 1:
                gunforgeGui(source)
                break
        }
    })
}

function smgCraftingMain(source) {
    const smgCraftingMain = new ActionFormData()
    .title('SMG')
    .body('Choose component')
    .button('Main', 'textures/items/smg')
    .button('Ammunition', 'textures/items/magazine')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                smgCraft(source)
                break
            case 1:
                smgAmmoCraft(source)
                break
        }
    })
}

function smgCraft(source) {
    const smgCraft = new ActionFormData()
    .title('Craft SMG')
    .body('Crafting components:\n-6x Black Plastic Frames\n-3x Iron Ingots\n-3x Gold Nuggets\n-2x Redstone')
    .button('Craft (x1)')
    .button('Back')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                if (testForItem(source, 'rift:black_plastic_frame', -1, '>=', function() {return 6}) && testForItem(source, 'minecraft:iron_ingot', -1, '>=', function() {return 3}) && testForItem(source, 'minecraft:gold_nugget', -1, '>=', function() {return 3}) && testForItem(source, 'minecraft:redstone', -1, '>=', function() {return 2})) {
                    source.runCommandAsync('give @s rift:smg')
                    source.runCommandAsync('clear @s rift:black_plastic_frame -1 6')
                    source.runCommandAsync('clear @s minecraft:iron_ingot -1 3')
                    source.runCommandAsync('clear @s minecraft:gold_nugget -1 3')
                    source.runCommandAsync('clear @s minecraft:redstone -1 2')
                }
                else {
                    craftFail(source)
                }
                break
            case 1:
                gunforgeGui(source)
                break
        }
    })
}

function smgAmmoCraft(source) {
    const smgAmmoCraft = new ActionFormData()
    .title('Craft Magazine')
    .body('Crafting components:\n-1x Black Plastic Frames\n-1x Gold Ingot\n-2x Gunpowder')
    .button('Craft (x8)')
    .button('Back')
    .show(source).then(result => {
        switch(result.selection) {
            case 0:
                if (testForItem(source, 'rift:black_plastic_frame', -1, '>=', function() {return 1}) && testForItem(source, 'minecraft:gold_ingot', -1, '>=', function() {return 1}) && testForItem(source, 'minecraft:gunpowder', -1, '>=', function() {return 2})) {
                    source.runCommandAsync('give @s rift:magazine 8')
                    source.runCommandAsync('clear @s rift:black_plastic_frame -1 1')
                    source.runCommandAsync('clear @s minecraft:gold_ingot -1 1')
                    source.runCommandAsync('clear @s minecraft:gunpowder -1 2')
                }
                else {
                    craftFail(source)
                }
                break
            case 1:
                gunforgeGui(source)
                break
        }
    })
}

function shotgunCraftingMain(source) {
    const shotgunCraftingMain = new ActionFormData()
    .title('Shotgun')
    .body('Choose component')
    .button('Main', 'textures/items/shotgun')
    .button('Ammunition', 'textures/items/shotgun shells')
    .show(source)
}

function snipingRifleCraftingMain(source) {
    const snipingRifleCraftingMain = new ActionFormData()
    .title('Sniping Rifle')
    .body('Choose component')
    .button('Main', 'textures/items/sniping rifle')
    .button('Ammunition', 'textures/placeholder')
    .show(source)
}

function rocketLauncherCraftingMain(source) {
    const rocketLauncherCraftingMain = new ActionFormData()
    .title('Rocket Launcher')
    .body('Choose component')
    .button('Main', 'textures/items/rocket launcher')
    .button('Ammunition', 'textures/items/rocket')
    .show(source)
}

function craftFail(source) {
    const craftFail = new ActionFormData()
    .title('Failed to craft item')
    .body('You don\'t have enough materials to craft this item!')
    .button('Return to Index')
    .show(source).then(result => {
        if (result.selection == 0) {
            gunforgeGui(source)
        }
    })
}

world.events.beforeItemUseOn.subscribe(data => {
    if (axes.includes(data.item.typeId)) {
        switch (world.getDimension('overworld').getBlock(data.blockLocation).typeId) {
            case 'minecraft:log':
                for (let x = 0; x < 16; x++) {
                    if (world.getDimension('overworld').runCommandAsync(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).then(x => x.successCount) && x % 4 == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:oak_thatch'), 2, 0), data.blockLocation)
                        break
                    }
                    else if (world.getDimension('overworld').runCommandAsync(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).then(x => x.successCount) && (x - 1) % 4 == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:spruce_thatch'), 2, 0), data.blockLocation)
                        break
                    }
                    else if (world.getDimension('overworld').runCommandAsync(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).then(x => x.successCount) && (x - 2) % 4 == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:birch_thatch'), 2, 0), data.blockLocation)
                        break
                    }
                    else if (world.getDimension('overworld').runCommandAsync(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log `+x).then(x => x.successCount) && (x - 3) % 4 == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:jungle_thatch'), 2, 0), data.blockLocation)
                        break
                    }
                }
                break
            case 'minecraft:log2':
                for (let x = 0; x < 16; x++) {
                    if (world.getDimension('overworld').runCommandAsync(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log2 `+x).then(x => x.successCount) && x - 1 % 4 == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:dark_oak_thatch'), 2, 0), data.blockLocation)
                        break
                    }
                    else if (world.getDimension('overworld').runCommandAsync(`testforblock `+data.blockLocation.x+` `+data.blockLocation.y+` `+data.blockLocation.z+` log2 `+x).then(x => x.successCount) && x - 1 % 4 != 0 && x >= 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:acacia_thatch'), 2, 0), data.blockLocation)
                        break
                    }
                }
                break
        }
    }

    if (world.getDimension('overworld').getBlock(new BlockLocation(data.blockLocation.x, data.blockLocation.y, data.blockLocation.z)).typeId == 'rift:gun_forge') {
        if (gunForgeUse == 0) {
            gunforgeGui(data.source)
            gunForgeUse++
        }
    }
})