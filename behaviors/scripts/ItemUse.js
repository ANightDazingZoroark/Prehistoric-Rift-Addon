import { ItemTypes, ItemStack, system, world } from "@minecraft/server"

let limit = 0
const date = new Date();

function getPlaceCoords(block) {
    return block.x.toString()+' '+(block.y + 1).toString()+' '+block.z.toString()
}

world.beforeEvents.itemUseOn.subscribe(data => {
    if (limit == 0) {
        switch (data.itemStack.typeId) {
            case 'rift:loot_sack_common':
                data.block.dimension.runCommandAsync('loot spawn '+getPlaceCoords(data.block.location)+' loot "loot sacks/common drops"')
                data.source.runCommandAsync('clear @s rift:loot_sack_common -1 1')
                break
            case 'rift:loot_sack_uncommon':
                data.block.dimension.runCommandAsync('loot spawn '+getPlaceCoords(data.block.location)+' loot "loot sacks/uncommon drops"')
                data.source.runCommandAsync('clear @s rift:loot_sack_uncommon -1 1')
                break
            case 'rift:loot_sack_rare':
                data.block.dimension.runCommandAsync('loot spawn '+getPlaceCoords(data.block.location)+' loot "loot sacks/rare drops"')
                data.source.runCommandAsync('clear @s rift:loot_sack_rare -1 1')
                break
            case 'rift:loot_sack_super_rare':
                data.block.dimension.runCommandAsync('loot spawn '+getPlaceCoords(data.block.location)+' loot "loot sacks/super rare drops"')
                if (Math.floor(Math.random() * 4) == 0) {
                    if (date.getMonth() == 0) {
                        data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:birthday_costume'), 1), {x: data.block.location.x, y: data.block.location.y + 1, z: data.block.location.z})
                    }
                    if (date.getMonth() == 9) {
                        data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:halloween_costume'), 1), {x: data.block.location.x, y: data.block.location.y + 1, z: data.block.location.z})
                    }
                    if (date.getMonth() == 11) {
                        data.block.dimension.spawnItem(new ItemStack(ItemTypes.get('rift:christmas_costume'), 1), {x: data.block.location.x, y: data.block.location.y + 1, z: data.block.location.z})
                    }
                }
                data.source.runCommandAsync('clear @s rift:loot_sack_super_rare -1 1')
                break
        }
    }
    limit++
})

system.runInterval(() => {
    limit = 0
}, 20)