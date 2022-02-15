import { world } from "mojang-minecraft";

function testForCommand(command, dimension) {
    try {
        return world.getDimension(dimension ?? 'overworld').runCommand(command);
    }
    catch(error) {
        return true;
    };
};

world.events.tick.subscribe((ev) => {
    let players = world.getDimension('overworld').runCommand(`testfor @a`).victim;
    let textOutput;
    for (let i = 0; i < players.length; i++) {
        try {
            if (players[i].hasTag("direwolfSniff")){
                if (testForCommand(`testfor @e[tag=sniffedByDirewolf]`) == false) {
                    world.getDimension('overworld').runCommand(`say hello`);
                    let mobs = world.getDimension('overworld').runCommand(`testfor @e[tag=sniffedByDirewolf]`);

                    for (let x = 0; x < mobs.victim.length; x++) {
                        if (x == 0) {
                            textOutput = mobs.victim[x];
                        }
                        else {
                            textOutput = textOutput + ", " + mobs.victim[x];
                        }
                    }
                    world.getDimension('overworld').runCommand(`tellraw @a[tag=direwolfSniff] {"rawtext":[{"text":"Found ${textOutput}"}]}`);
                }
                else {
                    world.getDimension('overworld').runCommand(`tellraw @a[tag=direwolfSniff] {"rawtext":[{"text":"Nothing found so far..."}]}`);
                }
                world.getDimension('overworld').runCommand(`tag @e[tag=direwolfSniff] remove direwolfSniff`);
                ev.cancel = true;
            }
            else if (!players[i].hasTag("direwolfSniff")) {
                ev.cancel = false;
            }
        }
        catch(e) {
            Commands.run(`say ${e}`, world.getDimension("overworld"));
        }
    }
});