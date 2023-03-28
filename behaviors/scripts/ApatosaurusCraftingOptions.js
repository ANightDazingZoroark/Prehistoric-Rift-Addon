import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import { testForItem } from "./externals/itemmanagement"

const apatosaurusCraftables = [
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
    {
        itemName: "Bucket",
        itemId: "minecraft:bucket",
        itemData: 0,
        craftingItems: {
            itemName: "Iron Ingot",
            item: "minecraft:iron_ingot",
            amount: 3,
            itemData: 0
        },
        outputAmount: 1,
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
    },
    { //oak slab
        itemName: "Oak Wood Slab",
        itemId: "minecraft:wooden_slab",
        craftingItems: {
            itemName: "Oak Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //spruce slab
        itemName: "Spruce Wood Slab",
        itemId: "minecraft:wooden_slab",
        craftingItems: {
            itemName: "Spruce Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 1
        },
        outputAmount: 6,
        outputData: 1
    },
    { //birch slab
        itemName: "Birch Wood Slab",
        itemId: "minecraft:wooden_slab",
        craftingItems: {
            itemName: "Birch Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 2
        },
        outputAmount: 6,
        outputData: 2
    },
    { //jungle slab
        itemName: "Jungle Wood Slab",
        itemId: "minecraft:wooden_slab",
        craftingItems: {
            itemName: "Jungle Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 3
        },
        outputAmount: 6,
        outputData: 3
    },
    { //acacia slab
        itemName: "Acacia Wood Slab",
        itemId: "minecraft:wooden_slab",
        craftingItems: {
            itemName: "Acacia Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 4
        },
        outputAmount: 6,
        outputData: 4
    },
    { //dark oak slab
        itemName: "Dark Oak Wood Slab",
        itemId: "minecraft:wooden_slab",
        craftingItems: {
            itemName: "Dark Oak Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 5
        },
        outputAmount: 6,
        outputData: 5
    },
    { //mangrove slab
        itemName: "Mangrove Wood Slab",
        itemId: "minecraft:mangrove_slab",
        craftingItems: {
            itemName: "Mangrove Planks",
            item: "minecraft:mangrove_planks",
            amount: 1,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //crimson slab
        itemName: "Crimson Slab",
        itemId: "minecraft:crimson_slab",
        craftingItems: {
            itemName: "Crimson Planks",
            item: "minecraft:crimson_planks",
            amount: 1,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //warped slab
        itemName: "Warped Slab",
        itemId: "minecraft:warped_slab",
        craftingItems: {
            itemName: "Warped Planks",
            item: "minecraft:warped_planks",
            amount: 1,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //oak stairs
        itemName: "Oak Wood Stairs",
        itemId: "minecraft:oak_stairs",
        craftingItems: {
            itemName: "Oak Planks",
            item: "minecraft:planks",
            amount: 3,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //spruce stairs
        itemName: "Spruce Wood Stairs",
        itemId: "minecraft:spruce_stairs",
        craftingItems: {
            itemName: "Spruce Planks",
            item: "minecraft:planks",
            amount: 3,
            itemData: 1
        },
        outputAmount: 6,
        outputData: 0
    },
    { //birch stairs
        itemName: "Birch Wood Stairs",
        itemId: "minecraft:birch_stairs",
        craftingItems: {
            itemName: "Birch Planks",
            item: "minecraft:planks",
            amount: 3,
            itemData: 2
        },
        outputAmount: 6,
        outputData: 0
    },
    { //jungle stairs
        itemName: "Jungle Wood Stairs",
        itemId: "minecraft:jungle_stairs",
        craftingItems: {
            itemName: "Jungle Planks",
            item: "minecraft:planks",
            amount: 3,
            itemData: 3
        },
        outputAmount: 6,
        outputData: 0
    },
    { //acacia stairs
        itemName: "Acacia Wood Stairs",
        itemId: "minecraft:acacia_stairs",
        craftingItems: {
            itemName: "Acacia Planks",
            item: "minecraft:planks",
            amount: 3,
            itemData: 4
        },
        outputAmount: 6,
        outputData: 0
    },
    { //dark oak stairs
        itemName: "Dark Oak Wood Stairs",
        itemId: "minecraft:dark_oak_stairs",
        craftingItems: {
            itemName: "Dark Oak Planks",
            item: "minecraft:planks",
            amount: 3,
            itemData: 5
        },
        outputAmount: 6,
        outputData: 0
    },
    { //mangrove stairs
        itemName: "Mangrove Wood Stairs",
        itemId: "minecraft:oak_stairs",
        craftingItems: {
            itemName: "Mangrove Planks",
            item: "minecraft:mangrve_planks",
            amount: 3,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //crimson stairs
        itemName: "Crimson Wood Stairs",
        itemId: "minecraft:crimson_stairs",
        craftingItems: {
            itemName: "Crimson Planks",
            item: "minecraft:crimson_planks",
            amount: 3,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //warped stairs
        itemName: "Warped Wood Stairs",
        itemId: "minecraft:warped_stairs",
        craftingItems: {
            itemName: "Warped Planks",
            item: "minecraft:warped_planks",
            amount: 3,
            itemData: 0
        },
        outputAmount: 6,
        outputData: 0
    },
    { //chest
        itemName: "Chest",
        itemId: "minecraft:chest",
        itemData: 0,
        craftingItems: {
            anyOf: [
                {
                    item: "minecraft:planks",
                    amount: 4,
                    itemData: -1
                },
                {
                    item: "minecraft:crimson_planks",
                    amount: 4,
                    itemData: 0
                },
                {
                    item: "minecraft:warped_planks",
                    amount: 4,
                    itemData: 0
                },
                {
                    item: "minecraft:mangrove_planks",
                    amount: 4,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //oak boat
        itemName: "Oak Boat",
        itemId: "minecraft:oak_boat",
        craftingItems: {
            itemName: "Oak Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 0
        },
        outputAmount: 1,
        outputData: 0
    },
    { //spruce boat
        itemName: "Spruce Boat",
        itemId: "minecraft:spruce_boat",
        craftingItems: {
            itemName: "Spruce Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 1
        },
        outputAmount: 1,
        outputData: 0
    },
    { //birch boat
        itemName: "Birch Boat",
        itemId: "minecraft:birch_boat",
        craftingItems: {
            itemName: "Birch Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 2
        },
        outputAmount: 1,
        outputData: 0
    },
    { //jungle boat
        itemName: "Jungle Boat",
        itemId: "minecraft:jungle_boat",
        craftingItems: {
            itemName: "Jungle Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 3
        },
        outputAmount: 1,
        outputData: 0
    },
    { //acacia boat
        itemName: "Acacia Boat",
        itemId: "minecraft:acacia_boat",
        craftingItems: {
            itemName: "Acacia Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 4
        },
        outputAmount: 1,
        outputData: 0
    },
    { //dark oak boat
        itemName: "Dark Oak Boat",
        itemId: "minecraft:dark_oak_boat",
        craftingItems: {
            itemName: "Oak Planks",
            item: "minecraft:planks",
            amount: 1,
            itemData: 5
        },
        outputAmount: 1,
        outputData: 0
    },
    { //mangrove boat
        itemName: "Mangrove Boat",
        itemId: "minecraft:mangrove_boat",
        craftingItems: {
            itemName: "Mangrove Planks",
            item: "minecraft:mangrove_planks",
            amount: 1,
            itemData: 0
        },
        outputAmount: 1,
        outputData: 0
    },
    { //oak boat with chest
        itemName: "Oak Boat with Chest",
        itemId: "minecraft:oak_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Oak Planks",
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //spruce boat with chest
        itemName: "Spruce Boat with Chest",
        itemId: "minecraft:spruce_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Spruce Planks",
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: 1
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //birch boat with chest
        itemName: "Birch Boat with Chest",
        itemId: "minecraft:birch_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Birch Planks",
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: 2
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //jungle boat with chest
        itemName: "Jungle Boat with Chest",
        itemId: "minecraft:jungle_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Jungle Planks",
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: 3
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //acacia boat with chest
        itemName: "Acacia Boat with Chest",
        itemId: "minecraft:acacia_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Acacia Planks",
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: 4
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //dark oak boat with chest
        itemName: "Dark Oak Boat with Chest",
        itemId: "minecraft:dark_oak_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Dark Oak Planks",
                    item: "minecraft:planks",
                    amount: 1,
                    itemData: 5
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //mangrove boat with chest
        itemName: "Mangrove Boat with Chest",
        itemId: "minecraft:mangrove_oak_chest_boat",
        craftingItems: {
            allOf: [
                {
                    itemName: "Mangrove Planks",
                    item: "minecraft:mangrove_planks",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Chest",
                    item: "minecraft:chest",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //wooden axe
        itemName: "Wooden Axe",
        itemId: "minecraft:wooden_axe",
        craftingItems: {
            allOf: [
                {
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
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //wooden hoe
        itemName: "Wooden Hoe",
        itemId: "minecraft:wooden_hoe",
        craftingItems: {
            allOf: [
                {
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
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //wooden pickaxe
        itemName: "Wooden Pickaxe",
        itemId: "minecraft:wooden_pickaxe",
        craftingItems: {
            allOf: [
                {
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
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //wooden shovel
        itemName: "Wooden Shovel",
        itemId: "minecraft:wooden_shovel",
        craftingItems: {
            allOf: [
                {
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
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //wooden sword
        itemName: "Wooden Sword",
        itemId: "minecraft:wooden_sword",
        craftingItems: {
            allOf: [
                {
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
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //stone axe
        itemName: "Stone Axe",
        itemId: "minecraft:stone_axe",
        craftingItems: {
            allOf: [
                {
                    anyOf: [
                        {
                            itemName: "Cobblestone",
                            item: "minecraft:cobblestone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Blackstone",
                            item: "minecraft:blackstone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Cobbled Deepslate",
                            item: "minecraft:cobbled_deepslate",
                            amount: 1,
                            itemData: 0
                        }
                    ]
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //stone hoe
        itemName: "Stone Hoe",
        itemId: "minecraft:stone_hoe",
        craftingItems: {
            allOf: [
                {
                    anyOf: [
                        {
                            itemName: "Cobblestone",
                            item: "minecraft:cobblestone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Blackstone",
                            item: "minecraft:blackstone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Cobbled Deepslate",
                            item: "minecraft:cobbled_deepslate",
                            amount: 1,
                            itemData: 0
                        }
                    ]
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //stone pickaxe
        itemName: "Stone Pickaxe",
        itemId: "minecraft:stone_pickaxe",
        craftingItems: {
            allOf: [
                {
                    anyOf: [
                        {
                            itemName: "Cobblestone",
                            item: "minecraft:cobblestone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Blackstone",
                            item: "minecraft:blackstone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Cobbled Deepslate",
                            item: "minecraft:cobbled_deepslate",
                            amount: 1,
                            itemData: 0
                        }
                    ]
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //stone shovel
        itemName: "Stone Shovel",
        itemId: "minecraft:stone_shovel",
        craftingItems: {
            allOf: [
                {
                    anyOf: [
                        {
                            itemName: "Cobblestone",
                            item: "minecraft:cobblestone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Blackstone",
                            item: "minecraft:blackstone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Cobbled Deepslate",
                            item: "minecraft:cobbled_deepslate",
                            amount: 1,
                            itemData: 0
                        }
                    ]
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //stone sword
        itemName: "Stone Sword",
        itemId: "minecraft:stone_sword",
        craftingItems: {
            allOf: [
                {
                    anyOf: [
                        {
                            itemName: "Cobblestone",
                            item: "minecraft:cobblestone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Blackstone",
                            item: "minecraft:blackstone",
                            amount: 1,
                            itemData: 0
                        },
                        {
                            itemName: "Cobbled Deepslate",
                            item: "minecraft:cobbled_deepslate",
                            amount: 1,
                            itemData: 0
                        }
                    ]
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //iron axe
        itemName: "Iron Axe",
        itemId: "minecraft:iron_axe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Iron Ingot",
                    item: "minecraft:iron_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //iron hoe
        itemName: "Iron Hoe",
        itemId: "minecraft:iron_hoe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Iron Ingot",
                    item: "minecraft:iron_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //iron pickaxe
        itemName: "Iron Pickaxe",
        itemId: "minecraft:iron_pickaxe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Iron Ingot",
                    item: "minecraft:iron_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //iron shovel
        itemName: "Iron Shovel",
        itemId: "minecraft:iron_shovel",
        craftingItems: {
            allOf: [
                {
                    itemName: "Iron Ingot",
                    item: "minecraft:iron_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //iron sword
        itemName: "Iron Sword",
        itemId: "minecraft:iron_sword",
        craftingItems: {
            allOf: [
                {
                    itemName: "Iron Ingot",
                    item: "minecraft:iron_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //gold axe
        itemName: "Gold Axe",
        itemId: "minecraft:gold_axe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Gold Ingot",
                    item: "minecraft:gold_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //gold hoe
        itemName: "Gold Hoe",
        itemId: "minecraft:gold_hoe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Gold Ingot",
                    item: "minecraft:gold_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //gold pickaxe
        itemName: "Gold Pickaxe",
        itemId: "minecraft:gold_pickaxe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Gold Ingot",
                    item: "minecraft:gold_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //gold shovel
        itemName: "Gold Shovel",
        itemId: "minecraft:gold_shovel",
        craftingItems: {
            allOf: [
                {
                    itemName: "Gold Ingot",
                    item: "minecraft:gold_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //gold sword
        itemName: "Gold Sword",
        itemId: "minecraft:gold_sword",
        craftingItems: {
            allOf: [
                {
                    itemName: "Gold Ingot",
                    item: "minecraft:gold_ingot",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //diamond axe
        itemName: "Diamond Axe",
        itemId: "minecraft:diamond_axe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Diamond",
                    item: "minecraft:diamond",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //diamond hoe
        itemName: "Diamond Hoe",
        itemId: "minecraft:diamond_hoe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Diamond",
                    item: "minecraft:diamond",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //diamond pickaxe
        itemName: "Diamond Pickaxe",
        itemId: "minecraft:diamond_pickaxe",
        craftingItems: {
            allOf: [
                {
                    itemName: "Diamond",
                    item: "minecraft:diamond",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //diamond shovel
        itemName: "Diamond Shovel",
        itemId: "minecraft:diamond_shovel",
        craftingItems: {
            allOf: [
                {
                    itemName: "Diamond",
                    item: "minecraft:diamond",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    },
    { //diamond sword
        itemName: "Diamond Sword",
        itemId: "minecraft:diamond_sword",
        craftingItems: {
            allOf: [
                {
                    itemName: "Diamond",
                    item: "minecraft:diamond",
                    amount: 1,
                    itemData: 0
                },
                {
                    itemName: "Stick",
                    item: "minecraft:stick",
                    amount: 1,
                    itemData: 0
                }
            ]
        },
        outputAmount: 1,
        outputData: 0
    }
]

export const apatosaurusSmeltables = [
    {
        itemId: 'minecraft:porkchop',
        itemData: 0,
        outputId: 'minecraft:cooked_porkchop',
        outputData: 0
    },
    {
        itemId: 'minecraft:beef',
        itemData: 0,
        outputId: 'minecraft:cooked_beef',
        outputData: 0
    },
    {
        itemId: 'minecraft:chicken',
        itemData: 0,
        outputId: 'minecraft:cooked_chicken',
        outputData: 0
    },
    {
        itemId: 'minecraft:cod',
        itemData: 0,
        outputId: 'minecraft:cooked_cod',
        outputData: 0
    },
    {
        itemId: 'minecraft:salmon',
        itemData: 0,
        outputId: 'minecraft:cooked_salmon',
        outputData: 0
    },
    {
        itemId: 'minecraft:potato',
        itemData: 0,
        outputId: 'minecraft:baked_potato',
        outputData: 0
    },
    {
        itemId: 'minecraft:mutton',
        itemData: 0,
        outputId: 'minecraft:cooked_mutton',
        outputData: 0
    },
    {
        itemId: 'minecraft:rabbit',
        itemData: 0,
        outputId: 'minecraft:cooked_rabbit',
        outputData: 0
    },
    {
        itemId: 'minecraft:kelp',
        itemData: 0,
        outputId: 'minecraft:dried_kelp',
        outputData: 0
    },
    {
        itemId: 'rift:raw_dodo_meat',
        itemData: 0,
        outputId: 'rift:cooked_dodo_meat',
        outputData: 0
    },
    {
        itemId: 'rift:raw_exotic_meat',
        itemData: 0,
        outputId: 'rift:cooked_exotic_meat',
        outputData: 0
    },
    {
        itemId: 'rift:raw_hadrosaur_meat',
        itemData: 0,
        outputId: 'rift:cooked_hadrosaur_meat',
        outputData: 0
    },
    {
        itemId: 'rift:raw_hemolymph',
        itemData: 0,
        outputId: 'rift:boiled_hemolymph',
        outputData: 0
    },
    {
        itemId: 'rift:raw_megapiranha',
        itemData: 0,
        outputId: 'rift:cooked_megapiranha',
        outputData: 0
    },
    {
        itemId: 'minecraft:raw_copper',
        itemData: 0,
        outputId: 'minecraft:copper_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:raw_iron',
        itemData: 0,
        outputId: 'minecraft:iron_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:raw_gold',
        itemData: 0,
        outputId: 'minecraft:gold_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:nether_gold_ore',
        itemData: 0,
        outputId: 'minecraft:raw_gold',
        outputData: 0
    },
    {
        itemId: 'minecraft:ancient_debris',
        itemData: 0,
        outputId: 'minecraft:netherite_scrap',
        outputData: 0
    },
    {
        itemId: 'minecraft:copper_ore',
        itemData: 0,
        outputId: 'minecraft:copper_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_copper_ore',
        itemData: 0,
        outputId: 'minecraft:copper_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:diamond_ore',
        itemData: 0,
        outputId: 'minecraft:diamond',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_diamond_ore',
        itemData: 0,
        outputId: 'minecraft:diamond',
        outputData: 0
    },
    {
        itemId: 'minecraft:gold_ore',
        itemData: 0,
        outputId: 'minecraft:gold_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_gold_ore',
        itemData: 0,
        outputId: 'minecraft:gold_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:iron_ore',
        itemData: 0,
        outputId: 'minecraft:iron_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_iron_ore',
        itemData: 0,
        outputId: 'minecraft:iron_ingot',
        outputData: 0
    },
    {
        itemId: 'minecraft:lapis_ore',
        itemData: 0,
        outputId: 'minecraft:lapis_lazuli',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_lapis_ore',
        itemData: 0,
        outputId: 'minecraft:lapis_lazuli',
        outputData: 0
    },
    {
        itemId: 'minecraft:redstone_ore',
        itemData: 0,
        outputId: 'minecraft:redstone',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_redstone_ore',
        itemData: 0,
        outputId: 'minecraft:redstone',
        outputData: 0
    },
    {
        itemId: 'minecraft:coal_ore',
        itemData: 0,
        outputId: 'minecraft:coal',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_coal_ore',
        itemData: 0,
        outputId: 'minecraft:coal',
        outputData: 0
    },
    {
        itemId: 'minecraft:emeral_ore',
        itemData: 0,
        outputId: 'minecraft:emerald',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_emerald_ore',
        itemData: 0,
        outputId: 'minecraft:emerald',
        outputData: 0
    },
    {
        itemId: 'minecraft:quartz_ore',
        itemData: 0,
        outputId: 'minecraft:quartz',
        outputData: 0
    },
    {
        itemId: 'minecraft:sand',
        itemData: -1,
        outputId: 'minecraft:glass',
        outputData: 0
    },
    {
        itemId: 'minecraft:cobblestone',
        itemData: 0,
        outputId: 'minecraft:stone',
        outputData: 0
    },
    {
        itemId: 'minecraft:sandstone',
        itemData: 0,
        outputId: 'minecraft:sandstone',
        outputData: 3
    },
    {
        itemId: 'minecraft:red_sandstone',
        itemData: 0,
        outputId: 'minecraft:red_sandstone',
        outputData: 3
    },
    {
        itemId: 'minecraft:stone',
        itemData: 0,
        outputId: 'minecraft:smooth_stone',
        outputData: 0
    },
    {
        itemId: 'minecraft:quartz_block',
        itemData: 0,
        outputId: 'minecraft:quartz_block',
        outputData: 3
    },
    {
        itemId: 'minecraft:clay_ball',
        itemData: 0,
        outputId: 'minecraft:brick',
        outputData: 0
    },
    {
        itemId: 'minecraft:netherrack',
        itemData: 0,
        outputId: 'minecraft:netherbrick',
        outputData: 0
    },
    {
        itemId: 'minecraft:nether_brick',
        itemData: 0,
        outputId: 'minecraft:cracked_nether_bricks',
        outputData: 0
    },
    {
        itemId: 'minecraft:basalt',
        itemData: 0,
        outputId: 'minecraft:smooth_basalt',
        outputData: 0
    },
    {
        itemId: 'minecraft:clay',
        itemData: 0,
        outputId: 'minecraft:hardened_clay',
        outputData: 0
    },
    {
        itemId: 'minecraft:stonebrick',
        itemData: 0,
        outputId: 'minecraft:stonebrick',
        outputData: 2
    },
    {
        itemId: 'minecraft:polished_blackstone_bricks',
        itemData: 0,
        outputId: 'minecraft:cracked_polished_blackstone_bricks',
        outputData: 0
    },
    {
        itemId: 'minecraft:cobbled_deepslate',
        itemData: 0,
        outputId: 'minecraft:deepslate',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_bricks',
        itemData: 0,
        outputId: 'minecraft:cracked_deepslate_bricks',
        outputData: 0
    },
    {
        itemId: 'minecraft:deepslate_tiles',
        itemData: 0,
        outputId: 'minecraft:cracked_deepslate_tiles',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 0,
        outputId: 'minecraft:white_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 1,
        outputId: 'minecraft:orange_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 2,
        outputId: 'minecraft:magenta_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 3,
        outputId: 'minecraft:light_blue_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 4,
        outputId: 'minecraft:yellow_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 5,
        outputId: 'minecraft:lime_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 6,
        outputId: 'minecraft:pink_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 7,
        outputId: 'minecraft:gray_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 8,
        outputId: 'minecraft:silver_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 9,
        outputId: 'minecraft:cyan_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 10,
        outputId: 'minecraft:purple_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 11,
        outputId: 'minecraft:blue_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 12,
        outputId: 'minecraft:brown_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 13,
        outputId: 'minecraft:green_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 14,
        outputId: 'minecraft:red_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:stained_hardened_clay',
        itemData: 15,
        outputId: 'minecraft:black_glazed_terracotta',
        outputData: 0
    },
    {
        itemId: 'minecraft:cactus',
        itemData: 0,
        outputId: 'minecraft:green_dye',
        outputData: 0
    },
    {
        itemId: 'minecraft:log',
        itemData: -1,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:log2',
        itemData: -1,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:crimson_stem',
        itemData: 0,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:warped_stem',
        itemData: 0,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:mangrove_log',
        itemData: 0,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:wood',
        itemData: -1,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:crimson_hyphae',
        itemData: 0,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:warped_hyphae',
        itemData: 0,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:mangrove_wood',
        itemData: 0,
        outputId: 'minecraft:charcoal',
        outputData: 0
    },
    {
        itemId: 'minecraft:chorus_fruit',
        itemData: 0,
        outputId: 'minecraft:popped_chorus_fruit',
        outputData: 0
    },
    {
        itemId: 'minecraft:sponge',
        itemData: 1,
        outputId: 'minecraft:sponge',
        outputData: 0
    },
    {
        itemId: 'minecraft:sea_pickle',
        itemData: 0,
        outputId: 'minecraft:lime_dye',
        outputData: 0
    },
    {
        itemId: 'rift:crude_oil',
        itemData: 0,
        outputId: 'minecraft:plastic_frame',
        outputData: 0
    }
]

export const apatosaurusFuel = [
    {
        itemId: 'minecraft:coal',
        itemData: 0,
        burnAmount: 8
    },
    {
        itemId: 'minecraft:charcoal',
        itemData: 0,
        burnAmount: 8
    },
    {
        itemId: 'minecraft:blaze_rod',
        itemData: 0,
        burnAmount: 12
    },
    {
        itemId: 'minecraft:stick',
        itemData: 0,
        burnAmount: 1
    },
    {
        itemId: 'minecraft:bamboo',
        itemData: 0,
        burnAmount: 1
    },
    {
        itemId: 'minecraft:coal_block',
        itemData: 0,
        burnAmount: 80
    },
    {
        itemId: 'minecraft:dried_kelp_block',
        itemData: 0,
        burnAmount: 20
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
        if (result.selection == 0) {
            guiCrafterSearch(entity)
        }
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
            hitEntity.triggerEvent('rift:start_smelting')
            entity.runCommandAsync(`tellraw @s {"rawtext":[{"text":"Smelting mode activated. All items in this creature's inventory will be used as both fuel and smelting materials at the same time"}]}`)
        }
        else {
            hitEntity.removeTag('smelting')
            hitEntity.triggerEvent('rift:stop_smelting')
            entity.runCommandAsync(`tellraw @s {"rawtext":[{"text":"Smelting mode deactivated"}]}`)
        }
    })
}

function guiCrafterSearch(entity) {
    let searchList = apatosaurusCraftables.map(x => x.itemName)
    const guiCrafterSearch = new ModalFormData()
    .title('Search')
    .textField("Search", "(e.x., Sticks)")
    .show(entity).then(result => {
        guiCrafterSearchResults(entity, searchList.map(element => { return element.toLowerCase()+':'+searchList.indexOf(element) }).filter((element) => element.includes(result.formValues[0].toLowerCase())))
    })
}

function guiCrafterSearchResults(entity, results) {
    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].split(' ')
        for (let j = 0; j < results[i].length; j++) {
            results[i][j] = results[i][j].charAt(0).toUpperCase() + results[i][j].substring(1)
        }
        results[i] = results[i].join(' ')
    }
    const guiCrafterSearchResults = new ActionFormData()
    .title('Search Results')
    .button('Return to Search')
    .button('Return to Index')
    for (let k = 0; k < results.length; k++) {
        guiCrafterSearchResults.button(results[k].split(':')[0])
    }
    guiCrafterSearchResults.show(entity).then(result => {
        if (result.selection == 0) {
            guiCrafterSearch(entity)
        }
        if (result.selection == 1) {
            craftingTableMenuGui(entity)
        }
        if (result.selection >= 2) {
            guiCraftingCrafterGui(entity, parseInt(results[result.selection - 2].substring(results[result.selection - 2].indexOf(':') + 1)))
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
    else if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('allOf')) {
        for (let i = 0; i < apatosaurusCraftables[selectedItem].craftingItems.allOf.length; i++) {
            if (apatosaurusCraftables[selectedItem].craftingItems.allOf[i].hasOwnProperty('anyOf')) {
                let craftingItemsMap = apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf.map(x => x.item)
                let planksVariants = ['minecraft:planks', 'minecraft:crimson_planks', 'minecraft:warped_planks', 'minecraft:mangrove_planks']
                if (planksVariants.every(y => { return craftingItemsMap.includes(y) })) {
                    craftingRequirements.push('Planks ('+apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[0].amount+'x), and')
                }
                else {
                    for (let j = 0; j < apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf.length; j++) {
                        if (j == apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf.length - 1) {
                            craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].amount+'x), and')
                        }
                        else {
                            craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].amount+'x), or')
                        }
                    }
                }
            }
            else {
                if (i == apatosaurusCraftables[selectedItem].craftingItems.allOf.length - 1) {
                    craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.allOf[i].itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.allOf[i].amount+'x)')
                }
                else {
                    craftingRequirements.push(apatosaurusCraftables[selectedItem].craftingItems.allOf[i].itemName+' ('+apatosaurusCraftables[selectedItem].craftingItems.allOf[i].amount+'x), and')
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
    if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('anyOf')) {
        let fails = 0
        for (let i = 0; i < apatosaurusCraftables[selectedItem].craftingItems.anyOf.length; i++) {
            if (testForItem(entity, apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].item, apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].itemData, '>=', apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].amount)) {
                entity.runCommandAsync(`give @s `+apatosaurusCraftables[selectedItem].itemId+` `+apatosaurusCraftables[selectedItem].outputAmount+` `+ apatosaurusCraftables[selectedItem].outputData)
                entity.runCommandAsync(`clear @s `+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].item+` `+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].itemData+` `+apatosaurusCraftables[selectedItem].craftingItems.anyOf[i].amount)
            }
            else {
                fails += 1
            }
        }
        if (fails >= apatosaurusCraftables[selectedItem].craftingItems.anyOf.length) {
            guiCrafterFail.show(entity).then(result => {
                if (result.selection == 0) {
                    craftingTableMenuGui(entity)
                }
            })
        }
    }
    else if (apatosaurusCraftables[selectedItem].craftingItems.hasOwnProperty('allOf')) {
        let elidgibleItems = 0
        for (let i = 0; i < apatosaurusCraftables[selectedItem].craftingItems.allOf.length; i++) {
            if (apatosaurusCraftables[selectedItem].craftingItems.allOf[i].hasOwnProperty('anyOf')) {
                for (let j = 0; j < apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf.length; j++) {
                    if (testForItem(entity, apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].item, apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].itemData, '>=', apatosaurusCraftables[selectedItem].craftingItems.allOf[i].anyOf[j].amount)) {
                        elidgibleItems += 1
                        break
                    }
                }
            }
            else {
                if (testForItem(entity, apatosaurusCraftables[selectedItem].craftingItems.allOf[i].item, apatosaurusCraftables[selectedItem].craftingItems.allOf[i].itemData, '>=', apatosaurusCraftables[selectedItem].craftingItems.allOf[i].amount)) {
                    elidgibleItems += 1
                }
            }
        }
        if (elidgibleItems >= apatosaurusCraftables[selectedItem].craftingItems.allOf.length) {
            entity.runCommandAsync(`give @s `+apatosaurusCraftables[selectedItem].itemId+` `+apatosaurusCraftables[selectedItem].outputAmount+` `+ apatosaurusCraftables[selectedItem].outputData)
            for (let k = 0; k < apatosaurusCraftables[selectedItem].craftingItems.allOf.length; k++) {
                if (apatosaurusCraftables[selectedItem].craftingItems.allOf[k].hasOwnProperty('anyOf')) {
                    for (let l = 0; l < apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf.length; l++) {
                        if (testForItem(entity, apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf[l].item, apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf[l].itemData, '>=', apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf[l].amount)) {
                            entity.runCommandAsync(`clear @s `+apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf[l].item+` `+apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf[l].itemData+` `+apatosaurusCraftables[selectedItem].craftingItems.allOf[k].anyOf[l].amount)
                            break
                        }
                    }
                }
                else {
                    entity.runCommandAsync(`clear @s `+apatosaurusCraftables[selectedItem].craftingItems.allOf[k].item+` `+apatosaurusCraftables[selectedItem].craftingItems.allOf[k].itemData+` `+apatosaurusCraftables[selectedItem].craftingItems.allOf[k].amount)
                }
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
    else {
        if (testForItem(entity, apatosaurusCraftables[selectedItem].craftingItems.item, apatosaurusCraftables[selectedItem].craftingItems.itemData, '>=', apatosaurusCraftables[selectedItem].craftingItems.amount)) {
            entity.runCommandAsync(`give @s `+apatosaurusCraftables[selectedItem].itemId+` `+apatosaurusCraftables[selectedItem].outputAmount+` `+ apatosaurusCraftables[selectedItem].outputData)
            entity.runCommandAsync(`clear @s `+apatosaurusCraftables[selectedItem].craftingItems.item+` `+apatosaurusCraftables[selectedItem].craftingItems.itemData+` `+apatosaurusCraftables[selectedItem].craftingItems.amount)
        }
        else {
            guiCrafterFail.show(entity).then(result => {
                if (result.selection == 0) {
                    craftingTableMenuGui(entity)
                }
            })
        }
    }
}