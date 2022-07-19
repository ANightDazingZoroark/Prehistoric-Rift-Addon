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

function mainFurnaceGui(entity, hitEntity) {
    guiMainFurnace.show(entity).then(result => {
        if (result.selection == 0) {
            guiCrafting.furnaceMenuGui(entity, hitEntity)
        }
    })
}

function mainBothGui(entity, hitEntity) {
    guiMainBoth.show(entity).then(result => {
        if (result.selection == 0) {
            guiCrafting.craftingTableMenuGui(entity)
        }
        if (result.selection == 1) {
            guiCrafting.furnaceMenuGui(entity, hitEntity)
        }
    })
}

world.events.entityHit.subscribe(({ hitEntity, entity }) => {
    try {
        if (hitEntity.id == 'rift:apatosaurus' && hitEntity.hasTag('hasCraftingTable') && !hitEntity.hasTag('hasFurnace')) {
            mainCraftingTableGui(entity)
        }
        else if (hitEntity.id == 'rift:apatosaurus' && !hitEntity.hasTag('hasCraftingTable') && hitEntity.hasTag('hasFurnace')) {
            mainFurnaceGui(entity, hitEntity)
        }
        else if (hitEntity.id == 'rift:apatosaurus' && hitEntity.hasTag('hasCraftingTable') && hitEntity.hasTag('hasFurnace')) {
            mainBothGui(entity, hitEntity)
        }
    }
    catch (e) {}
})