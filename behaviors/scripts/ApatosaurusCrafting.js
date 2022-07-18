import { world } from "mojang-minecraft"
import { ActionFormData } from "mojang-minecraft-ui"
import * as guiCrafting from "./ApatosaurusCraftingOptions"

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

function mainCraftingTableGui(entity) {
    guiMainCraftingTable.show(entity).then(result => {
        if (result.selection == 0) {
            guiCrafting.craftingTableMenuGui(entity)
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
            guiCrafting.craftingTableMenuGui(entity)
        }
        if (result.selection == 1) {
            mainGui(source)
        }
    })
}

function furnaceMenuGui(entity) {}

world.events.entityHit.subscribe(({ hitEntity, hitBlock, entity }) => {
    try {
        if (hitEntity.id == 'rift:apatosaurus' && hitEntity.hasTag('hasCraftingTable') && !hitEntity.hasTag('hasFurnace')) {
            mainCraftingTableGui(entity)
        }
        else if (hitEntity.id == 'rift:apatosaurus' && !hitEntity.hasTag('hasCraftingTable') && hitEntity.hasTag('hasFurnace')) {
            mainFurnaceGui(entity)
        }
        else if (hitEntity.id == 'rift:apatosaurus' && hitEntity.hasTag('hasCraftingTable') && hitEntity.hasTag('hasFurnace')) {
            mainBothGui(entity)
        }
    }
    catch (e) {}
})