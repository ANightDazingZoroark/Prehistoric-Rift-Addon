import { world } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui"
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

world.afterEvents.entityHurt.subscribe((ev) => {
    try {
        if (ev.hurtEntity.typeId == 'rift:apatosaurus' && ev.hurtEntity.hasTag('hasCraftingTable') && !ev.hurtEntity.hasTag('hasFurnace')) {
            mainCraftingTableGui(ev.damageSource.damagingEntity)
        }
        else if (ev.hurtEntity.typeId == 'rift:apatosaurus' && !ev.hurtEntity.hasTag('hasCraftingTable') && ev.hurtEntity.hasTag('hasFurnace')) {
            mainFurnaceGui(ev.damageSource.damagingEntity, ev.hurtEntity)
        }
        else if (ev.hurtEntity.typeId == 'rift:apatosaurus' && ev.hurtEntity.hasTag('hasCraftingTable') && ev.hurtEntity.hasTag('hasFurnace')) {
            mainBothGui(ev.damageSource.damagingEntity, ev.hurtEntity)
        }
    }
    catch (e) {}
})