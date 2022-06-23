import "scripts/JournalManagement.js";
import { ActionFormData } from "mojang-minecraft-ui"
import { world } from "mojang-minecraft";

export const guiTyrannosaurusEntry = new ActionFormData()
.title('Tyrannosaurus')
.body("\n\n\n\n\n\n\n\n\n\n\nThe strongest creature ever brought about by the Rift. No need for help from others or weird gimmicks. Just pure raw strength, power, and bulk. This creature is basically the gold standard for being powerful.\n\nI'm not sure if that's an exaggeration really. All known methods to kill a mob work on a Tyrannosaurus as well, but are just more time consuming expensive.\n\nThe knockback roar they emit when hurt is quite a pain, able to hurl back mobs and even break blocks.")
.button('Return to Index')