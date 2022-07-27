import "scripts/AbilityManagement.js"
import "scripts/ApatosaurusCrafting.js"
import "scripts/ApatosaurusSmelting.js"
import "scripts/ApatosaurusWeaponManagement.js"
import "scripts/BlockBreakManagement.js"
import "scripts/DamageManagement.js"
import "scripts/EatFromInventory.js"
import "scripts/JournalManagement.js"
import { world } from "mojang-minecraft"
import { testForItem } from "./externals/itemmanagement"

world.events.tick.subscribe((ev) => {
    world.getDimension('overworld').runCommand(`event entity @a rift:remove_warning`)
})