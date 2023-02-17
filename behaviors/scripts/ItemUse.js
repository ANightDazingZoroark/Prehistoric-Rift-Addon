import { BlockLocation, Items, ItemStack, system, world } from "@minecraft/server"

let limit = 0
const date = new Date();

function getPlaceCoords(block) {
    return block.x.toString()+' '+(block.y + 1).toString()+' '+block.z.toString()
}

world.events.beforeItemUseOn.subscribe(data => {
    if (limit == 0) {
        switch (data.item.typeId) {
            case 'rift:loot_sack_common':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.blockLocation)+' loot "loot sacks/common drops"')
                break
            case 'rift:loot_sack_uncommon':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.blockLocation)+' loot "loot sacks/uncommon drops"')
                break
            case 'rift:loot_sack_rare':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.blockLocation)+' loot "loot sacks/rare drops"')
                break
            case 'rift:loot_sack_super_rare':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.blockLocation)+' loot "loot sacks/super rare drops"')
                if (Math.floor(Math.random() * 4) == 0) {
                    if (date.getMonth() == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:birthday_costume'), 1, 0), new BlockLocation(data.blockLocation.x, data.blockLocation.y + 1, data.blockLocation.z))
                    }
                    if (date.getMonth() == 9) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:halloween_costume'), 1, 0), new BlockLocation(data.blockLocation.x, data.blockLocation.y + 1, data.blockLocation.z))
                    }
                    if (date.getMonth() == 11) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:christmas_costume'), 1, 0), new BlockLocation(data.blockLocation.x, data.blockLocation.y + 1, data.blockLocation.z))
                    }
                }
                break
        }
    }
    limit++
})

system.runSchedule(() => {
    limit = 0
}, 20)