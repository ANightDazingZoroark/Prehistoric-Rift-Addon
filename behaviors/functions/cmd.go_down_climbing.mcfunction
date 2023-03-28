##north
execute as @e[tag=climber, c=1, ry=45, rym=-45] unless block ~ ~ ~+1 air unless block ~ ~ ~+1 glass unless block ~ ~ ~+1 stained_glass unless block ~ ~ ~+1 glass_pane unless block ~ ~ ~+1 stained_glass_pane unless block ~ ~ ~+1 leaves unless block ~ ~ ~+1 leaves2 unless block ~ ~ ~+1 azalea_leaves unless block ~ ~ ~+1 azalea_leaves_flowered unless block ~ ~ ~+1 mangrove_leaves run effect @s slow_falling 1 3 true

##east
execute as @e[tag=climber, c=1, ry=-45, rym=-135] unless block ~+1 ~ ~ air unless block ~+1 ~ ~ glass unless block ~+1 ~ ~ stained_glass unless block ~+1 ~ ~ glass_pane unless block ~+1 ~ ~ stained_glass_pane unless block ~+1 ~ ~ leaves unless block ~+1 ~ ~ leaves2 unless block ~+1 ~ ~ azalea_leaves unless block ~+1 ~ ~ azalea_leaves_flowered unless block ~+1 ~ ~ mangrove_leaves run effect @s slow_falling 1 3 true

##south one
execute as @e[tag=climber, c=1, ry=180, rym=135] unless block ~ ~ ~-1 air unless block ~ ~ ~-1 glass unless block ~ ~ ~-1 stained_glass unless block ~ ~ ~-1 glass_pane unless block ~ ~ ~-1 stained_glass_pane unless block ~ ~ ~-1 leaves unless block ~ ~ ~-1 leaves2 unless block ~ ~ ~-1 azalea_leaves unless block ~ ~ ~-1 azalea_leaves_flowered unless block ~ ~ ~-1 mangrove_leaves run effect @s slow_falling 1 3 true

##south two
execute as @e[tag=climber, c=1, ry=-135, rym=-180] unless block ~ ~ ~-1 air unless block ~ ~ ~-1 glass unless block ~ ~ ~-1 stained_glass unless block ~ ~ ~-1 glass_pane unless block ~ ~ ~-1 stained_glass_pane unless block ~ ~ ~-1 leaves unless block ~ ~ ~-1 leaves2 unless block ~ ~ ~-1 azalea_leaves unless block ~ ~ ~-1 azalea_leaves_flowered unless block ~ ~ ~-1 mangrove_leaves run effect @s slow_falling 1 3 true

##west
execute as @e[tag=climber, c=1, ry=135, rym=45] unless block ~-1 ~ ~ air unless block ~-1 ~ ~ glass unless block ~-1 ~ ~ stained_glass unless block ~-1 ~ ~ glass_pane unless block ~-1 ~ ~ stained_glass_pane unless block ~-1 ~ ~ leaves unless block ~-1 ~ ~ leaves2 unless block ~-1 ~ ~ azalea_leaves unless block ~-1 ~ ~ azalea_leaves_flowered unless block ~-1 ~ ~ mangrove_leaves run effect @s slow_falling 1 3 true