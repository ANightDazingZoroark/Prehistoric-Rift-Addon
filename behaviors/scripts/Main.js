import "scripts/DirewolfSniff.js";
import { world } from "mojang-minecraft";

world.events.tick.subscribe((ev) => {
    world.getDimension('overworld').runCommand(`event entity @a rift:remove_warning`);
});