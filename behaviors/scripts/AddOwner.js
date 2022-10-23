import { world } from "mojang-minecraft"

function getFavoriteTreats(entity) {
    switch (entity.id) {
        case 'rift:tyrannosaurus':
            return [
                'rift:flesh_treat', 
                'rift:carrion_treat'
            ]
            break
        case 'rift:stegosaurus':
            return [
                'rift:berry_treat',
                'rift:grassy_treat',
                'rift:rooted_treat'
            ]
            break
        case 'rift:triceratops':
            return [
                'rift:berry_treat',
                'rift:grassy_treat',
                'rift:rooted_treat'
            ]
            break
        case 'rift:utahraptor':
            return [
                'rift:flesh_treat'
            ]
            break
    }
}

world.events.dataDrivenEntityTriggerEvent.subscribe((ev) => {
    let ownerName = function () {
        for (let x = 0; x < getFavoriteTreats(ev.entity).length; x++) {
            try {
                return ev.entity.runCommand(`testfor @p[hasitem={item=`+getFavoriteTreats(ev.entity)[x]+`, location=slot.weapon.mainhand}]`).victim[0]
            }
            catch (e) {}
        }
    }
    if (ev.entity.id == 'rift:tyrannosaurus' && ev.id == 'rift:on_tame') {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:stegosaurus' && (ev.id == 'rift:baby_on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id = 'rift:triceratops' && (ev.id == 'rift:baby_on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id = 'rift:utahraptor' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
})