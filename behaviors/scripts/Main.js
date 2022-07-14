import "scripts/AbilityManagement.js"
import "scripts/ApatosaurusCrafting.js"
import "scripts/BlockBreakManagement.js"
import "scripts/DirewolfSniff.js"
import "scripts/DamageManagement.js"
import "scripts/EatFromInventory.js"
import "scripts/JournalManagement.js"
import { world } from "mojang-minecraft"

world.events.tick.subscribe((ev) => {
    world.getDimension('overworld').runCommand(`event entity @a rift:remove_warning`)
})