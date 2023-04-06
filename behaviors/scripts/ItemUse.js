import { Items, ItemStack, system, world } from "@minecraft/server"

let limit = 0
const date = new Date();

function getPlaceCoords(block) {
    return block.x.toString()+' '+(block.y + 1).toString()+' '+block.z.toString()
}

world.events.itemUseOn.subscribe(data => {
    if (limit == 0) {
        switch (data.item.typeId) {
            case 'rift:loot_sack_common':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.getBlockLocation())+' loot "loot sacks/common drops"')
                data.source.runCommandAsync('clear @s rift:loot_sack_common -1 1')
                break
            case 'rift:loot_sack_uncommon':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.getBlockLocation())+' loot "loot sacks/uncommon drops"')
                data.source.runCommandAsync('clear @s rift:loot_sack_uncommon -1 1')
                break
            case 'rift:loot_sack_rare':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.getBlockLocation())+' loot "loot sacks/rare drops"')
                data.source.runCommandAsync('clear @s rift:loot_sack_rare -1 1')
                break
            case 'rift:loot_sack_super_rare':
                world.getDimension('overworld').runCommandAsync('loot spawn '+getPlaceCoords(data.getBlockLocation())+' loot "loot sacks/super rare drops"')
                if (Math.floor(Math.random() * 4) == 0) {
                    if (date.getMonth() == 0) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:birthday_costume'), 1), new BlockLocation(data.getBlockLocation().x, data.getBlockLocation().y + 1, data.getBlockLocation().z))
                    }
                    if (date.getMonth() == 9) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:halloween_costume'), 1), new BlockLocation(data.getBlockLocation().x, data.getBlockLocation().y + 1, data.getBlockLocation().z))
                    }
                    if (date.getMonth() == 11) {
                        world.getDimension('overworld').spawnItem(new ItemStack(Items.get('rift:christmas_costume'), 1), new BlockLocation(data.getBlockLocation().x, data.getBlockLocation().y + 1, data.getBlockLocation().z))
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