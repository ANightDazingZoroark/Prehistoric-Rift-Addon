import { world } from "mojang-minecraft";

let saurophaganaxFood = [
    'minecraft:blaze',
    'minecraft:creeper',
    'minecraft:drowned',
    'minecraft:elder_guardian',
    'minecraft:endermite',
    'minecraft:ghast',
    'minecraft:guardian',
    'minecraft:husk',
    'minecraft:magma_cube',
    'minecraft:phantom',
    'minecraft:shulker',
    'minecraft:silverfish',
    'minecraft:skeleton',
    'minecraft:slime',
    'minecraft:stray',
    'minecraft:vex',
    'minecraft:wither_skeleton',
    'minecraft:zoglin',
    'minecraft:zombie',
    'minecraft:zombie_villager',
    'minecraft:bee',
    'minecraft:cave_spider',
    'minecraft:enderman',
    'minecraft:spider',
    'minecraft:zombie_pigman',
    'minecraft:skeleton_horse',
    'minecraft:zombie_horse',
    'rift:anomalocaris'
]

world.events.entityHit.subscribe(( { entity, hitEntity } ) => {
    if (entity.id == 'rift:dimetrodon' && entity.getComponent('is_charged')) {
        hitEntity.runCommand(`effect @s weakness 20 2`)
        hitEntity.runCommand(`effect @s slowness 20 2`)
    }
    if (entity.id == 'rift:anomalocaris') {
        entity.runCommand(`effect @s instant_health 5`)
    }
    if (entity.id == 'rift:saurophaganax' && saurophaganaxFood.includes(hitEntity.id)) {
        entity.runCommand(`scoreboard players add @s[scores={saurophLightBlst=!10}] saurophLightBlst 1`)
    }
})

world.events.entityHurt.subscribe(({ hurtEntity, damagingEntity }) => {
    if (damagingEntity.id == 'rift:sarco_spin_attack_hitter') {
        hurtEntity.runCommand(`effect @s slowness 30 2`)
    }
    if (damagingEntity.id == 'rift:anomalocaris_slash') {
        damagingEntity.runCommand(`effect @e[type=rift:anomalocaris, c=1, tag=tamed] instant_health 5`)
    }
    if (damagingEntity.id == 'rift:saurophaganax_bite_prime' && saurophaganaxFood.includes(hurtEntity.id)) {
        damagingEntity.runCommand(`scoreboard players add @e[type=rift:saurophaganax, c=1, tag=tamed, scores={saurophLightBlst=!10}] saurophLightBlst 1`)
    }
})