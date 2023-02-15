import { MinecraftBlockTypes } from "@minecraft/server"
import { system, world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
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
    'rift:palaeocastor_tail',
    'rift:ankylosaurus_club',
    'rift:dilophosaurus_frill',
    'rift:gallimimus_foot',
    'rift:tenontosaurus_feather',
    'rift:direbear_fur',
    'rift:coelophysis_head',
    'rift:pteranodon_crest',
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
        [0, 'Stegosaurus'],
        [1, 'Tyrannosaurus'],
        [3, 'Triceratops'],
        [4, 'Utahraptor'],
        [5, 'Apatosaurus'],
        [6, 'Parasaurolophus'],
        [12, 'Saurophaganax'],
        [15, 'Baryonyx'],
        [17, 'Ankylosaurus'],
        [18, 'Dilophosaurus'],
        [19, 'Gallimimus'],
        [20, 'Tenontosaurus'],
        [22, 'Coelophysis']
    ],
    mammals: [
        [7, 'Dimetrodon'],
        [13, 'Direwolf'],
        [14, 'Megaloceros'],
        [16, 'Palaeocastor'],
        [21, 'Direbear']
    ],
    reptiles: [
        [10, 'Sarcosuchus'],
        [23, 'Pteranodon']
    ],
    birds: [
        [2, 'Dodo']
    ],
    fishes: [
        [8, 'Coelacanth'],
        [9, 'Megapiranha']
    ],
    invertebrates: [
        [11, 'Anomalocaris']
    ],
    others: [
        ['a', 'Animals'],
        ['b', 'Monsters'],
        ['c', 'Humans'],
        ['d', 'Villagers'],
        ['e', 'Illagers']
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
    let searchList = []
    for (let i = 0; i < Object.keys(creatureList).length; i++) {
        searchList = searchList.concat(Object.values(creatureList)[i])
    }
    searchList.sort((a, b) => a[1].localeCompare(b[1]))
    const guiSearch = new ModalFormData()
    .title('Search')
    .textField("Search Entry", "(e.x., Tyrannosaurus)")
    .show(source).then(result => {
        searchResultsGui(source, searchList.map(element => [element[0], element[1].toLowerCase()]).filter((element) => element[1].includes(result.formValues[0].toLowerCase())))
    })
}

