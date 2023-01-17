import { BlockLocation, world } from "@minecraft/server"

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
                    break
                case 'r!journalunlock':
                    ev.sender.tell('Unlocked all journal entries!')
                    ev.sender.setDynamicProperty('JournalAnimals', true)
                    ev.sender.setDynamicProperty('JournalAnkylosaurus', true)
                    ev.sender.setDynamicProperty('JournalAnomalocaris', true)
                    ev.sender.setDynamicProperty('JournalApatosaurus', true)
                    ev.sender.setDynamicProperty('JournalBaryonyx', true)
                    ev.sender.setDynamicProperty('JournalCoelacanth', true)
                    ev.sender.setDynamicProperty('JournalCoelophysis', true)
                    ev.sender.setDynamicProperty('JournalDilophosaurus', true)
                    ev.sender.setDynamicProperty('JournalDimetrodon', true)
                    ev.sender.setDynamicProperty('JournalDirebear', true)
                    ev.sender.setDynamicProperty('JournalDirewolf', true)
                    ev.sender.setDynamicProperty('JournalDodo', true)
                    ev.sender.setDynamicProperty('JournalGallimimus', true)
                    ev.sender.setDynamicProperty('JournalHumans', true)
                    ev.sender.setDynamicProperty('JournalIllagers', true)
                    ev.sender.setDynamicProperty('JournalMegaloceros', true)
                    ev.sender.setDynamicProperty('JournalMegapiranha', true)
                    ev.sender.setDynamicProperty('JournalMonsters', true)
                    ev.sender.setDynamicProperty('JournalPalaeocastor', true)
                    ev.sender.setDynamicProperty('JournalParasaurolophus', true)
                    ev.sender.setDynamicProperty('JournalSarcosuchus', true)
                    ev.sender.setDynamicProperty('JournalSaurophaganax', true)
                    ev.sender.setDynamicProperty('JournalStegosaurus', true)
                    ev.sender.setDynamicProperty('JournalTenontosaurus', true)
                    ev.sender.setDynamicProperty('JournalTriceratops', true)
                    ev.sender.setDynamicProperty('JournalTyrannosaurus', true)
                    ev.sender.setDynamicProperty('JournalUtahraptor', true)
                    ev.sender.setDynamicProperty('JournalVillagers', true)
                    break
                case 'r!journalrelock':
                    ev.sender.tell('Reset all journal entries!')
                    ev.sender.setDynamicProperty('JournalAnimals', false)
                    ev.sender.setDynamicProperty('JournalAnkylosaurus', false)
                    ev.sender.setDynamicProperty('JournalAnomalocaris', false)
                    ev.sender.setDynamicProperty('JournalApatosaurus', false)
                    ev.sender.setDynamicProperty('JournalBaryonyx', false)
                    ev.sender.setDynamicProperty('JournalCoelacanth', false)
                    ev.sender.setDynamicProperty('JournalCoelophysis', false)
                    ev.sender.setDynamicProperty('JournalDilophosaurus', false)
                    ev.sender.setDynamicProperty('JournalDimetrodon', false)
                    ev.sender.setDynamicProperty('JournalDirebear', false)
                    ev.sender.setDynamicProperty('JournalDirewolf', false)
                    ev.sender.setDynamicProperty('JournalDodo', false)
                    ev.sender.setDynamicProperty('JournalGallimimus', false)
                    ev.sender.setDynamicProperty('JournalHumans', false)
                    ev.sender.setDynamicProperty('JournalIllagers', false)
                    ev.sender.setDynamicProperty('JournalMegaloceros', false)
                    ev.sender.setDynamicProperty('JournalMegapiranha', false)
                    ev.sender.setDynamicProperty('JournalMonsters', false)
                    ev.sender.setDynamicProperty('JournalPalaeocastor', false)
                    ev.sender.setDynamicProperty('JournalParasaurolophus', false)
                    ev.sender.setDynamicProperty('JournalSarcosuchus', false)
                    ev.sender.setDynamicProperty('JournalSaurophaganax', false)
                    ev.sender.setDynamicProperty('JournalStegosaurus', false)
                    ev.sender.setDynamicProperty('JournalTenontosaurus', false)
                    ev.sender.setDynamicProperty('JournalTriceratops', false)
                    ev.sender.setDynamicProperty('JournalTyrannosaurus', false)
                    ev.sender.setDynamicProperty('JournalUtahraptor', false)
                    ev.sender.setDynamicProperty('JournalVillagers', false)
                    break
            }
        }
        else {
            ev.sender.tell('You can only use these special commands in creative mode!')
        }
        ev.cancel = true
    }
})