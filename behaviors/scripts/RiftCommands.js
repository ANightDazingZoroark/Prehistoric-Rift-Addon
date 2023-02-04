import { BlockLocation, world } from "@minecraft/server"
import { clearEntity, testForItem } from "./externals/itemmanagement"

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

world.events.beforeChat.subscribe(async (ev) => {
    if (ev.message.substring(0,2) == 'r!') {
        if (ev.sender.hasTag('canRiftCommands')) {
            switch (ev.message) {
                case 'r!commands':
                    ev.sender.tell('==Commands==')
                    ev.sender.tell('r!commands: Opens up the list of usable commands')
                    ev.sender.tell('r!test: Generic "Hello World" message you\'d learn to make from a programming tutorial or class')
                    ev.sender.tell('r!journalunlock: Unlock all journal entries for the person using the command')
                    ev.sender.tell('r!journalrelock: Reset all unlocked journal entries for the person using the command')
                    break
                case 'r!test':
                    ev.sender.tell('Hello World!')
                    // let armorCount = 0
                    // ev.sender.runCommandAsync('testfor @s[hasitem={location=slot.armor.chest, item=netherite_chestplate}]').then(() =>{
                    //     armorCount++
                    //     console.warn('one')
                    //     ev.sender.runCommandAsync('testfor @s[hasitem={location=slot.armor.chest, item=diamond_chestplate}]').then(() => {
                    //         armorCount++
                    //         console.warn('two')
                    //     }).finally(()=> console.warn(armorCount))
                    // })
                    // await ev.sender.runCommandAsync('testfor @s[hasitem={location=slot.armor.chest, item=netherite_chestplate}]').then(x => armorCount++)
                    // console.warn(armorCount)
                    break
                case 'r!journalunlock':
                    ev.sender.tell('Unlocked all journal entries!')
                    for (let i = 0; i < 24; i++) {
                        ev.sender.setDynamicProperty(i.toString(), true)
                    }
                    for (let i = 0; i < 5; i++) {
                        ev.sender.setDynamicProperty(alphabet[i], true)
                    }
                    break
                case 'r!journalrelock':
                    ev.sender.tell('Relocked all journal entries!')
                    for (let i = 0; i < 24; i++) {
                        ev.sender.setDynamicProperty(alphabet[i], false)
                    }
                    for (let i = 0; i < 5; i++) {
                        ev.sender.setDynamicProperty(alphabet[i], false)
                    }
                    break
            }
        }
        else {
            ev.sender.tell('You can only use these special commands in creative mode!')
        }
        ev.cancel = true
    }
})