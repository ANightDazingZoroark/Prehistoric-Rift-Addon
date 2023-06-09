import { world } from "@minecraft/server"

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

world.beforeEvents.chatSend.subscribe(async (ev) => {
    if (ev.message.substring(0,2) == 'r!') {
        if (ev.sender.hasTag('canRiftCommands')) {
            switch (ev.message) {
                case 'r!commands':
                    ev.sender.sendMessage('==Commands==')
                    ev.sender.sendMessage('r!commands: Opens up the list of usable commands')
                    ev.sender.sendMessage('r!test: Generic "Hello World" message you\'d learn to make from a programming tutorial or class')
                    ev.sender.sendMessage('r!journalunlock: Unlock all journal entries for the person using the command')
                    ev.sender.sendMessage('r!journalrelock: Reset all unlocked journal entries for the person using the command')
                    break
                case 'r!test':
                    ev.sender.sendMessage('Hello World!')
                    break
                case 'r!journalunlock':
                    ev.sender.sendMessage('Unlocked all journal entries!')
                    for (let i = 0; i < 24; i++) {
                        ev.sender.setDynamicProperty(i.toString(), true)
                    }
                    for (let i = 0; i < 5; i++) {
                        ev.sender.setDynamicProperty(alphabet[i], true)
                    }
                    break
                case 'r!journalrelock':
                    ev.sender.sendMessage('Relocked all journal entries!')
                    for (let i = 0; i < 24; i++) {
                        ev.sender.setDynamicProperty(i.toString(), false)
                    }
                    for (let i = 0; i < 5; i++) {
                        ev.sender.setDynamicProperty(alphabet[i], false)
                    }
                    break
                default:
                    ev.sender.sendMessage('That doesn\'t seem like a valid command. Use r!commands to get all commands!')
                    break
            }
        }
        else {
            ev.sender.sendMessage('You can only use these special commands in creative mode!')
        }
        ev.cancel = true
    }
})