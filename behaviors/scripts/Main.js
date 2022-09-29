import "scripts/AbilityManagement.js"
import "scripts/ApatosaurusCrafting.js"
import "scripts/ApatosaurusSmelting.js"
import "scripts/ApatosaurusWeaponManagement.js"
import "scripts/BlockBreakManagement.js"
import "scripts/DamageManagement.js"
import "scripts/EatFromInventory.js"
import "scripts/JournalManagement.js"
import { world } from "mojang-minecraft"

world.events.tick.subscribe((ev) => {
    try {
        world.getDimension('overworld').runCommand(`event entity @a rift:remove_warning`)
    }
    catch (e) {}
})