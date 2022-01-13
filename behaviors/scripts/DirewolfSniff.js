import { World, Commands } from "mojang-minecraft";

function hasTag(player, tag, dimension) {
    try {
        let msg = Commands.run(`tag "${player.name}" list`, World.getDimension(dimension ?? 'overworld')).statusMessage;
        let msgSplited = msg.split(":");
        let playerTags = msgSplited.length > 1 ? msgSplited[1].match(/§a(.*?)§r/)[1].trim().split(",") : [];
        
        return playerTags.find(it => it == tag) ? true : false;
    } 
    catch (e) {}
}

function runCommand(command, dimension) {
    try {
        return Commands.run(command, World.getDimension(dimension ?? 'overworld'))
    }
    catch(error) {
        return true
    };
};

World.events.tick.subscribe((ev) => {
      let players = World.getPlayers();
      let textOutput
      for (let i = 0; i < players.length; i++) {
        try {
            if (hasTag(players[i], "direwolfSniff")){
                ev.cancel = true

                if (runCommand(`testfor @e[tag=sniffedByDirewolf]`) == false) {
                    let mobs = Commands.run(`testfor @e[tag=sniffedByDirewolf]`, World.getDimension('overworld'))

                    for (let x = 0; x < mobs.victim.length; x++) {
                        if (x == 0) {
                            textOutput = mobs.victim[x]
                        }
                        else {
                            textOutput = textOutput + ", " + mobs.victim[x]
                        }
                    }

                    Commands.run(`tellraw @a[tag=direwolfSniff] {"rawtext":[{"text":"Found ${textOutput}"}]}`, World.getDimension('overworld'))
                }
                else {
                    Commands.run(`tellraw @a[tag=direwolfSniff] {"rawtext":[{"text":"Nothing found so far..."}]}`, World.getDimension('overworld'))
                }

                Commands.run(`tag @e[tag=direwolfSniff] remove direwolfSniff`, World.getDimension('overworld'))
            }
            else if (hasTag(players[i], !"direwolfSniff")) {
                ev.cancel = false;
            }
        }
        catch(e) {
            Commands.run(`say ${e}`, World.getDimension("overworld"));
        }
    }
});