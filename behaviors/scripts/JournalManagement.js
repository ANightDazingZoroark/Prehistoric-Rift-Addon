import { world } from "mojang-minecraft";
import { ActionFormData, ModalFormData } from "mojang-minecraft-ui"
import * as guiEntry from "./JournalEntries";

let creatureList = [
    ['Animals', 'others'],
    ['Anomalocaris', 'invertebrates'],
    ['Apatosaurus', 'dinosaurs'],
    ['Baryonyx', 'dinosaurs'],
    ['Coelacanth', 'fishes'],
    ['Dimetrodon', 'mammals'],
    ['Direwolf', 'mammals'],
    ['Dodo', 'birds'],
    ['Humans', 'others'],
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
.button('Others')

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

//for others
const guiOthers = new ActionFormData()
.title('Others')
.button('Return to Index')
for (let i = 0; i < creatureList.length; i++) {
    if (creatureList[i][1] == "others") {
        guiOthers.button(creatureList[i][0])
    }
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
            eval("guiEntry.gui"+searchResults[result.selection-2]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function dinosaursGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "dinosaurs") {
            validList.push(creatureList[creature][0])
        };
    };
    guiDinosaurs.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function mammalsGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "mammals") {
            validList.push(creatureList[creature][0])
        };
    };
    guiMammals.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function reptilesGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "reptiles") {
            validList.push(creatureList[creature][0])
        };
    };
    guiReptiles.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function birdsGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "birds") {
            validList.push(creatureList[creature][0])
        };
    };
    guiBirds.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function fishesGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "fishes") {
            validList.push(creatureList[creature][0])
        };
    };
    guiFishes.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function invertebratesGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "invertebrates") {
            validList.push(creatureList[creature][0])
        };
    };
    guiInvertebrates.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

function othersGui(source) {
    let validList = [];
    for (let creature in creatureList) {
        if (creatureList[creature][1] === "others") {
            validList.push(creatureList[creature][0])
        };
    };
    guiOthers.show(source).then(result => {
        if (result.selection == 0) {
            mainGui(source)
        }
        if (result.selection > 0) {
            eval("guiEntry.gui"+validList[result.selection-1]+"Entry.show(source).then(result => {if (result.selection == 0) {mainGui(source)}})")
        }
    })
}

world.events.beforeItemUse.subscribe(data => {
    const source = data.source
    if (data.item.id === 'rift:journal') {
        mainGui(source)
    }
})