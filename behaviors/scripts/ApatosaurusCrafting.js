import { world } from "mojang-minecraft"
import { ActionFormData } from "mojang-minecraft-ui"

//for main
const guiMainCraftingTable = new ActionFormData()
.title('Apatosaurus Menu')
.body('Choose an action')
.button('Crafting Table')

const guiMainFurnace = new ActionFormData()
.title('Apatosaurus Menu')
.body('Choose an action')
.button('Furnace')

const guiMainBoth = new ActionFormData()
.title('Apatosaurus Menu')
.body('Choose an action')
.button('Crafting Table')
.button('Furnace')

const guiMainNone = new ActionFormData()
.title('Apatosaurus Menu')
.body('Bruh there\'s nothing really much to do here...')
.button('Exit')

function mainCraftingTableGui(entity) {
    guiMainCraftingTable.show(entity).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
    })
}

function mainFurnaceGui(entity) {
    guiMainFurnace.show(entity).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
    })
}

function mainBothGui(entity) {
    guiMainBoth.show(entity).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            mainGui(source)
        }
    })
}

world.events.entityHit.subscribe(({ hitEntity, hitBlock, entity }) => {
    if (hitEntity.id == 'rift:apatosaurus' && hitEntity.hasTag('hasCraftingTable') && !hitEntity.hasTag('hasCraftingTable')) {
        mainCraftingTableGui(entity)
        world.getDimension('overworld').runCommand(`say can craft`)
    }
    else if (hitEntity.id == 'rift:apatosaurus' && !hitEntity.hasTag('hasCraftingTable') && hitEntity.hasTag('hasFurnace')) {
        mainFurnaceGui(entity)
        world.getDimension('overworld').runCommand(`say can burn`)
    }
    else if (hitEntity.id == 'rift:apatosaurus' && hitEntity.hasTag('hasCraftingTable') && hitEntity.hasTag('hasFurnace')) {
        mainBothGui(entity)
        world.getDimension('overworld').runCommand(`say can do both`)
    }
    else if (hitEntity.id == 'rift:apatosaurus' && !hitEntity.hasTag('hasCraftingTable') && !hitEntity.hasTag('hasFurnace')) {
        guiMainNone.show(entity)
    }
})