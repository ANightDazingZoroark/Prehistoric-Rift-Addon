import 'AbilityManagement.js'
import 'ApatosaurusCrafting.js'
import 'ApatosaurusSmelting.js'
import 'ApatosaurusWeaponManagement.js'
import 'BlockBreakManagement.js'
// import 'BlockDetectManagement.js'
import 'BlockInteractManagement.js'
import 'DamageManagement.js'
import 'DirewolfManageSniff.js'
import 'EatFromInventory.js'
import 'ForcedAttackDamage.js'
import 'ItemUse.js'
import 'JournalManagement.js'
import 'RiftCommands.js'
import 'SpawnManagement.js'
import { DynamicPropertiesDefinition, MinecraftEntityTypes, system, world } from "@minecraft/server"

world.events.worldInitialize.subscribe((ev) => {
    //initialize journal related stuff so that you need to unlock journal entries b4 reading them
    //because of the fact that there's a character limit for all dynamic properties names im gonna
    //have to utilize numbers and letters to represent them and have what they mean in a comment next to them 
    //numbers r for creatures, letters r for everythin else
    const playerData = new DynamicPropertiesDefinition()
    playerData.defineBoolean('0') //stegosaurus
    playerData.defineBoolean('1') //tyrannosaurus
    playerData.defineBoolean('2') //dodo
    playerData.defineBoolean('3') //triceratops
    playerData.defineBoolean('4') //utahraptor
    playerData.defineBoolean('5') //apatosaurus
    playerData.defineBoolean('6') //parasaurolophus
    playerData.defineBoolean('7') //dimetrodon
    playerData.defineBoolean('8') //coelacanth
    playerData.defineBoolean('9') //megapiranha
    playerData.defineBoolean('10') //sarcosuchus
    playerData.defineBoolean('11') //anomalocaris
    playerData.defineBoolean('12') //saurophaganax
    playerData.defineBoolean('13') //direwolf
    playerData.defineBoolean('14') //megaloceros
    playerData.defineBoolean('15') //baryonyx
    playerData.defineBoolean('16') //palaeocastor
    playerData.defineBoolean('17') //ankylosaurus
    playerData.defineBoolean('18') //dilophosaurus
    playerData.defineBoolean('19') //gallimimus
    playerData.defineBoolean('20') //tenontosaurus
    playerData.defineBoolean('21') //direbear
    playerData.defineBoolean('22') //coelophysis
    playerData.defineBoolean('23') //pteranodon

    playerData.defineBoolean('a') //animals
    playerData.defineBoolean('b') //monsters
    playerData.defineBoolean('c') //humans
    playerData.defineBoolean('d') //villagers
    playerData.defineBoolean('e') //illagers
    ev.propertyRegistry.registerEntityTypeDynamicProperties(playerData, MinecraftEntityTypes.player)
})

world.events.playerSpawn.subscribe(ev => {
    ev.player.triggerEvent(`rift:remove_warning`)
    for (let i = 0; i < 24; i++) {
        if (ev.player.getDynamicProperty(i.toString()) == null) {
            ev.player.setDynamicProperty(i.toString(), false)
        }
    }
    if (ev.player.getDynamicProperty('a') == null) {
        ev.player.setDynamicProperty('a', false)
    }
    if (ev.player.getDynamicProperty('b') == null) {
        ev.player.setDynamicProperty('b', false)
    }
    if (ev.player.getDynamicProperty('c') == null) {
        ev.player.setDynamicProperty('c', false)
    }
    if (ev.player.getDynamicProperty('d') == null) {
        ev.player.setDynamicProperty('d', false)
    }
    if (ev.player.getDynamicProperty('e') == null) {
        ev.player.setDynamicProperty('e', false)
    }
})

system.events.beforeWatchdogTerminate.subscribe(ev => ev.cancel = true)