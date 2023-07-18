import "AbilityManagement.js"
import "ApatosaurusCrafting.js"
import "ApatosaurusSmelting.js"
import "ApatosaurusWeaponManagement.js"
import "BlockBreakManagement.js"
import "DamageManagement.js"
import "EatFromInventory.js"
import "JournalManagement.js"
import { system, world } from "@minecraft/server"

world.afterEvents.playerSpawn.subscribe(ev => ev.player.triggerEvent(`rift:remove_warning`))

system.beforeEvents.watchdogTerminate.subscribe(ev => ev.cancel = true)