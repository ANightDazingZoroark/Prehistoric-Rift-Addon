import { MinecraftBlockTypes } from "mojang-minecraft"
import { Block, world } from "mojang-minecraft"
import { ActionFormData, ModalFormData } from "mojang-minecraft-ui"
import * as guiEntry from "./JournalEntries"

let unlockItemsList = [
    'rift:tyrannosaurus_arm',
    'rift:stegosaurus_plate',
    'rift:dodo_beak',
    'rift:triceratops_horn',
    'rift:utahraptor_claw',
    'rift:apatosaurus_vertebrae',
    'rift:parasaurolophus_horn',
    'rift:dimetrodon_sail',
    'rift:coelacanth_scales',
    'rift:megapiranha_scales',
    'rift:sarcosuchus_snout',
    'rift:anomalocaris_appendage',
    'rift:saurophaganax_eye',
    'rift:direwolf_tail',
    'rift:megaloceros_antler',
    'rift:baryonyx_claw',
    //for animals
    'minecraft:porkchop',
    'minecraft:chicken',
    'minecraft:mutton',
    'minecraft:beef',
    'minecraft:rabbit',
    //for humans
    'minecraft:diamond_sword',
    //for illagers
    'minecraft:totem_of_undying',
    //for villagers
    'minecraft:emerald',
    //for monsters
    'minecraft:rotten_flesh',
    'minecraft:gunpowder',
    'minecraft:bone',
    'minecraft:spider_eye',
    'minecraft:ender_pearl',
    'minecraft:slime_ball',
    'minecraft:ghast_tear',
    'minecraft:magma_cream',
    'minecraft:blaze_rod',
    'minecraft:shulker_shell'
]

let creatureList = {
    dinosaurs: [
        'Ankylosaurus',
        'Apatosaurus',
        'Baryonyx',
        'Coelophysis',
        'Dilophosaurus',
        'Gallimimus',
        'Parasaurolophus',
        'Saurophaganax',
        'Stegosaurus',
        'Tenontosaurus',
        'Triceratops',
        'Tyrannosaurus',
        'Utahraptor'
    ],
    mammals: [
        'Dimetrodon',
        'Direbear',
        'Direwolf',
        'Megaloceros',
        'Palaeocastor'
    ],
    reptiles: [
        'Sarcosuchus'
    ],
    birds: [
        'Dodo'
    ],
    fishes: [
        'Coelacanth',
        'Megapiranha'
    ],
    invertebrates: [
        'Anomalocaris'
    ],
    others: [
        'Animals',
        'Humans',
        'Illagers',
        'Monsters',
        'Villagers'
    ]
}

//for main
export const guiMain = new ActionFormData()
.title('Journal')
.button('Search')
.button('How To Fill up the Journal')
.button('Dinosaurs')
.button('Mammals')
.button('Reptiles')
.button('Birds')
.button('Fish')
.button('Inverterates')
.button('Others')

function mainGui(source) {
    guiMain.show(source).then(result => {
        switch (result.selection) {
            case 0:
                searchGui(source)
                break
            case 1:
                guiEntry.guiTutorialEntry.show(source).then(result => {
                    if (result.selection == 0) {
                        mainGui(source)
                    }
                })
                break
            case 2:
                dinosaursGui(source)
                break
            case 3:
                mammalsGui(source)
                break
            case 4:
                reptilesGui(source)
                break
            case 5:
                birdsGui(source)
                break
            case 6:
                fishesGui(source)
                break
            case 7:
                invertebratesGui(source)
                break
            case 8:
                othersGui(source)
                break
        }
    })
}

function searchGui(source) {
    let searchList = Object.values(creatureList)
    searchList = [].concat(...searchList).sort()
    const guiSearch = new ModalFormData()
    .title('Search')
    .textField("Search Entry", "(e.x., Tyrannosaurus)")
    .show(source).then(result => {
        searchResultsGui(source, searchList.map(element => { return element.toLowerCase() }).filter((element) => element.includes(result.formValues[0].toLowerCase())))
    })
}

