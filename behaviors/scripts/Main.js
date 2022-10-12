import 'scripts/AbilityManagement.js'
import 'scripts/ApatosaurusCrafting.js'
import 'scripts/ApatosaurusSmelting.js'
import 'scripts/ApatosaurusWeaponManagement.js'
import 'scripts/BlockBreakManagement.js'
import 'scripts/BlockDetectManagement.js'
import 'scripts/DamageManagement.js'
import 'scripts/DirewolfManageSniff.js'
import 'scripts/EatFromInventory.js'
import 'scripts/EffectManagement.js'
import 'scripts/ForcedAttackDamage.js'
import 'scripts/JournalManagement.js'
import { DynamicPropertiesDefinition, MinecraftEntityTypes, /**system,**/ world } from 'mojang-minecraft'

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

world.events.playerJoin.subscribe(ev => ev.player.triggerEvent(`rift:remove_warning`))

// system.events.beforeWatchdogTerminate.subscribe(ev => ev.cancel = false)