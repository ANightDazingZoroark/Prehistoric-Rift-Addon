import { world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import * as guiEntry from "./JournalEntries"

let creatureList = {
    dinosaurs: [
        'Apatosaurus',
        'Baryonyx',
        'Parasaurolophus',
        'Saurophaganax',
        'Stegosaurus',
        'Triceratops',
        'Tyrannosaurus',
        'Utahraptor'
    ],
    mammals: [
        'Dimetrodon',
        'Direwolf',
        'Megaloceros'
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
        'Humans'
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

//for dinosaurs
const guiDinosaurs = new ActionFormData()
.title('Dinosaurs')
.button('Return to Index')
for (let i = 0; i < creatureList.dinosaurs.length; i++) {
    guiDinosaurs.button(creatureList.dinosaurs[i])
}

//for mammals
const guiMammals = new ActionFormData()
.title('Mammals')
.button('Return to Index')
for (let i = 0; i < creatureList.mammals.length; i++) {
    guiMammals.button(creatureList.mammals[i])
}

//for reptiles
const guiReptiles = new ActionFormData()
.title('Reptiles')
.button('Return to Index')
for (let i = 0; i < creatureList.reptiles.length; i++) {
    guiReptiles.button(creatureList.reptiles[i])
}

//for birds
const guiBirds = new ActionFormData()
.title('Birds')
.button('Return to Index')
for (let i = 0; i < creatureList.birds.length; i++) {
    guiBirds.button(creatureList.birds[i])
}

//for fish
const guiFishes = new ActionFormData()
.title('Fishes')
.button('Return to Index')
for (let i = 0; i < creatureList.fishes.length; i++) {
    guiFishes.button(creatureList.fishes[i])
}

//for invertebrates
const guiInvertebrates = new ActionFormData()
.title('Invertebrates')
.button('Return to Index')
for (let i = 0; i < creatureList.invertebrates.length; i++) {
    guiInvertebrates.button(creatureList.invertebrates[i])
}

//for others
const guiOthers = new ActionFormData()
.title('Others')
.button('Return to Index')
for (let i = 0; i < creatureList.others.length; i++) {
    guiOthers.button(creatureList.others[i])
}

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
    guiDinosaurs.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.dinosaurs[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function mammalsGui(source) {
    guiMammals.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.mammals[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function reptilesGui(source) {
    guiReptiles.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.reptiles[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function birdsGui(source) {
    guiBirds.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.birds[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function fishesGui(source) {
    guiFishes.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.fishes[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function invertebratesGui(source) {
    guiInvertebrates.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.invertebrates[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function othersGui(source) {
    guiOthers.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+creatureList.others[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

world.afterEvents.itemUse.subscribe(data => {
    const source = data.source
    if (data.item.typeId === 'rift:journal') {
        mainGui(source)
    }
})