import "AbilityManagement.js"
import "ApatosaurusCrafting.js"
import "ApatosaurusSmelting.js"
import "ApatosaurusWeaponManagement.js"
import "BlockBreakManagement.js"
import "DamageManagement.js"
import "EatFromInventory.js"
import "JournalManagement.js"
import { world } from "@minecraft/server"

world.events.playerJoin.subscribe((ev) => {
    ev.player.triggerEvent(`rift:remove_warning`)
})