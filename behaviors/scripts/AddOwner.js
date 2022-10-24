import { world } from "mojang-minecraft"

let eggs = [
    'rift:tyrannosaurus_egg',
    'rift:stegosaurus_egg',
    'rift:triceratops_egg',
    'rift:utahraptor_egg',
    'rift:apatosaurus_egg',
    'rift:parasaurolophus_egg',
    'rift:dimetrodon_egg',
    'rift:sarcosuchus_egg',
    'rift:anomalocaris_sac',
    'rift:saurophaganax_egg',
    'rift:baryonyx_egg',
    'rift:ankylosaurus_egg'
]

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
        case 'rift:apatosaurus':
            return [
                'rift:berry_treat',
                'rift:grassy_treat',
                'rift:leafy_treat'
            ]
            break
        case 'rift:parasaurolophus':
            return [
                'rift:berry_treat',
                'rift:grassy_treat',
                'rift:rooted_treat'
            ]
            break
        case 'rift:dimetrodon':
            return [
                'rift:flesh_treat',
                'rift:fish_treat',
                'rift:carrion_treat'
            ]
            break
        case 'rift:sarcosuchus':
            return [
                'rift:fish_treat'
            ]
            break
        case 'rift:anomalocaris':
            return [
                'rift:fish_treat',
                'rift:bug_treat'
            ]
            break
        case 'rift:saurophaganax':
            return [
                'rift:carrion_treat',
                'rift:bug_treat'
            ]
            break
        case 'rift:direwolf':
            return [
                'rift:flesh_treat'
            ]
            break
        case 'rift:megaloceros':
            return [
                'rift:berry_treat',
                'rift:grassy_treat',
                'rift:leafy_treat'
            ]
            break
        case 'rift:baryonyx':
            return [
                'rift:fish_treat'
            ]
            break
        case 'rift:ankylosaurus':
            return [
                'rift:cactus_treat',
                'rift:grassy_treat',
                'rift:rooted_treat'
            ]
            break
    }
}
//upon being tamed
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
    else if (ev.entity.id == 'rift:triceratops' && (ev.id == 'rift:baby_on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:utahraptor' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:apatosaurus' && ev.id == 'rift:baby_on_tame') {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:parasaurolophus' && (ev.id == 'rift:baby_on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:dimetrodon' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:sarcosuchus' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:anomalocaris' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:saurophaganax' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:megaloceros' && (ev.id == 'rift:baby_on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:baryonyx' && (ev.id == 'rift:on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
    else if (ev.entity.id == 'rift:ankylosaurus' && (ev.id == 'rift:baby_on_tame' || ev.id == 'rift:adult_on_tame')) {
        ev.entity.addTag('Owner'+ownerName())
    }
})

//upon placing an egg
world.events.entityCreate.subscribe((ev) => {
    console.warn('hello')
    let ownerName = function () {
        for (let x = 0; x < eggs.length; x++) {
            try {
                return ev.entity.runCommand(`testfor @p[hasitem={item=`+eggs[x]+`, location=slot.weapon.mainhand}]`).victim[0]
            }
            catch (e) {}
        }
    }
    if (ev.entity.id == 'rift:egg' || ev.entity.id == 'rift:sac') {
        console.warn(ownerName())
        ev.entity.addTag('Owner'+ownerName())
    }
})

//upon hatching from an egg
world.events.dataDrivenEntityTriggerEvent.subscribe((ev) => {})