import { world } from "mojang-minecraft";
import { ActionFormData, ModalFormData } from "mojang-minecraft-ui"
import * as guiEntry from "./JournalEntries";

let creatureList = [
    ['Anomalocaris', 'invertebrates'],
    ['Apatosaurus', 'dinosaurs'],
    ['Baryonyx', 'dinosaurs'],
    ['Coelacanth', 'fishes'],
    ['Dimetrodon', 'mammals'],
    ['Direwolf', 'mammals'],
    ['Dodo', 'birds'],
    ['Megaloceros', 'mammals'],
    ['Megapiranha', 'fishes'],
    ['Parasaurolophus', 'dinosaurs'],
    ['Sarcosuchus', 'reptiles'],
    ['Saurophaganax', 'dinosaurs'],
    ['Stegosaurus', 'dinosaurs'],
    ['Triceratops', 'dinosaurs'],
    ['Tyrannosaurus', 'dinosaurs'],
    ['Utahraptor', 'dinosaurs']
]

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

//for dinosaurs
const guiDinosaurs = new ActionFormData()
.title('Dinosaurs')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "dinosaurs") {
        guiDinosaurs.button(creatureList[i][0])
    }
}

//for mammals
const guiMammals = new ActionFormData()
.title('Mammals')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "mammals") {
        guiMammals.button(creatureList[i][0])
    }
}

//for reptiles
const guiReptiles = new ActionFormData()
.title('Reptiles')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "reptiles") {
        guiReptiles.button(creatureList[i][0])
    }
}

//for birds
const guiBirds = new ActionFormData()
.title('Birds')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "birds") {
        guiBirds.button(creatureList[i][0])
    }
}

//for fish
const guiFishes = new ActionFormData()
.title('Fishes')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "fishes") {
        guiFishes.button(creatureList[i][0])
    }
}

//for invertebrates
const guiInvertebrates = new ActionFormData()
.title('Invertebrates')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "invertebrates") {
        guiInvertebrates.button(creatureList[i][0])
    }
}

function mainGui(source) {
    guiMain.show(source).then(result => {
        if (result.selection === 0) {
            searchGui(source)
        }
        if (result.selection === 1) {
            guiEntry.guiTutorialEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection === 2) {
            dinosaursGui(source)
        }
        if (result.selection === 3) {
            mammalsGui(source)
        }
        if (result.selection === 4) {
            reptilesGui(source)
        }
        if (result.selection === 5) {
            birdsGui(source)
        }
        if (result.selection === 6) {
            fishesGui(source)
        }
        if (result.selection === 7) {
            invertebratesGui(source)
        }
    })
}

function searchGui(source) {
    const guiSearch = new ModalFormData()
    .title('Search')
    .textField("Search Entry", "(e.x., Tyrannosaurus)")
    .show(source).then(result => {
        searchResultsGui(source, creatureList.map(element => element[0].toLowerCase()).filter((element) => element.includes(result.formValues[0].toLowerCase())))
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
            eval("guiEntry.gui"+searchResults[result.selection-2]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})");
        }
    })
}

function dinosaursGui(source) {
    guiDinosaurs.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            guiEntry.guiApatosaurusEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 2) {
            guiEntry.guiBaryonyxEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 3) {
            guiEntry.guiParasaurolophusEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 4) {
            guiEntry.guiSaurophaganaxEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 5) {
            guiEntry.guiStegosaurusEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 6) {
            guiEntry.guiTriceratopsEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 7) {
            guiEntry.guiTyrannosaurusEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 8) {
            guiEntry.guiUtahraptorEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
    })
}

function mammalsGui(source) {
    guiMammals.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            guiEntry.guiDimetrodonEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 2) {
            guiEntry.guiDirewolfEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 3) {
            guiEntry.guiMegalocerosEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
    })
}

function reptilesGui(source) {
    guiReptiles.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            guiEntry.guiSarcosuchusEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
    })
}

function birdsGui(source) {
    guiBirds.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            guiEntry.guiDodoEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
    })
}

function fishesGui(source) {
    guiFishes.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            guiEntry.guiCoelacanthEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
        if (result.selection == 2) {
            guiEntry.guiMegapiranhaEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
    })
}

function invertebratesGui(source) {
    guiInvertebrates.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection == 1) {
            guiEntry.guiAnomalocarisEntry.show(source).then(result => {
                if (result.selection == 0) {
                    mainGui(source)
                }
            })
        }
    })
}

world.events.beforeItemUse.subscribe(data => {
    const source = data.source
    if (data.item.id === 'rift:journal') {
        mainGui(source)
    }
})