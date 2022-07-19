import { ActionFormData, ModalFormData } from "mojang-minecraft-ui"

export const apatosaurusCraftables = [
    {
        itemName: "Stick",
        itemId: "minecraft:stick",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: -1
                },
                {
                    item: "minecraft:crimson_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "minecraft:warped_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "minecraft:mangrove_planks",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    },
    {
        itemName: "Bowl",
        itemId: "minecraft:bowl",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: -1
                },
                {
                    item: "minecraft:crimson_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "minecraft:warped_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "minecraft:mangrove_planks",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    },
    { //oak planks
        itemName: "Oak Planks",
        itemId: "minecraft:planks",
        craftingItems: {
            anyOf: [
                {
                    itemName: "Oak Log",
                    item: "minecraft:log",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stripped Oak Log",
                    item: "minecraft:stripped_oak_log",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    },
    { //spruce planks
        itemName: "Spruce Planks",
        itemId: "minecraft:planks",
        craftingItems: {
            anyOf: [
                {
                    itemName: "Spruce Log",
                    item: "minecraft:log",
                    amount: 1,
                    itemData: 1
                },
                {
                    itemName: "Stripped Spruce Log",
                    item: "minecraft:stripped_spruce_log",
                    amount: 1,
                    itemData: 1
                }
            ]
        },
        outputAmount: 4,
        outputData: 1
    },
    { //birch planks
        itemName: "Birch Planks",
        itemId: "minecraft:planks",
        itemData: 2,
        craftingItems: {
            anyOf: [
                {
                    itemName: "Birch Log",
                    item: "minecraft:log",
                    amount: 1,
                    itemData: 2
                },
                {
                    itemName: "Stripped Birch Log",
                    item: "minecraft:stripped_spruce_log",
                    amount: 1,
                    itemData: 2
                }
            ]
        },
        outputAmount: 4,
        outputData: 2
    },
    { //jungle planks
        itemName: "Jungle Planks",
        itemId: "minecraft:planks",
        itemData: 3,
        craftingItems: {
            anyOf: [
                {
                    itemName: "Jungle Log",
                    item: "minecraft:log",
                    amount: 1,
                    itemData: 3
                },
                {
                    itemName: "Stripped Jungle Log",
                    item: "minecraft:stripped_jungle_log",
                    amount: 1,
                    itemData: 3
                }
            ]
        },
        outputAmount: 4,
        outputData: 3
    },
    { //acacia planks
        itemName: "Acacia Planks",
        itemId: "minecraft:planks",
        craftingItems: {
            anyOf: [
                {
                    itemName: "Acacia Log",
                    item: "minecraft:log2",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stripped Acacia Log",
                    item: "minecraft:stripped_acacia_log",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 4
    },
    { //dark oak planks
        itemName: "Dark Oak Planks",
        itemId: "minecraft:planks",
        craftingItems: {
            anyOf: [
                {
                    itemName: "Dark Oak Log",
                    item: "minecraft:log2",
                    amount: 1,
                    itemData: 1
                },
                {
                    itemName: "Stripped Dark Oak Log",
                    item: "minecraft:stripped_dark_oak_log",
                    amount: 1,
                    itemData: 1
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    },
    { //mangrove planks
        itemName: "Mangrove Planks",
        itemId: "minecraft:mangrove_planks",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    itemName: "Mangrove Log",
                    item: "minecraft:mangrove_log",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stripped Mangrove Log",
                    item: "minecraft:stripped_mangrove_log",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    },
    { //crimson planks
        itemName: "Crimson Planks",
        itemId: "minecraft:crimson_planks",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    itemName: "Crimson Stem",
                    item: "minecraft:crimson_stem",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stripped Crimson Stem",
                    item: "minecraft:stripped_crimson_stem",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    },
    { //warped planks
        itemName: "Warped Planks",
        itemId: "minecraft:warped_planks",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    itemName: "Warped Stem",
                    item: "minecraft:warped_stem",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stripped Warped Stem",
                    item: "minecraft:stripped_warped_stem",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 4,
        outputData: 0
    }
]

export const guiCraftingIndex = new ActionFormData()
.title('Crafting Menu')
.button('Search')
for (let i = 0; i < apatosaurusCraftables.length; i++) {
    guiCraftingIndex.button(apatosaurusCraftables[i].itemName)
}

export let guiCraftingCrafter = new ActionFormData()
.button('Craft')
.button('Go Back')

const guiCrafterFail = new ActionFormData()
.title('Crafting')
.body('You\'re lacking the appropriate item/s for crafting this item!')
.button('Go back')

export function craftingTableMenuGui(entity) {
    guiCraftingIndex.show(entity).then(result => {
        if (result.selection > 0) {
            guiCraftingCrafterGui(entity, result.selection - 1)
        }
    })
}

export function furnaceMenuGui(entity, hitEntity) {
    const guiFurnaceIndex = new ModalFormData()
    .title('Furnace Menu')
    .toggle('Activate Smelting', hitEntity.hasTag('smelting') ? true : false)
    .show(entity).then(result => {
        if (result.formValues[0] == true) {
            hitEntity.addTag('smelting')
            entity.runCommand(`tellraw @s {"rawtext":[{"text":"Smelting mode activated. All items in this creature's inventory will be used as both fuel and smelting materials at the same time"}]}`)
        }
        else {
            hitEntity.removeTag('smelting')
            entity.runCommand(`tellraw @s {"rawtext":[{"text":"Smelting mode deactivated"}]}`)
        }
    })
}

function guiCraftingCrafterGui(entity, selectedItem) {
    let craftingRequirements = []

    if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
        let craftingItemsMap = apatosaurusCraftables[selectedItem].craftingItems.anyOf.map(x => x.item)
        let planksVariants = ['minecraft:planks', 'minecraft:crimson_planks', 'minecraft:warped_planks', 'minecraft:mangrove_planks']
        if (planksVariants.every(y => { return craftingItemsMap.includes(y) })) {
            craftingRequirements.push('Planks ('+apatosaurusCraftables[selectedItem].craftingItems.anyOf[0].amount+'x)')
        }
        else {
            for (let i = 0; i < apatosaurusCraftables[selectedItem].craftingItems.anyOf.length; i++) {
                if (i == apatosaurusCraftables[selectedItem].craftingItems.anyOf.length - 1) {
                    craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].amount+'x)')
                }
                else {
                    craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].amount+'x), or')
                }
            }
        }
    }
    else {
        craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.amount+'x)')
    }

    guiCraftingCrafter.title(apatosaurusCraftables[selectedItem].itemName)
    guiCraftingCrafter.body('Crafting this item requires the ff: \n\n'+craftingRequirements.join("\n"))
    guiCraftingCrafter.show(entity).then(result => {
        if (result.selection == 0) {
            craftItem(entity, selectedItem)
        }
        if (result.selection == 1) {
            craftingTableMenuGui(entity)
        }
    })
}

function craftItem(entity, selectedItem) {
    let craftingIngredients = []
    let foundCraftingIngredients = []
    let newFoundCraftingIngredients = []
    let canCraft = false

    //get array of required crafting ingredients
    if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
        for (let j = 0; j < apatosaurusCraftables[selectedItem].craftingItems.anyOf.length; j++) {
            craftingIngredients.push({itemId: apatosaurusCraftables[selectedItem].craftingItems.anyOf[j].item, amount: apatosaurusCraftables[selectedItem].craftingItems.anyOf[j].amount, itemData: apatosaurusCraftables[selectedItem].craftingItems.anyOf[j].itemData})
        }
    }
    else {
        craftingIngredients.push({itemId: apatosaurusCraftables[selectedItem].craftingItems.item, amount: apatosaurusCraftables[selectedItem].craftingItems.amount, itemData: apatosaurusCraftables[selectedItem].craftingItems.itemData})
    }

    //get array of required crafting ingredients found in the player's inventory
    for (let i = entity.getComponent('inventory').container.size - 1; i >= 0; i--) {
        if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
            let craftingItemsMap = apatosaurusCraftables[selectedItem].craftingItems.anyOf.map(x => x.item)
            try {
                if (craftingItemsMap.includes(entity.getComponent('inventory').container.getItem(i).id)) {
                    foundCraftingIngredients.push({itemId: entity.getComponent('inventory').container.getItem(i).id, amount: entity.getComponent('inventory').container.getItem(i).amount, itemData: entity.getComponent('inventory').container.getItem(i).data})
                }
                else {
                    continue
                }
            }
            catch (e) {
                continue
            }
        }
        else {
            try {
                if (apatosaurusCraftables[selectedItem].craftingItems.item == entity.getComponent('inventory').container.getItem(i).id) {
                    foundCraftingIngredients.push({itemId: entity.getComponent('inventory').container.getItem(i).id, amount: entity.getComponent('inventory').container.getItem(i).amount, itemData: entity.getComponent('inventory').container.getItem(i).data})
                }
                else {
                    continue
                }
            }
            catch (e) {
                continue
            }
        }
    }

    foundCraftingIngredients.forEach(item => {
        const index = newFoundCraftingIngredients.findIndex(_item => _item.item === item.item && _item.id === item.id)
        if (index === -1) newFoundCraftingIngredients.push(item)
        else newFoundCraftingIngredients[index].amount += item.amount
    })

    //compare craftingIngredients and foundCraftingIngredients
    if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
        for (let m = 0; m < craftingIngredients.length; m++) {
            for (let n = 0; n < newFoundCraftingIngredients.length; n++) {
                try {
                    if ((newFoundCraftingIngredients[n].itemId == craftingIngredients[m].itemId) && ((craftingIngredients[m].itemData == -1) || (craftingIngredients[m].itemData == newFoundCraftingIngredients[n].itemData)) && (newFoundCraftingIngredients[n].amount >= craftingIngredients[m].amount)) {
                        canCraft = true
                    }
                }
                catch (e) {}
            }
        }
    }
    else {
        for (let m = 0; m < newFoundCraftingIngredients.length; m++) {
            try {
                if (craftingIngredients[0].itemId == newFoundCraftingIngredients[m].itemId && (craftingIngredients[0].itemData == -1 ? true : (craftingIngredients[0].itemData == newFoundCraftingIngredients[m].itemData)) && craftingIngredients[0].amount <= newFoundCraftingIngredients[m].amount) {
                    canCraft = true
                }
            }
            catch (e) {}
        }
    }

    if (canCraft == true) {
        if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
            entity.runCommand(`give @s `+apatosaurusCraftables[selectedItem].itemId+` `+apatosaurusCraftables[selectedItem].outputAmount+` `+apatosaurusCraftables[selectedItem].outputData)
            for (let i = 0; i < apatosaurusCraftables[selectedItem].craftingItems.anyOf.length; i++) {
                try {
                    if (entity.runCommand(`clear @s `+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].item+` `+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].itemData+` `+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].amount)) {
                        break
                    }
                }
                catch (e) {}
            }
        }
        else {
            entity.runCommand(`give @s `+apatosaurusCraftables[selectedItem].itemId+` `+apatosaurusCraftables[selectedItem].outputAmount+` `+apatosaurusCraftables[selectedItem].outputData)
            entity.runCommand(`clear @s `+apatosaurusCraftables[selectedItem].craftingItems.item+` `+apatosaurusCraftables[selectedItem].craftingItems.itemData+` `+apatosaurusCraftables[selectedItem].craftingItems.amount)
        }
    }
    else {
        guiCrafterFail.show(entity).then(result => {
            if (result.selection == 0) {
                craftingTableMenuGui(entity)
            }
        })
    }
}

