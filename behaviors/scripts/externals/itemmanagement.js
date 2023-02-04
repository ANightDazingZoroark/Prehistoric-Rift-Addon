export function clearEntity(entity, item, data = -1, amount = function() {
    let num = 0
    for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
        try {
            if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                num += entity.getComponent('inventory').container.getItem(x).amount
            }
        }
        catch (e) {}
    }
    return num
}) {
    if (item == undefined) {
        for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
            entity.runCommandAsync(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
        }
    }
    else {
        let invAmount = 0
        for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
            try {
                if (entity.getComponent('inventory').container.getItem(i).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(i).data == data)) {
                    invAmount += entity.getComponent('inventory').container.getItem(i).amount
                }
            }
            catch (e) {}
        }
        if (invAmount == amount) {
            for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
                try {
                    if (entity.getComponent('inventory').container.getItem(i).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(i).data == data)) {
                        entity.runCommandAsync(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
                    }
                }
                catch (e) {}
            }
        }
        if (invAmount > amount) {
            let reducAmount = 0
            for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
                try {
                    for (let j = 0; j < amount; j++) {
                        if (entity.getComponent('inventory').container.getItem(i).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(i).data == data)) {
                            if (reducAmount >= amount) {
                                break
                            }
                            if (entity.getComponent('inventory').container.getItem(i).amount > 1) {
                                entity.runCommandAsync(`replaceitem entity @s slot.inventory `+i+` `+entity.getComponent('inventory').container.getItem(i).typeId+` `+(entity.getComponent('inventory').container.getItem(i).amount-1).toString()+` `+entity.getComponent('inventory').container.getItem(i).data)
                            }
                            else {
                                entity.runCommandAsync(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
                            }
                            reducAmount += 1
                        }
                    }
                }
                catch (e) {
                    continue
                }
            }
        }
    }
}

export function testForItem(entity, item, data = -1, operator = '==', amount = function() {
    let num = 0
    for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
        try {
            if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                num += entity.getComponent('inventory').container.getItem(x).amount
            }
        }
        catch (e) {}
    }
    if (num > 0) {
        return num
    }
}) {
    if (operator == '==') { //equal to amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num == amount()) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '>') { //greater than amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num > amount()) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '>=') { //greater than or equal to amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num >= amount()) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '<') { //less than amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num < amount()) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '<=') { //less than or equal to amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num <= amount()) {
            return true
        }
        else {
            return false
        }
    }
}