function searchResultsGui(source, searchResults) {
    searchResults = searchResults.map(element => [element[0], element[1].charAt(0).toUpperCase() + element[1].substring(1)])
    let newSearchResults = []
    const guiSearchResults = new ActionFormData()
    .title('Search Results')
    .button('Return to Search')
    .button('Return to Index')
    for (let i = 0; i < searchResults.length; i++) {
        if (source.getDynamicProperty(searchResults[i][0].toString()) == true) {
            guiSearchResults.button(searchResults[i][1])
            newSearchResults.push(searchResults[i])
        }
    }
    guiSearchResults.show(source).then(result => {
        if (result.selection === 0) {
            searchGui(source)
        }
        if (result.selection === 1) {
            mainGui(source)
        }
        if (result.selection >= 2) {
            eval("guiEntry.gui"+newSearchResults[result.selection-2][1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
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
        if (source.getDynamicProperty(creatureList.dinosaurs[i][0].toString()) == true) {
            dinosaursList.push(creatureList.dinosaurs[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.dinosaurs.length) {
        guiDinosaurs.body('Looks like you need to unlock an entry here...')
    }
    dinosaursList.sort()
    for (let i = 0; i < dinosaursList.length; i++) {
        guiDinosaurs.button(dinosaursList[i])
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
        if (source.getDynamicProperty(creatureList.mammals[i][0].toString()) == true) {
            mammalsList.push(creatureList.mammals[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.mammals.length) {
        guiMammals.body('Looks like you need to unlock an entry here...')
    }
    mammalsList.sort()
    for (let i = 0; i < mammalsList.length; i++) {
        guiMammals.button(mammalsList[i])
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
        if (source.getDynamicProperty(creatureList.reptiles[i][0].toString()) == true) {
            reptilesList.push(creatureList.reptiles[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.reptiles.length) {
        guiReptiles.body('Looks like you need to unlock an entry here...')
    }
    reptilesList.sort()
    for (let i = 0; i < reptilesList.length; i++) {
        guiReptiles.button(reptilesList[i])
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
        if (source.getDynamicProperty(creatureList.birds[i][0].toString()) == true) {
            birdsList.push(creatureList.birds[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.birds.length) {
        guiBirds.body('Looks like you need to unlock an entry here...')
    }
    birdsList.sort()
    for (let i = 0; i < birdsList.length; i++) {
        guiBirds.button(birdsList[i])
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
        if (source.getDynamicProperty(creatureList.fishes[i][0].toString()) == true) {
            fishesList.push(creatureList.fishes[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.fishes.length) {
        guiFishes.body('Looks like you need to unlock an entry here...')
    }
    fishesList.sort()
    for (let i = 0; i < fishesList.length; i++) {
        guiFishes.button(fishesList[i])
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
        if (source.getDynamicProperty(creatureList.invertebrates[i][0].toString()) == true) {
            invertebratesList.push(creatureList.invertebrates[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.invertebrates.length) {
        guiInvertebrates.body('Looks like you need to unlock an entry here...')
    }
    invertebratesList.sort()
    for (let i = 0; i < invertebratesList.length; i++) {
        guiInvertebrates.button(invertebratesList[i])
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
        if (source.getDynamicProperty(creatureList.others[i][0]) == true) {
            othersList.push(creatureList.others[i][1])
        }
        else {
            failCount += 1
        }
    }
    if (failCount >= creatureList.others.length) {
        guiOthers.body('Looks like you need to unlock an entry here...')
    }
    othersList.sort()
    for (let i = 0; i < othersList.length; i++) {
        guiOthers.button(othersList[i])
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
    if (data.item.typeId === 'rift:journal') {
        mainGui(source)
    }
})

world.events.beforeItemUseOn.subscribe(data => {
    if (unlockItemsList.includes(data.item.typeId) && world.getDimension('overworld').getBlock(data.blockLocation).typeId == 'rift:journal_enscriber' && world.getDimension('overworld').getBlock(data.blockLocation).permutation.getProperty('rift:has_book').value == true) {
        switch (data.item.typeId) {
            case 'rift:stegosaurus_plate':
                data.source.setDynamicProperty('0', true)
                data.source.tell('You have unlocked the journal entry for the Stegosaurus! Open your journal to read it!')
                break
            case 'rift:tyrannosaurus_arm':
                data.source.setDynamicProperty('1', true)
                data.source.tell('You have unlocked the journal entry for the Tyrannosaurus! Open your journal to read it!')
                break
            case 'rift:dodo_beak':
                data.source.setDynamicProperty('2', true)
                data.source.tell('You have unlocked the journal entry for the Dodo! Open your journal to read it!')
                break
            case 'rift:triceratops_horn':
                data.source.setDynamicProperty('3', true)
                data.source.tell('You have unlocked the journal entry for the Triceratops! Open your journal to read it!')
                break
            case 'rift:utahraptor_claw':
                data.source.setDynamicProperty('4', true)
                data.source.tell('You have unlocked the journal entry for the Utahraptor! Open your journal to read it!')
                break
            case 'rift:apatosaurus_vertebrae':
                data.source.setDynamicProperty('5', true)
                data.source.tell('You have unlocked the journal entry for the Apatosaurus! Open your journal to read it!')
                break
            case 'rift:parasaurolophus_horn':
                data.source.setDynamicProperty('6', true)
                data.source.tell('You have unlocked the journal entry for the Parasaurolophus! Open your journal to read it!')
                break
            case 'rift:dimetrodon_sail':
                data.source.setDynamicProperty('7', true)
                data.source.tell('You have unlocked the journal entry for the Dimetrodon! Open your journal to read it!')
                break
            case 'rift:coelacanth_scales':
                data.source.setDynamicProperty('8', true)
                data.source.tell('You have unlocked the journal entry for the Coelacanth! Open your journal to read it!')
                break
            case 'rift:megapiranha_scales':
                data.source.setDynamicProperty('9', true)
                data.source.tell('You have unlocked the journal entry for the Megapiranha! Open your journal to read it!')
                break
            case 'rift:sarcosuchus_snout':
                data.source.setDynamicProperty('10', true)
                data.source.tell('You have unlocked the journal entry for the Sarcosuchus! Open your journal to read it!')
                break
            case 'rift:anomalocaris_appendage':
                data.source.setDynamicProperty('11', true)
                data.source.tell('You have unlocked the journal entry for the Anomalocaris! Open your journal to read it!')
                break
            case 'rift:saruophaganax_eye':
                data.source.setDynamicProperty('12', true)
                data.source.tell('You have unlocked the journal entry for the Saurophaganax! Open your journal to read it!')
                break
            case 'rift:direwolf_tail':
                data.source.setDynamicProperty('13', true)
                data.source.tell('You have unlocked the journal entry for the Direwolf! Open your journal to read it!')
                break
            case 'rift:megaloceros_antler':
                data.source.setDynamicProperty('14', true)
                data.source.tell('You have unlocked the journal entry for the Megaloceros! Open your journal to read it!')
                break
            case 'rift:baryonyx_claw':
                data.source.setDynamicProperty('15', true)
                data.source.tell('You have unlocked the journal entry for the Baryonyx! Open your journal to read it!')
                break
            case 'rift:palaeocastor_tail':
                data.source.setDynamicProperty('16', true)
                data.source.tell('You have unlocked the journal entry for the Baryonyx! Open your journal to read it!')
                break
            case 'rift:ankylosaurus_club':
                data.source.setDynamicProperty('17', true)
                data.source.tell('You have unlocked the journal entry for the Ankylosaurus! Open your journal to read it!')
                break
            case 'rift:dilophosaurus_frill':
                data.source.setDynamicProperty('18', true)
                data.source.tell('You have unlocked the journal entry for the Dilophosaurus! Open your journal to read it!')
                break
            case 'rift:gallimimus_foot':
                data.source.setDynamicProperty('19', true)
                data.source.tell('You have unlocked the journal entry for the Gallimimus! Open your journal to read it!')
                break
            case 'rift:tenontosaurus_feather':
                data.source.setDynamicProperty('20', true)
                data.source.tell('You have unlocked the journal entry for the Tenontosaurus! Open your journal to read it!')
                break
            case 'rift:direbear_fur':
                data.source.setDynamicProperty('21', true)
                data.source.tell('You have unlocked the journal entry for the Direbear! Open your journal to read it!')
                break
            case 'rift:coelophysis_head':
                data.source.setDynamicProperty('22', true)
                data.source.tell('You have unlocked the journal entry for the Coelophysis! Open your journal to read it!')
                break
            case 'rift:pteranodon_crest':
                data.source.setDynamicProperty('23', true)
                data.source.tell('You have unlocked the journal entry for the Pteranodon! Open your journal to read it!')
                break
            case 'minecraft:diamond_sword':
                data.source.setDynamicProperty('c', true)
                data.source.tell('You have unlocked the journal entry for Humans! Open your journal to read it!')
                break
            case 'minecraft:emerald':
                data.source.setDynamicProperty('d', true)
                data.source.tell('You have unlocked the journal entry for Villagers! Open your journal to read it!')
            case 'minecraft:totem_of_undying':
                data.source.setDynamicProperty('e', true)
                data.source.tell('You have unlocked the journal entry for Illagers! Open your journal to read it!')
        }
        world.getDimension('overworld').getBlock(data.blockLocation).setPermutation(MinecraftBlockTypes.get('rift:journal_enscriber').createDefaultBlockPermutation().clone())
    }
})