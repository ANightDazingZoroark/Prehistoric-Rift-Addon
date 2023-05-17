import { world } from "@minecraft/server"

world.events.entitySpawn.subscribe((ev) => {
    switch (ev.entity.typeId) {
        case 'rift:cavern_megapiranha':
            ev.entity.nameTag = '§4Cavern Megapiranha§r'
            break
        case 'rift:cavern_utahraptor':
            ev.entity.nameTag = '§4Cavern Utahraptor§r'
            break
        case 'rift:cavern_dilophosaurus':
            ev.entity.nameTag = '§4Cavern Dilophosaurus§r'
            break
        case 'rift:cavern_boss':
            ev.entity.nameTag = '§5§kaaaaaaaaaa§r'
            break
    }
})