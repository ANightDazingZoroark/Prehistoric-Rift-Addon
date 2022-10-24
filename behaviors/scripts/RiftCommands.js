import { world } from 'mojang-minecraft'

world.events.beforeChat.subscribe(async (ev) => {
    try {
        if (ev.sender.runCommand(`testfor @s[m=c]`)) {
            switch (ev.message) {
                case 'r!commands':
                    ev.sender.tell('==Commands==')
                    ev.sender.tell('r!commands: Opens up the list of usable commands')
                    ev.sender.tell('r!test: Generic "Hello World" message you\'d learn to make from a programming tutorial or class')
                    ev.sender.tell('r!mobevents <true|false>: Enable or disable mob events. By default the value is false')
                    ev.sender.tell('r!pvp <true|false>: Changes up stuff so that you can use the addon for PvP situations (like attacking tamed dinos using your own tamed dinos while riding them). By default the value is false')
                    ev.cancel = true
                    break
                case 'r!test':
                    // ev.sender.tell('Hi!')
                    let command = ev.sender.runCommand(`tag @s list`)
                    let playerTags = command.statusMessage
                    .split(": ")[1]
                    .split(", ")
                    .map(tag => tag.replace(/§./, ""))
                    console.warn(playerTags)
                    ev.cancel = true
                    break
            }
        }
    }
    catch (e) {
        ev.sender.tell('You need to be in creative mode to use these commands!')
    }
})