//other things that will be craftable later on
// .button('Wooden Oak Slab')
// .button('Wooden Spruce Slab')
// .button('Wooden Birch Slab')
// .button('Wooden Jungle Slab')
// .button('Wooden Acacia Slab')
// .button('Wooden Dark Oak Slab')
// .button('Wooden Mangrove Slab')
// .button('Wooden Crimson Slab')
// .button('Wooden Warped Slab')

// .button('Wooden Oak Stairs')
// .button('Wooden Spruce Stairs')
// .button('Wooden Birch Stairs')
// .button('Wooden Jungle Stairs')
// .button('Wooden Acacia Stairs')
// .button('Wooden Dark Oak Stairs')
// .button('Wooden Mangrove Stairs')
// .button('Wooden Crimson Stairs')
// .button('Wooden Warped Stairs')

// .button('Wooden Axe')
// .button('Wooden Hoe')
// .button('Wooden Pickaxe')
// .button('Wooden Shovel')
// .button('Wooden Sword')

// .button('Stone Axe')
// .button('Stone Hoe')
// .button('Stone Pickaxe')
// .button('Stone Shovel')
// .button('Stone Sword')

// .button('Iron Axe')
// .button('Iron Hoe')
// .button('Iron Pickaxe')
// .button('Iron Shovel')
// .button('Iron Sword')

// .button('Gold Axe')
// .button('Gold Hoe')
// .button('Gold Pickaxe')
// .button('Gold Shovel')
// .button('Gold Sword')

// .button('Diamond Axe')
// .button('Diamond Hoe')
// .button('Diamond Pickaxe')
// .button('Diamond Shovel')
// .button('Diamond Sword')