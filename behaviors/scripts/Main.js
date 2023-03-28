import 'AbilityManagement.js'
import 'ApatosaurusCrafting.js'
import 'ApatosaurusSmelting.js'
import 'ApatosaurusWeaponManagement.js'
import 'BlockBreakManagement.js'
import 'BlockDetectManagement.js'
import 'BlockInteractManagement.js'
import 'DamageManagement.js'
import 'DirewolfManageSniff.js'
import 'EatFromInventory.js'
import 'ForcedAttackDamage.js'
import 'JournalManagement.js'
import 'RiftCommands.js'
import { DynamicPropertiesDefinition, MinecraftEntityTypes, system, world } from "@minecraft/server"

world.events.worldInitialize.subscribe((ev) => {
    //initialize journal related stuff so that you need to unlock journal entries b4 reading them
    const playerData = new DynamicPropertiesDefinition()
    playerData.defineBoolean('JournalAnimals')
    playerData.defineBoolean('JournalAnkylosaurus')
    playerData.defineBoolean('JournalAnomalocaris')
    playerData.defineBoolean('JournalApatosaurus')
    playerData.defineBoolean('JournalBaryonyx')
    playerData.defineBoolean('JournalCoelacanth')
    playerData.defineBoolean('JournalCoelophysis')
    playerData.defineBoolean('JournalDilophosaurus')
    playerData.defineBoolean('JournalDimetrodon')
    playerData.defineBoolean('JournalDirebear')
    playerData.defineBoolean('JournalDirewolf')
    playerData.defineBoolean('JournalDodo')
    playerData.defineBoolean('JournalGallimimus')
    playerData.defineBoolean('JournalHumans')
    playerData.defineBoolean('JournalIllagers')
    playerData.defineBoolean('JournalMegaloceros')
    playerData.defineBoolean('JournalMegapiranha')
    playerData.defineBoolean('JournalMonsters')
    playerData.defineBoolean('JournalPalaeocastor')
    playerData.defineBoolean('JournalParasaurolophus')
    playerData.defineBoolean('JournalSarcosuchus')
    playerData.defineBoolean('JournalSaurophaganax')
    playerData.defineBoolean('JournalStegosaurus')
    playerData.defineBoolean('JournalTenontosaurus')
    playerData.defineBoolean('JournalTriceratops')
    playerData.defineBoolean('JournalTyrannosaurus')
    playerData.defineBoolean('JournalUtahraptor')
    playerData.defineBoolean('JournalVillagers')
    ev.propertyRegistry.registerEntityTypeDynamicProperties(playerData, MinecraftEntityTypes.player)
})

world.events.playerSpawn.subscribe(ev => {
    ev.player.triggerEvent(`rift:remove_warning`)
    if (ev.player.getDynamicProperty('JournalAnimals') == null) {
        ev.player.setDynamicProperty('JournalAnimals', false)
    }
    if (ev.player.getDynamicProperty('JournalAnkylosaurus') == null) {
        ev.player.setDynamicProperty('JournalAnkylosaurus', false)
    }
    if (ev.player.getDynamicProperty('JournalAnomalocaris') == null) {
        ev.player.setDynamicProperty('JournalAnomalocaris', false)
    }
    if (ev.player.getDynamicProperty('JournalApatosaurus') == null) {
        ev.player.setDynamicProperty('JournalApatosaurus', false)
    }
    if (ev.player.getDynamicProperty('JournalBaryonyx') == null) {
        ev.player.setDynamicProperty('JournalBaryonyx', false)
    }
    if (ev.player.getDynamicProperty('JournalCoelacanth') == null) {
        ev.player.setDynamicProperty('JournalCoelacanth', false)
    }
    if (ev.player.getDynamicProperty('JournalCoelophysis') == null) {
        ev.player.setDynamicProperty('JournalCoelophysis', false)
    }
    if (ev.player.getDynamicProperty('JournalDilophosaurus') == null) {
        ev.player.setDynamicProperty('JournalDilophosaurus', false)
    }
    if (ev.player.getDynamicProperty('JournalDimetrodon') == null) {
        ev.player.setDynamicProperty('JournalDimetrodon', false)
    }
    if (ev.player.getDynamicProperty('JournalDirebear') == null) {
        ev.player.setDynamicProperty('JournalDirebear', false)
    }
    if (ev.player.getDynamicProperty('JournalDirewolf') == null) {
        ev.player.setDynamicProperty('JournalDirewolf', false)
    }
    if (ev.player.getDynamicProperty('JournalDodo') == null) {
        ev.player.setDynamicProperty('JournalDodo', false)
    }
    if (ev.player.getDynamicProperty('JournalGallimimus') == null) {
        ev.player.setDynamicProperty('JournalGallimimus', false)
    }
    if (ev.player.getDynamicProperty('JournalHumans') == null) {
        ev.player.setDynamicProperty('JournalHumans', false)
    }
    if (ev.player.getDynamicProperty('JournalIllagers') == null) {
        ev.player.setDynamicProperty('JournalIllagers', false)
    }
    if (ev.player.getDynamicProperty('JournalMegaloceros') == null) {
        ev.player.setDynamicProperty('JournalMegaloceros', false)
    }
    if (ev.player.getDynamicProperty('JournalMegapiranha') == null) {
        ev.player.setDynamicProperty('JournalMegapiranha', false)
    }
    if (ev.player.getDynamicProperty('JournalMonsters') == null) {
        ev.player.setDynamicProperty('JournalMonsters', false)
    }
    if (ev.player.getDynamicProperty('JournalPalaeocastor') == null) {
        ev.player.setDynamicProperty('JournalPalaeocastor', false)
    }
    if (ev.player.getDynamicProperty('JournalParasaurolophus') == null) {
        ev.player.setDynamicProperty('JournalParasaurolophus', false)
    }
    if (ev.player.getDynamicProperty('JournalSarcosuchus') == null) {
        ev.player.setDynamicProperty('JournalSarcosuchus', false)
    }
    if (ev.player.getDynamicProperty('JournalSaurophaganax') == null) {
        ev.player.setDynamicProperty('JournalSaurophaganax', false)
    }
    if (ev.player.getDynamicProperty('JournalStegosaurus') == null) {
        ev.player.setDynamicProperty('JournalStegosaurus', false)
    }
    if (ev.player.getDynamicProperty('JournalTenontosaurus') == null) {
        ev.player.setDynamicProperty('JournalTenontosaurus', false)
    }
    if (ev.player.getDynamicProperty('JournalTriceratops') == null) {
        ev.player.setDynamicProperty('JournalTriceratops', false)
    }
    if (ev.player.getDynamicProperty('JournalTyrannosaurus') == null) {
        ev.player.setDynamicProperty('JournalTyrannosaurus', false)
    }
    if (ev.player.getDynamicProperty('JournalUtahraptor') == null) {
        ev.player.setDynamicProperty('JournalUtahraptor', false)
    }
    if (ev.player.getDynamicProperty('JournalVillagers') == null) {
        ev.player.setDynamicProperty('JournalVillagers', false)
    }
})

system.events.beforeWatchdogTerminate.subscribe(ev => ev.cancel = true)