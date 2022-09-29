import "scripts/AbilityManagement.js"
import "scripts/ApatosaurusCrafting.js"
import "scripts/ApatosaurusSmelting.js"
import "scripts/ApatosaurusWeaponManagement.js"
import "scripts/BlockBreakManagement.js"
import "scripts/DamageManagement.js"
import "scripts/EatFromInventory.js"
import "scripts/JournalManagement.js"
import { world } from "mojang-minecraft"

world.events.playerJoin.subscribe((ev) => {
    ev.player.triggerEvent(`rift:remove_warning`)
})