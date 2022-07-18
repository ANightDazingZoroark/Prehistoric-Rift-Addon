import { ActionFormData } from "mojang-minecraft-ui"

export const apatosaurusCraftables = [
    {
        itemName: "Stick",
        itemId: "stick",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    item: "planks",
                    amount: 1,
                    itemData: "any"
                },
                {
                    item: "crimson_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "warped_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "mangrove_planks",
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
        itemId: "bowl",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    item: "planks",
                    amount: 1
                },
                {
                    item: "crimson_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "warped_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    item: "mangrove_planks",
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
        itemId: "planks",
        craftingItems: {
            itemName: "Oak Log",
            item: "log",
            amount: 1,
            itemData: 0
        },
        outputAmount: 4,
        outputData: 0
    },
    { //spruce planks
        itemName: "Spruce Planks",
        itemId: "planks",
        craftingItems: {
            itemName: "Spruce Log",
            item: "log",
            amount: 1,
            itemData: 1
        },
        outputAmount: 4,
        outputData: 1
    },
    { //birch planks
        itemName: "Birch Planks",
        itemId: "planks",
        itemData: 2,
        craftingItems: {
            itemName: "Birch Log",
            item: "log",
            amount: 1,
            itemData: 2
        },
        outputAmount: 4,
        outputData: 2
    },
    { //jungle planks
        itemName: "Jungle Planks",
        itemId: "planks",
        itemData: 3,
        craftingItems: {
            itemName: "Jungle Log",
            item: "log",
            amount: 1,
            itemData: 3
        },
        outputAmount: 4,
        outputData: 3
    },
    { //acacia planks
        itemName: "Acacia Planks",
        itemId: "planks",
        craftingItems: {
            itemName: "Acacia Log",
            item: "log2",
            amount: 1,
            itemData: 0
        },
        outputAmount: 4,
        outputData: 4
    },
    { //dark oak planks
        itemName: "Dark Oak Planks",
        itemId: "planks",
        craftingItems: {
            itemName: "Dark Oak Log",
            item: "log2",
            amount: 1,
            itemData: 1
        },
        outputAmount: 4,
        outputData: 0
    },
    { //mangrove planks
        itemName: "Mangrove Planks",
        itemId: "mangrove_planks",
        itemData: 0,
        craftingItems: {
            itemName: "Mangrove Log",
            item: "mangrove_log",
            amount: 1,
            itemData: 0
        },
        outputAmount: 4,
        outputData: 0
    },
    { //crimson planks
        itemName: "Crimson Planks",
        itemId: "crimson_planks",
        itemData: 0,
        craftingItems: {
            itemName: "Crimson Stem",
            item: "crimson_stem",
            amount: 1,
            itemData: 0
        },
        outputAmount: 4,
        outputData: 0
    },
    { //warped planks
        itemName: "Warped Planks",
        itemId: "warped_planks",
        itemData: 0,
        craftingItems: {
            itemName: "Warped Stem",
            item: "warped_stem",
            amount: 1,
            itemData: 0
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

function guiCraftingCrafterGui(entity, selectedItem) {
    let craftingRequirements = []

    if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
        let craftingItemsMap = apatosaurusCraftables[selectedItem].craftingItems.anyOf.map(x => x.item)
        let planksVariants = ['planks', 'crimson_planks', 'warped_planks', 'mangrove_planks']
        if (planksVariants.every(y => { return craftingItemsMap.includes(y) })) {
            craftingRequirements.push('Planks ('+apatosaurusCraftables[selectedItem].craftingItems.anyOf[0].amount+'x)')
        }
        else {
            for (let i = 0; i < apatosaurusCraftables[selectedItem].craftingItems.anyOf.length; i++) {
                craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].item+' ('+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].amount+'x)')
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

    if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
        for (let j = 0; j < apatosaurusCraftables[selectedItem].craftingItems.anyOf.length; j++) {
            craftingIngredients.push({itemId: apatosaurusCraftables[selectedItem].craftingItems.anyOf[j].item, amount: apatosaurusCraftables[selectedItem].craftingItems.anyOf[j].amount, itemData: apatosaurusCraftables[selectedItem].craftingItems.anyOf[j].itemData})
        }
    }
    else {
        craftingIngredients.push({itemId: apatosaurusCraftables[selectedItem].craftingItems.item, amount: apatosaurusCraftables[selectedItem].craftingItems.amount, itemData: apatosaurusCraftables[selectedItem].craftingItems.itemData})
    }
    console.warn(JSON.stringify(craftingIngredients))

    // for (let i = entity[i].getComponent('inventory').inventorySize - 1; i >= 0; i--) {
    //     if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
    //         try {}
    //         catch (e) {}
    //     }
    //     else {
    //         try {
    //             if (apatosaurusCraftables[selectedItem].craftingItems.item == entity.getComponent('inventory').container.getItem(i).id) {
    //                 foundCraftingIngredients.push(entity.getComponent('inventory').container.getItem(i).id)
    //             }
    //         }
    //         catch (e) {}
    //     }
    // }

    // guiCrafterFail.show(entity).then(result => {
    //     if (result.selection == 0) {
    //         craftingTableMenuGui(entity)
    //     }
    // })
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