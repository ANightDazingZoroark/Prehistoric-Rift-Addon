import "AbilityManagement.js"
import "ApatosaurusCrafting.js"
import "ApatosaurusSmelting.js"
import "ApatosaurusWeaponManagement.js"
import "BlockBreakManagement.js"
import "DamageManagement.js"
import "EatFromInventory.js"
import "JournalManagement.js"
import { system, world } from "@minecraft/server"

world.events.playerSpawn.subscribe(ev => ev.player.triggerEvent(`rift:remove_warning`))

system.events.beforeWatchdogTerminate.subscribe(ev => ev.cancel = true)