function searchResultsGui(source, searchResults) {
    searchResults = searchResults.map(element => element.charAt(0).toUpperCase() + element.substring(1))

    const guiSearchResults = new ActionFormData()
    .title('Search Results')
    .button('Return to Search')
    .button('Return to Index')
    for (let i = 0; i < searchResults.length; i++) {
        guiSearchResults.button(searchResults[i])
    }
    guiSearchResults.show(source).then(result => {
        if (result.selection === 0) {
            searchGui(source)
        }
        if (result.selection === 1) {
            mainGui(source)
        }
        if (result.selection >= 2) {
            eval("guiEntry.gui"+searchResults[result.selection-2]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function dinosaursGui(source) {
    let dinosaursList = []
    const guiDinosaurs = new ActionFormData()
    .title('Dinosaurs')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.dinosaurs.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.dinosaurs[i]) == true) {
            guiDinosaurs.button(creatureList.dinosaurs[i])
            dinosaursList.push(creatureList.dinosaurs[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.dinosaurs.length) {
        guiDinosaurs.body('Looks like you need to unlock an entry here...')
    }
    guiDinosaurs.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+dinosaursList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function mammalsGui(source) {
    let mammalsList = []
    const guiMammals = new ActionFormData()
    .title('Mammals')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.mammals.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.mammals[i]) == true) {
            guiMammals.button(creatureList.mammals[i])
            mammalsList.push(creatureList.mammals[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.mammals.length) {
        guiMammals.body('Looks like you need to unlock an entry here...')
    }
    guiMammals.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+mammalsList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function reptilesGui(source) {
    let reptilesList = []
    const guiReptiles = new ActionFormData()
    .title('Reptiles')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.reptiles.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.reptiles[i]) == true) {
            guiReptiles.button(creatureList.reptiles[i])
            reptilesList.push(creatureList.reptiles[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.reptiles.length) {
        guiReptiles.body('Looks like you need to unlock an entry here...')
    }
    guiReptiles.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+reptilesList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function birdsGui(source) {
    let birdsList = []
    const guiBirds = new ActionFormData()
    .title('Birds')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.birds.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.birds[i]) == true) {
            guiBirds.button(creatureList.birds[i])
            birdsList.push(creatureList.birds[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.birds.length) {
        guiBirds.body('Looks like you need to unlock an entry here...')
    }
    guiBirds.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+birdsList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function fishesGui(source) {
    let fishesList = []
    const guiFishes = new ActionFormData()
    .title('Fishes')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.fishes.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.fishes[i]) == true) {
            guiFishes.button(creatureList.fishes[i])
            fishesList.push(creatureList.fishes[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.fishes.length) {
        guiFishes.body('Looks like you need to unlock an entry here...')
    }
    guiFishes.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+fishesList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function invertebratesGui(source) {
    let invertebratesList = []
    const guiInvertebrates = new ActionFormData()
    .title('Invertebrates')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.invertebrates.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.invertebrates[i]) == true) {
            guiInvertebrates.button(creatureList.invertebrates[i])
            invertebratesList.push(creatureList.invertebrates[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.invertebrates.length) {
        guiInvertebrates.body('Looks like you need to unlock an entry here...')
    }
    guiInvertebrates.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+invertebratesList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function othersGui(source) {
    let othersList = []
    const guiOthers = new ActionFormData()
    .title('Others')
    .button('Return to Index')
    let failCount = 0;
    for (let i = 0; i < creatureList.others.length; i++) {
        if (source.getDynamicProperty('Journal'+creatureList.others[i]) == true) {
            guiOthers.button(creatureList.others[i])
            othersList.push(creatureList.others[i])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.others.length) {
        guiOthers.body('Looks like you need to unlock an entry here...')
    }
    guiOthers.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+othersList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

world.events.beforeItemUse.subscribe(data => {
    const source = data.source
    if (data.item.id === 'rift:journal') {
        mainGui(source)
    }
})

world.events.beforeItemUseOn.subscribe(data => {
    console.warn(data.item.id)
    if (unlockItemsList.includes(data.item.id) && world.getDimension('overworld').getBlock(data.blockLocation).id == 'rift:journal_enscriber' && world.getDimension('overworld').getBlock(data.blockLocation).permutation.getProperty('rift:has_book').value == true) {
        switch (data.item.id) {
            case 'rift:tyrannosaurus_arm':
                data.source.setDynamicProperty('JournalTyrannosaurus', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Tyrannosaurus!\"}]}`)
                break
            case 'rift:stegosaurus_plate':
                data.source.setDynamicProperty('JournalStegosaurus', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Stegosaurus!\"}]}`)
                break
            case 'rift:dodo_beak':
                data.source.setDynamicProperty('JournalDodo', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Dodo!\"}]}`)
                break
            case 'rift:triceratops_horn':
                data.source.setDynamicProperty('JournalTriceratops', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Triceratops!\"}]}`)
                break
            case 'rift:utahraptor_claw':
                data.source.setDynamicProperty('JournalUtahraptor', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Utahraptor!\"}]}`)
                break
            case 'rift:apatosaurus_vertebrae':
                data.source.setDynamicProperty('JournalApatosaurus', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Apatosaurus!\"}]}`)
                break
            case 'rift:parasaurolophus_horn':
                data.source.setDynamicProperty('JournalParasaurolophus', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Parasaurolophus!\"}]}`)
                break
            case 'rift:dimetrodon_sail':
                data.source.setDynamicProperty('JournalDimetrodon', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Dimetrodon!\"}]}`)
                break
            case 'rift:coelacanth_scales':
                data.source.setDynamicProperty('JournalCoelacanth', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Coelacanth!\"}]}`)
                break
            case 'rift:megapiranha_scales':
                data.source.setDynamicProperty('JournalMegapiranha', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Megapiranha!\"}]}`)
                break
            case 'rift:sarcosuchus_snout':
                data.source.setDynamicProperty('JournalSarcosuchus', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Sarcosuchus!\"}]}`)
                break
            case 'rift:anomalocaris_appendage':
                data.source.setDynamicProperty('JournalAnomalocaris', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Anomalocaris!\"}]}`)
                break
            case 'rift:saruophaganax_eye':
                data.source.setDynamicProperty('JournalSaurophaganax', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Saurophaganax!\"}]}`)
                break
            case 'rift:direwolf_tail':
                data.source.setDynamicProperty('JournalDirewolf', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Direwolf!\"}]}`)
                break
            case 'rift:megaloceros_antler':
                data.source.setDynamicProperty('JournalMegaloceros', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Megaloceros!\"}]}`)
                break
            case 'rift:baryonyx_claw':
                data.source.setDynamicProperty('JournalBaryonyx', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for the Baryonyx!\"}]}`)
                break
            case 'minecraft:diamond_sword':
                data.source.setDynamicProperty('JournalHumans', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for Humans!\"}]}`)
                break
            case 'minecraft:totem_of_undying':
                data.source.setDynamicProperty('JournalIllagers', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for Illagers!\"}]}`)
            case 'minecraft:emerald':
                data.source.setDynamicProperty('JournalVillagers', true)
                data.source.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"You have unlocked the journal entry for Villagers!\"}]}`)
        }
        world.getDimension('overworld').getBlock(data.blockLocation).setPermutation(MinecraftBlockTypes.get('rift:journal_enscriber').createDefaultBlockPermutation().clone())
    }
})

world.events.tick.subscribe((ev) => {
    let players = Array.from(world.getPlayers())
    for (let p = 0; p < players.length; p++) {
        if (players[p].getDynamicProperty('JournalAnimals') == null) {
            players[p].setDynamicProperty('JournalAnimals', false)
        }
        if (players[p].getDynamicProperty('JournalAnkylosaurus') == null) {
            players[p].setDynamicProperty('JournalAnkylosaurus', false)
        }
        if (players[p].getDynamicProperty('JournalAnomalocaris') == null) {
            players[p].setDynamicProperty('JournalAnomalocaris', false)
        }
        if (players[p].getDynamicProperty('JournalApatosaurus') == null) {
            players[p].setDynamicProperty('JournalApatosaurus', false)
        }
        if (players[p].getDynamicProperty('JournalBaryonyx') == null) {
            players[p].setDynamicProperty('JournalBaryonyx', false)
        }
        if (players[p].getDynamicProperty('JournalCoelacanth') == null) {
            players[p].setDynamicProperty('JournalCoelacanth', false)
        }
        if (players[p].getDynamicProperty('JournalCoelophysis') == null) {
            players[p].setDynamicProperty('JournalCoelophysis', false)
        }
        if (players[p].getDynamicProperty('JournalDilophosaurus') == null) {
            players[p].setDynamicProperty('JournalDilophosaurus', false)
        }
        if (players[p].getDynamicProperty('JournalDimetrodon') == null) {
            players[p].setDynamicProperty('JournalDimetrodon', false)
        }
        if (players[p].getDynamicProperty('JournalDirebear') == null) {
            players[p].setDynamicProperty('JournalDirebear', false)
        }
        if (players[p].getDynamicProperty('JournalDirewolf') == null) {
            players[p].setDynamicProperty('JournalDirewolf', false)
        }
        if (players[p].getDynamicProperty('JournalDodo') == null) {
            players[p].setDynamicProperty('JournalDodo', false)
        }
        if (players[p].getDynamicProperty('JournalGallimimus') == null) {
            players[p].setDynamicProperty('JournalGallimimus', false)
        }
        if (players[p].getDynamicProperty('JournalHumans') == null) {
            players[p].setDynamicProperty('JournalHumans', false)
        }
        if (players[p].getDynamicProperty('JournalIllagers') == null) {
            players[p].setDynamicProperty('JournalIllagers', false)
        }
        if (players[p].getDynamicProperty('JournalMegaloceros') == null) {
            players[p].setDynamicProperty('JournalMegaloceros', false)
        }
        if (players[p].getDynamicProperty('JournalMegapiranha') == null) {
            players[p].setDynamicProperty('JournalMegapiranha', false)
        }
        if (players[p].getDynamicProperty('JournalMonsters') == null) {
            players[p].setDynamicProperty('JournalMonsters', false)
        }
        if (players[p].getDynamicProperty('JournalPalaeocastor') == null) {
            players[p].setDynamicProperty('JournalPalaeocastor', false)
        }
        if (players[p].getDynamicProperty('JournalParasaurolophus') == null) {
            players[p].setDynamicProperty('JournalParasaurolophus', false)
        }
        if (players[p].getDynamicProperty('JournalSarcosuchus') == null) {
            players[p].setDynamicProperty('JournalSarcosuchus', false)
        }
        if (players[p].getDynamicProperty('JournalSaurophaganax') == null) {
            players[p].setDynamicProperty('JournalSaurophaganax', false)
        }
        if (players[p].getDynamicProperty('JournalStegosaurus') == null) {
            players[p].setDynamicProperty('JournalStegosaurus', false)
        }
        if (players[p].getDynamicProperty('JournalTenontosaurus') == null) {
            players[p].setDynamicProperty('JournalTenontosaurus', false)
        }
        if (players[p].getDynamicProperty('JournalTriceratops') == null) {
            players[p].setDynamicProperty('JournalTriceratops', false)
        }
        if (players[p].getDynamicProperty('JournalTyrannosaurus') == null) {
            players[p].setDynamicProperty('JournalTyrannosaurus', false)
        }
        if (players[p].getDynamicProperty('JournalUtahraptor') == null) {
            players[p].setDynamicProperty('JournalUtahraptor', false)
        }
        if (players[p].getDynamicProperty('JournalVillagers') == null) {
            players[p].setDynamicProperty('JournalVillagers', false)
        }
    }
})