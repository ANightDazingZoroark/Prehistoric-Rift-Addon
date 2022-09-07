import { world } from "mojang-minecraft"

world.events.beforeItemUse.subscribe(data => {
    if (data.item.id == 'rift:shotgun' && !data.source.isSneaking) {
        console.warn('regular shoot')
    }
    if (data.item.id == 'rift:shotgun' && data.source.isSneaking) {
        console.warn('double shoot')
    }
})